import Ember from 'ember';

export default Ember.Route.extend({
  spinner: Ember.inject.service('spinner'),
  queryParams: {
      phase:{refreshModel: true},
    },
  tagName:'table',
  model (params) {
    let spinner = this.get('spinner');
    spinner.show('123');
    return this.get('store').query('study', params)
    .then(function(data){
      spinner.hide('123');
      return data;
    });
  },
  actions: {
    showSpinner() {
      this.get('spinner').show('123');
      },
    hideSpinner() {
      this.get('spinner').hide('123');
    }
  }
});
