import Ember from 'ember';

export default Ember.Controller.extend({
  search: Ember.inject.service(),

  actions: {
    filterByPhase(param) {
      if (param !== '') {
        return this.get('store').query('study', { phase: param.selectedPhases });
      } else {
        return this.get('store').findAll('study');
      }
    }
  }
});
