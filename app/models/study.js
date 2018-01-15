import DS from 'ember-data';

export default DS.Model.extend({
  // Relationships
  sponsors: DS.hasMany('sponsor'),
  comments: DS.hasMany('comment'),
  responsibleParty: DS.hasMany('responsible-party'),

  officialTitle: DS.attr('string'),
  briefTitle: DS.attr('string'),
  studyType: DS.attr('string'),
  baselinePopulation: DS.attr('string'),
  overallStatus: DS.attr('string'),
  phase: DS.attr('string'),
  enrollment: DS.attr('number'),
  enrollmentType: DS.attr('string'),
  source: DS.attr('string'),
  limitationsAndCaveats: DS.attr('string'),
  isFdaRegulatedDrug: DS.attr('boolean'),
  isFdaRegulatedDevice: DS.attr('boolean'),
  targetDuration: DS.attr('string'),
  primaryCompletionDate: DS.attr('date'),
  nlmDownloadDateDescription: DS.attr('string'),
});
