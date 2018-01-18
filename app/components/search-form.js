import Ember from 'ember';

export default Ember.Component.extend({
  search: Ember.inject.service(),
  // make this phase and set on search studies or call directly
  phases: Ember.computed('search', function(){ return this.get('search.phases')}),
  phase: null,
   actions: {
     searchStudies(phase) {
       console.log(this.get('search.phases'))
       // this.sendAction('searchStudies', phase);
     },
   },
});
