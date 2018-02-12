import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sponsor'],
  sponsor: 'All',
  back: Ember.computed('sponsor', function(){
    this.get('sponsor')
    console.log('back')
  }),
  actions: {
    searchSponsors(Usponsor) {
      if (!Ember.isEmpty(Usponsor)) {
          this.set('sponsor', Usponsor)
      } else {
        this.set('sponsor', 'All')
      }
    }
  }


});
