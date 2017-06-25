import DS from 'ember-data';

export default DS.Model.extend({
  game: DS.belongsTo('game'),
  boxes: DS.hasMany('box'),
  edges: DS.hasMany('boxedge'),
  firstPlayerBoxes: DS.hasMany('box'),
  secondPlayerBoxes: DS.hasMany('box')
});
