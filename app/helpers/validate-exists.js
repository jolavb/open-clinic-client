import Ember from 'ember';

export function validateExists(params) {
  let field = params [0]
  if (Ember.isEmpty(field)) {
    field = 'Unknown'
  }
  return field;
}

export default Ember.Helper.helper(validateExists);
