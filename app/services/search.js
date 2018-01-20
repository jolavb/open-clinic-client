import Ember from 'ember';

export default Ember.Service.extend({
  filter: {
      officialTitle: null,
      selectedPhases: null
  },
  title: null,
  phaseOptions: ['Early Phase 1','Phase 1','Phase 1/Phase 2', 'Phase 2', 'Phase 2/Phase 3','Phase 3', 'Phase 4'],

});
