import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    filterByPhase(param) {
      if (param !== '') {
        return this.get('store').query('study', { phase: param });
      } else {
        return this.get('store').findAll('study');
      }
    }
  }
});
