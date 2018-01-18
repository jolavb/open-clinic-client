import Ember from 'ember';


export default Ember.Controller.extend({
  queryParams: ['phase'],
  // phases: ['Early Phase 1','Phase 1','Phase 1/Phase 2', 'Phase 2', 'Phase 2/Phase 3','Phase 3', 'Phase 4'],
  // phase: ['Early Phase 1','Phase 1','Phase 1/Phase 2', 'Phase 2', 'Phase 2/Phase 3','Phase 3', 'Phase 4'],

  filteredStudies: Ember.computed('phase', 'model', function() {
    let phase = this.get('phase');
    let studies = this.get('model');
    if (phase) {
      return studies.filterBy('phase', phase);
    } else {
      return studies;
    }
  }),
  actions: {
    searchStudies(phase) {
      this.set('phase', phase)
    }
  },
});
