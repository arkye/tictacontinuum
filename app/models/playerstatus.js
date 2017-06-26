import DS from 'ember-data';

export default DS.Model.extend({
  game: DS.belongsTo('game'),
  player: DS.belongsTo('player'),
  nodes: DS.hasMany('node'),
  boxes: DS.hasMany('box'),
  plays: DS.attr('number')
});
