import Ember from 'ember';

export default Ember.Component.extend({
  search: Ember.inject.service(),
  spinner: Ember.inject.service(),
  totalPages: Ember.computed('search.meta', function(){
    return this.get('search.meta.total_pages');
  }),
  // Ember.computed('search.filter.per_page', function(){
  //   return this.get('search.filter.per_page')
  // }),

  nextTenPages: Ember.computed('search.meta', function(){
    let total = this.get('search.meta.total_pages');
    let current = this.get('search.meta.current_page');
    let pages = Array.from(new Array(total),(val,index)=>index);
    return pages.slice(current, current + 10);
  }),
  classNames: ['list-filter'],
  selectedPhases: null,
  phasesOptions: ['Early Phase 1','Phase 1','Phase 1/Phase 2', 'Phase 2', 'Phase 2/Phase 3','Phase 3', 'Phase 4'],

  didInsertElement() {
    this._super(...arguments);
    let params = '';
    let spinner = this.get('spinner');
    spinner.show('uniq-123');
    if (this.get('search.filter')) {
      params = this.get('search.filter');
    }
    // passes current search params to studies controller action
    this.get('filter')(params)
      .then((results) => {
        this.set('search.meta', results.meta);
        this.set('results', results);
      })
      .then(()=> spinner.hide('uniq-123'));
  },
  actions: {
    searchStudies(updated,showspin) {

      if (updated) {
        this.set('search.filter.page', 1);
      }
       // Get spinner service as spinner
      let spinner = this.get('spinner');
      // get filterInputValue as search service selected phases
      let filterInputValue = this.get('search.filter');
      // get filterAction as filterByPhase which is defined in the studies controller.
      let filterAction = this.get('filter');
      // show spinner

      if(showspin) {
        spinner.show('uniq-123');
      }
      // spinner.show('uniq-123');
      // call filter action, passing it the input values. The controller then
      // returns the filtered results in a promise chain.
      filterAction(filterInputValue)
      // set results = to output of filterAction. List-filter yeilds results which
      // are then looped through in studies.hbs.
        .then((filterResults) => {
          this.set('search.meta', filterResults.meta);
          this.set('results', filterResults);
        })
        // hide spinner
        .then(()=> spinner.hide('uniq-123'));
    },
    next(){
      let next = this.get('search.meta.next_page');
      this.set('search.filter.page', next);
      this.send('searchStudies');
    },
    previous(){
      let prev = this.get('search.meta.prev_page');
      this.set('search.filter.page', prev);
      this.send('searchStudies');
    },
    pageLink(page){
      this.set('search.filter.page', page);
      this.send('searchStudies');
    }
  }
});
