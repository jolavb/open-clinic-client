import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  nctId: DS.attr('string'),
});
