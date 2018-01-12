import DS from 'ember-data';

export default DS.Model.extend({
  officialTitle: DS.attr('string'),
  briefTitle: DS.attr('string'),
  comments: DS.hasMany('comment'),
});
