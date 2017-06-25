import DS from 'ember-data';

export default DS.Model.extend({
  box: DS.belongsTo('box'),
  nodes: DS.hasMany('node'),
  firstPlayerNodes: DS.hasMany('node'),
  secondPlayerNodes: DS.hasMany('node')
});
