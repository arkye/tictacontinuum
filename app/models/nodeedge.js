import DS from 'ember-data';

export default DS.Model.extend({
  weight: DS.attr('number'),
  source: DS.belongsTo('node', { inverse: null }),
  target: DS.belongsTo('node', { inverse: null })
});
