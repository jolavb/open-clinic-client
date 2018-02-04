import Ember from 'ember';

export default Ember.Service.extend({
  meta: {},
  filter: {
      officialTitle: null,
      selectedPhases: [],
      page: 1,
      per_page:10
  },

  perPage: [10,25,50,100],
  title: null,
  phaseOptions: ['Early Phase 1','Phase 1','Phase 1/Phase 2', 'Phase 2', 'Phase 2/Phase 3','Phase 3', 'Phase 4'],

});
