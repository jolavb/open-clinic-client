import Ember from 'ember';

export default Ember.Route.extend({
  spinner: Ember.inject.service(),
  model() {
    return this.get('store').findAll('u-sponsor');
  }
});
