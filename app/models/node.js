import DS from 'ember-data';

export default DS.Model.extend({
  weight: DS.attr('number'),
  father: DS.belongsTo('continuum'),
  edges: DS.hasMany('nodeedge', { inverse: null }),
  player: DS.attr('number', {defaultValue: -1}),
  border: DS.belongsTo('nodeBorders')
});
