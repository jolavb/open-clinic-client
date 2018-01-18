import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  search: Ember.inject.service(),
  model() {
    return  this.get('search')
  },
  actions: {
    searchStudies() {
      this.transitionTo('studies');
    }
  }
});
