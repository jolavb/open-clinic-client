import Ember from 'ember';
import RSVP from 'rsvp';


export default Ember.Route.extend({
  spinner: Ember.inject.service('spinner'),
  model () {
    return RSVP.Promise.resolve({});
  },
});
