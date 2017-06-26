import DS from 'ember-data';

export default DS.Model.extend({
  boxes: DS.hasMany('box'),
  isCircleTurn: DS.attr('boolean', { defaultValue: true}),
  winner: DS.attr('number', { defaultValue: -1}),
  numberOfPlays: DS.attr('number', { defaultValue: 0}),
  previousMakedPlace: DS.attr('number', {defaultValue: -1}),

  nextAllowedPlaceWeight: Ember.computed('previousMakedPlace', function() {
    if (this.get('previousMakedPlace') != -1) {
      var selectedBox = null;
      this.get('boxes').toArray().forEach((box) => {
        if (box.get('weight') == this.get('previousMakedPlace')) {
          selectedBox = box;  
        }
      });

      if (selectedBox.get('player') == -1) {
        return this.get('previousMakedPlace');
      } else {
        return -1;
      }
    }

    return -1;
  }),

  hasWinner: Ember.computed('numberOfPlays', function() {
    if (this.get('numberOfPlays') >= 3) {
      if (this.checkWinner(1)) {
        this.set('winner', 1);
        return true;
      } else if (this.checkWinner(0)) {
        this.set('winner', 0);
        return true;
      } else if(this.get('numberOfPlays') == 9) {
        this.set('winner', -2);
        return true;
      }
    }

    return false;
  }),

  checkWinner(player) {
    let playerBoxes = this.boxesFrom(player);
    var won = false;

    playerBoxes.forEach((box) => {
      let boxDirections = box.get('edges').toArray().map((edge) => {
        return edge.get('weight');
      });
      let filtredDirections = boxDirections.filter(function(item, pos) {
        return boxDirections.indexOf(item) == pos;
      });

      filtredDirections.forEach((direction) => {
        if (this.wonInDirection(box, direction, player)) {
          won = true;
          return;
        }
      })
    });

    return won;
  },


  boxesFrom(player) {
    let boxes = this.get('boxes').toArray();

    return boxes.filter((box) => {
      return (box.get('player') == player);
    });
  },

  wonInDirection(box, direction, player) {
    var currentWeight = box.get('weight');

    box.get('edges').forEach((edge) => {
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
