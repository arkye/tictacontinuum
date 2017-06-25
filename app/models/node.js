import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  father: DS.belongsTo('continuum'),
  weight: DS.attr('number'),
  player: DS.belongsTo('player'),
  edges: DS.hasMany('nodeedge'),
  box: DS.belongsTo('box')
});
