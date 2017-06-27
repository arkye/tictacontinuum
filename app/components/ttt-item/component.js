import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ttt__item'],
  classNameBindings: ['node.border.top:ttt__item--top', 'node.border.right:ttt__item--right', 'node.border.left:ttt__item--left', 'node.border.bottom:ttt__item--bottom'],

  click() {
    var nextAllowedPlaceWeight = this.get('parent.box.toe.nextAllowedPlaceWeight');

    if ( nextAllowedPlaceWeight == this.get('parent.box.weight') || nextAllowedPlaceWeight == -1) {
      if (!this.get('parent.hasWinner')) {
        this.newInputHandle();
      } else {
        alert('Acabou!');
      }
    } else {
      alert('Mark in the right place');
    }
  },

  newInputHandle() {
    if (this.get('node.player') == -1) {
      // set player mark to position
      this.set('node.player', + this.get('parent.box.toe.isCircleTurn'));

      // change player symbol
      this.set('parent.box.toe.isCircleTurn', (1 - (+ this.get('parent.box.toe.isCircleTurn'))));



      // increment number of plays
      this.incrementProperty('parent.numberOfPlays');

      // check winner
      if (this.get('parent.hasWinner')) {
        if (this.get('node.weight') == this.get('parent.box.weight')) {
          this.set('parent.box.toe.previousMakedPlace', -1);
        } else {
          this.set('parent.box.toe.previousMakedPlace', this.get('node.weight'));
        }
      }else {
        this.set('parent.box.toe.previousMakedPlace', this.get('node.weight'));
      }
    } else {
      alert('Select a unselected place');
    }
  }
});
