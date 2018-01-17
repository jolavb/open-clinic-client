import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  sortedComments: Ember.computed.sort('study.comments', 'sortDefinition'),
  sortDefinition: ['createdAt:desc'],

  actions: {
    newComment(comment) {
      this.sendAction('newComment', comment);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    editComment(comment) {
      this.sendAction('editComment', comment);
    }
  }
});
