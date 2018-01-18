import Ember from 'ember';

export default Ember.Component.extend({
  search: Ember.inject.service(),
  // make this phase and set on search studies or call directly
  selectedPhases: null,
   actions: {
     searchStudies(selectedPhases) {
       this.get('search').searchPhases(selectedPhases)
     },
   },
});
