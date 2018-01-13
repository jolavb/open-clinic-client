// study route js
import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
      // Ember Assumes the endpoint is the plural of  the referenced model ('lists') /id
    return this.get('store').findRecord('study', params.study_id)
  },
  actions: {
    newComment(comment){
      // create new comment here
      let newComment = this.get('store').createRecord('comment',comment);
      newComment.save();
    },
    deleteComment(comment) {
      comment.destroyRecord()
    },
  }
});
