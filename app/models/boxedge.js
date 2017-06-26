import DS from 'ember-data';

export default DS.Model.extend({
  weight: DS.attr('number'),
  father: DS.belongsTo('toe'),
  source: DS.belongsTo('box'),
  target: DS.belongsTo('box')
});
