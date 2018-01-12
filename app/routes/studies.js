import Ember from 'ember';

export default Ember.Route.extend({
  tagName:'table',
  model () {
    return this.get('store').findAll('study')
  }
});
