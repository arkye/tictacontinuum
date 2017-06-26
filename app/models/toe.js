import DS from 'ember-data';

export default DS.Model.extend({
  boxes: DS.hasMany('box')
});
