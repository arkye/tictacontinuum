import DS from 'ember-data';

export default DS.Model.extend({
  node: DS.belongsTo('node'),
  top: DS.attr('boolean', {defaultValue: false}),
  right: DS.attr('boolean', {defaultValue: false}),
  bottom: DS.attr('boolean', {defaultValue: false}),
  left: DS.attr('boolean', {defaultValue: false})
});
