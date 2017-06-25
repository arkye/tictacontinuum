import DS from 'ember-data';

export default DS.Model.extend({
  weight: DS.attr('number'),
  father: DS.belongsTo('continuum'),
  source: DS.belongsTo('node'),
  target: DS.belongsTo('node')
});
