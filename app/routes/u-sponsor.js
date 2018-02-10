import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend( {
  model(params) {
    console.log('hello')
    return this.get('store').findRecord('u-sponsor', params['u-sponsor_id'])
  },
  actions: {
    back(){
      this.transitionTo('u-sponsors');
  }
}
});
