import Ember from 'ember';



export default Ember.Component.extend({
  phases: ['Early Phase 1','Phase 1','Phase 1/Phase 2', 'Phase 2', 'Phase 2/Phase 3','Phase 3', 'Phase 4'],
   actions: {
     searchStudies() {
       this.sendAction('searchStudies', this.get('phase'))
     },
   },
  // tagName: 'form',
  // phases: ['a','b','c'],
  // selectedPhases: [],
  // actions: {
  //   searchStudies(test) {
  //     console.log(test)
  //   },
  //   selectPhase(event) {
  //     const selectedBands = Ember.$(event.target).val();
  //     this.set('selectedPhases', selectedPhases);
  //   },
});
