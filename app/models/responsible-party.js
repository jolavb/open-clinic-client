import DS from 'ember-data';

export default DS.Model.extend({
  study: DS.belongsTo('study'),
  responsiblePartyType: DS.attr('string'),
  name: DS.attr('string'),
  title: DS.attr('string'),
  organization: DS.attr('string'),
  affiliation: DS.attr('string'),
});
