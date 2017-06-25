import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('string'),
  name: DS.attr('string'),
  wins: DS.attr('number'),
  losses: DS.attr('number'),
  currentGame: DS.belongsTo('game'),
  pastGames: DS.hasMany('game')
});
