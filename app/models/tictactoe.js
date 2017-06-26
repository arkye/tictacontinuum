import DS from 'ember-data';

export default DS.Model.extend({
  isCircleTurn: true,
  winner: -1,
  numberOfPlays: 0,

  a1: -1,
  a2: -1,
  a3: -1,

  b1: -1,
  b2: -1,
  b3: -1,

  c1: -1,
  c2: -1,
  c3: -1,

  hasWinner: Ember.computed('numberOfPlays', function() {
    if (this.get('numberOfPlays') >= 3) {
      this.set('winner', 1);
      return true;
    }

    return false;
  })
});
