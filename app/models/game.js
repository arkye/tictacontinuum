import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('number'),
  firstPlayerWon: DS.attr('boolean'),
  firstPlayerStatus: DS.belongsTo('playerstatus'),
  secondPlayerStatus: DS.belongsTo('playerstatus'),
  board: DS.belongsTo('toe'),
  totalPlays: DS.attr('number')
});
