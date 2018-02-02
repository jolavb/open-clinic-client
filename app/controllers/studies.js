import Ember from 'ember';

export default Ember.Controller.extend({
  search: Ember.inject.service(),

  actions: {
    filterByPhase(param) {

      let cleanedParams = {};
      // updates params for get request to only include non-blank
      Object.entries(param).forEach((entry) =>{
        if (entry[1] && entry[1].length > 0) {
            cleanedParams[entry[0]] = entry[1];
        }
      });

      if(Object.entries(cleanedParams).length === 0) {
        return this.get('store').findAll('study');
      } else {
        return this.get('store').query('study', cleanedParams);
      }

      return this.get('store').findAll('study');
    }
  }
});
