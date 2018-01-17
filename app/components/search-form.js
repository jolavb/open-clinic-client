import Ember from 'ember';

export default Ember.Component.extend({
   actions: {
     searchStudies(phase) {
       this.sendAction('searchStudies', phase);
     },
   },
});
