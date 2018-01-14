import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['comment'],
  auth: Ember.inject.service(),
  userId: Ember.computed.alias('auth.credentials.id'),
  ownerId: Ember.computed.alias('comment.user.id'),
  isOwner: Ember.computed('userId','ownerId', function(){
    return this.get('userId') === parseInt(this.get('ownerId'));
  }),
  comment: 'comment',
  actions: {
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    editComment() {
      this.sendAction('editComment', this.get('comment'))
    }
  },
});
