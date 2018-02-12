// study route js
import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model (params) {
    return this.get('store').findRecord('study', params.study_id);
  },
  actions: {
    back () {
      history.back()
    },
    newComment(comment){
      if(Ember.isBlank(comment.text)) {
        this.get('flashMessages').warning('You forgot to write something!');
      } else {
        let newComment = this.get('store').createRecord('comment', comment);
        newComment.save();
      };
    },
    deleteComment(comment) {
      comment.destroyRecord();
    },
    editComment(comment) {
      comment.save();
    },
    back() {
      this.transitionTo('studies')
    }

  }
});
