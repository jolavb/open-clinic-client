import DS from 'ember-data';

export default DS.Model.extend({
  study: DS.belongsTo('study'),
  name: DS.attr('string'),
  agencyClass: DS.attr('string'),
  leadOrCollaborator: DS.attr('string'),
});
