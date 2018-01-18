import Ember from 'ember';

export default Ember.Component.extend({
  search: Ember.inject.service(),
  spinner: Ember.inject.service(),
  classNames: ['list-filter'],
  selectedPhases: null,
  phasesOptions: ['Early Phase 1','Phase 1','Phase 1/Phase 2', 'Phase 2', 'Phase 2/Phase 3','Phase 3', 'Phase 4'],
  init() {
    this._super(...arguments);
    this.get('filter')(this.get('search.selectedPhases')).then((results) => this.set('results', results));
  },
  actions: {
    searchStudies() {
      let spinner = this.get('spinner')
      let filterInputValue = this.get('search.selectedPhases');
      let filterAction = this.get('filter');
      spinner.show('uniq-123')
      filterAction(filterInputValue)
        .then((filterResults) => this.set('results', filterResults))
        .then(()=> spinner.hide('uniq-123'))
      ;
    }
  }
});
