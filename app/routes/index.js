import Ember from 'ember';

export default Ember.Route.extend({
  classNames: ['test'],
  search: Ember.inject.service(),
  model() {
    return  this.get('search');
  },
  actions: {
    searchStudies() {
      this.transitionTo('studies');
    }
  }
});
