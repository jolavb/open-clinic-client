import Ember from 'ember';

export default Ember.Controller.extend({
  // phases: ['Early Phase 1','Phase 1','Phase 1/Phase 2', 'Phase 2', 'Phase 2/Phase 3','Phase 3', 'Phase 4'],
  actions: {
    searchStudies(phases) {
      console.log('phases');
    }
  }
});
