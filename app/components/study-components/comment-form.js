import Ember from 'ember';

export default Ember.Component.extend({
  comment: {
    text: null,
    nctId: null
  },
  actions: {
    newComment(study) {
      this.set('comment.nctId', study.id)
      this.sendAction('newComment', this.get('comment'))
    },
  },
});
