import DS from 'ember-data';

export default DS.Model.extend({
  nodes: DS.hasMany('node'),
  numberOfPlays: DS.attr('number', { defaultValue: 0}),
  winner: DS.attr('number', { defaultValue: -1}),
  box: DS.belongsTo('box'),

  hasWinner: Ember.computed('numberOfPlays', function() {
    if (this.get('numberOfPlays') >= 3) {
      if (this.checkWinner(1)) {
        this.set('winner', 1);
        this.incrementProperty('box.toe.numberOfPlays');
        return true;
      } else if (this.checkWinner(0)) {
        this.set('winner', 0);
        this.incrementProperty('box.toe.numberOfPlays');
        return true;
      } else if(this.get('numberOfPlays') == 9) {
        this.set('winner', -2);
        this.incrementProperty('box.toe.numberOfPlays');
        return true;
      }
    }

    return false;
  }),

  checkWinner(player) {
    let playerNodes = this.nodesFrom(player);
    var won = false;

    playerNodes.forEach((node) => {
      let nodeDirections = node.get('edges').toArray().map((edge) => {
        return edge.get('weight');
      });
      let filtredDirections = nodeDirections.filter(function(item, pos) {
        return nodeDirections.indexOf(item) == pos;
      });

      filtredDirections.forEach((direction) => {
        if (this.wonInDirection(node, direction, player)) {
          won = true;
          return;
        }
      })
    });

    return won;
  },


  nodesFrom(player) {
    let nodes = this.get('nodes').toArray();

    return nodes.filter((node) => {
      return (node.get('player') == player);
    });
  },

  wonInDirection(node, direction, player) {
    var currentWeight = node.get('weight');

    node.get('edges').forEach((edge) => {
      if (edge.get('weight') == direction) {
          if (edge.get('target.player') == player) {
            currentWeight += edge.get('target.weight');
          } else {
            return;
          }
      }
    })

    return currentWeight == 15;
  }


});
