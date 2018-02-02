import Ember from 'ember';

export default Ember.Component.extend({
  search: Ember.inject.service(),
  spinner: Ember.inject.service(),
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
      .then((results) => this.set('results', results))
      .then(()=> spinner.hide('uniq-123'));
  },
  actions: {
    searchStudies() {
      // Get spinner service as spinner
      let spinner = this.get('spinner');
      // get filterInputValue as search service selected phases
      let filterInputValue = this.get('search.filter');
      // get filterAction as filterByPhase which is defined in the studies controller.
      let filterAction = this.get('filter');
      // show spinner
      spinner.show('uniq-123');
      // call filter action, passing it the input values. The controller then
      // returns the filtered results in a promise chain.
      filterAction(filterInputValue)
      // set results = to output of filterAction. List-filter yeilds results which
      // are then looped through in studies.hbs.
        .then((filterResults) => this.set('results', filterResults))
        // hide filter
        .then(()=> spinner.hide('uniq-123'));
    }
  }
});
