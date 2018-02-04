import Ember from 'ember';

export default Ember.Controller.extend({
  search: Ember.inject.service(),
  page: 1,

  metaData: Ember.computed('model', function(){
    let meta = this.get('model.meta');
    meta['second_last'] = meta.total_pages - 1;
    meta['third_last'] = meta.total_pages - 2;
    return meta;
  }),

  lastThreePages: Ember.computed('model', function(){
    if (this.get('page') < this.get('metaData.total_pages') - 3) {
      return false;
    } else {
      return true;
    }
  }),

  actions: {
    filterByPhase(param) {
      let cleanedParams = {};
      // updates params for get request to only include non-blank
      Object.entries(param).forEach((entry) =>{
        if (entry[1] && entry[1] !== 0) {
            cleanedParams[entry[0]] = entry[1];
        }
      });
      return this.get('store').query('study', cleanedParams)
    },
   },
});
