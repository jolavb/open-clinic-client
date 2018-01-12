import Ember from 'ember';

export default Ember.Component.extend({
  comment: null,
  actions: {
    newComment(comment) {
      this.sendAction('newComment', this.get('comment'))
    },
  },
});
