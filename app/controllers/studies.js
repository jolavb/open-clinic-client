import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["page", "perPage", "officialTitle", "selectedPhases" ],
  officialTitle: "All",
  phaseOptions: ['Early Phase 1','Phase 1','Phase 1/Phase 2', 'Phase 2', 'Phase 2/Phase 3','Phase 3', 'Phase 4'],
  selectedPhases: "All",

  actions: {
    searchStudies(title,selectedPhase) {
      if (Ember.isEmpty(title)) {
        title = "All"
      }
      if (Ember.isEmpty(selectedPhase)) {
        selectedPhase = 'All'
      }

      this.setProperties({officialTitle: title, selectedPhases: selectedPhase})
    }
  }
});
