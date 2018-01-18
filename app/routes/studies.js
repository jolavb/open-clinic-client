import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
      phase:{refreshModel: true},
    },
  model (params) {
    return this.get('store').query('study', params)
  },
});
