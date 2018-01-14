import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  // owner: Ember.computed.alias('comment.'),
  actions: {
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
  },
});
