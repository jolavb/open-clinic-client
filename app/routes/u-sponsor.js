import Ember from 'ember';

export default Ember.Route.extend({
  // spinner: Ember.inject.service(),
  model(params) {
    return this.get('store').findRecord('u-sponsor', params['u-sponsor_id'])
  },

  actions: {
    back() {
      history.back()
    }
  }
});
