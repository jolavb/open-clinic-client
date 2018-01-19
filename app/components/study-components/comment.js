import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['comment', 'clearfix'],
  auth: Ember.inject.service(),
  userId: Ember.computed.alias('auth.credentials.id'),
  ownerId: Ember.computed.alias('comment.user.id'),
  isOwner: Ember.computed('userId','ownerId', function(){
    return this.get('userId') === parseInt(this.get('ownerId'));
  }),
  userProfile: 'https://signup.trybooking.com/images/user-hero-blue.png',
  editable: false,
  comment: 'comment',
  actions: {
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    },
    editComment() {
      if (!Ember.isBlank(this.get('comment.text'))) {
        this.sendAction('editComment', this.get('comment'));
        this.set('editable', false);
      }
    },
    toggleEditable() {
      this.set('editable', true);
    }
  },
});
