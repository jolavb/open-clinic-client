import Ember from 'ember';

export function checkTitle([title, id]) {
  if (Ember.isEmpty(title)){
    title = `Study ID ${id}`
  }
  return title;
}

export default Ember.Helper.helper(checkTitle);
