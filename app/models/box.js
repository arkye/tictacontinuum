import DS from 'ember-data';

export default DS.Model.extend({
  continuum: DS.belongsTo('continuum'),
  toe: DS.belongsTo('toe'),
  border: DS.belongsTo('nodeBorders')
});
