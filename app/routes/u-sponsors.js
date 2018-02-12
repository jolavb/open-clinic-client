import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin,{
  queryParams: {
    sponsor: {
      refreshModel: true,
       replace: false
    }
  },
  perPage: 25,
  model(params) {
    return this.findPaged('u-sponsor',params);
  },
  actions: {
    back(){
      console.log('hello')
    }
  }
});
