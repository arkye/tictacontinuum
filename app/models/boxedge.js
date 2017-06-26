import DS from 'ember-data';

export default DS.Model.extend({
  weight: DS.attr('number'),
  source: DS.belongsTo('box', { inverse: null }),
  target: DS.belongsTo('box', { inverse: null })
});
