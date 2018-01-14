import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  study: DS.belongsTo('study'),
  user: DS.belongsTo('user'),
});
