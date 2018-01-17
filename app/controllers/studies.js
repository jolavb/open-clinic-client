import Ember from 'ember';


export default Ember.Controller.extend({
  queryParams: ['phase'],
  phases: ['Early Phase 1','Phase 1','Phase 1/Phase 2', 'Phase 2', 'Phase 2/Phase 3','Phase 3', 'Phase 4'],
  phase: [],
  actions: {
    searchStudies(phase) {
      this.set('phase', phase)
    }
  },
});
