import DS from 'ember-data';

export default DS.Model.extend({
  continuum: DS.belongsTo('continuum'),
  toe: DS.belongsTo('toe'),
  weight: DS.attr('number', { defaultValue: 0}),
  border: DS.belongsTo('nodeBorders'),
  edges: DS.hasMany('boxedge', { inverse: null }),
  player: Ember.computed('continuum.winner', function() {
    return this.get('continuum.winner')
  })
});
