import Ember from 'ember';

export default Ember.Component.extend({
  comment: {
    text: null,
    study: null
  },
  actions: {
    newComment(study) {
      this.set('comment.study', study);
      this.sendAction('newComment', this.get('comment'));
      this.set('comment.text',null);
    },
  },
});
