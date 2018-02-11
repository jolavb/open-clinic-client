import Ember from 'ember';

import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin,{
  perPage: 25,
  queryParams: {
    officialTitle: { refreshModel: true },
    selectedPhases: { refreshModel: true }
  },
  model(params) {
    return this.findPaged('study',params)
  }

});
