import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  father: DS.belongsTo('toe'),
  weight: DS.attr('number'),
  player: DS.belongsTo('player'),
  edges: DS.hasMany('boxedge'),
  continuum: DS.belongsTo('continuum')
});
