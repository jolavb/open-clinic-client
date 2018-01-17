// study route js
import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('study', params.study_id);
  },
  actions: {
    newComment(comment){
      let newComment = this.get('store').createRecord('comment', comment);
      newComment.save();
    },
    deleteComment(comment) {
      comment.destroyRecord();
    },
    editComment(comment) {
      comment.save();
    },

  }
});