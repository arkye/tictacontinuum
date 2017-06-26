import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ttt__item'],
  classNameBindings: ['node.border.top:ttt__item--top', 'node.border.right:ttt__item--right', 'node.border.left:ttt__item--left', 'node.border.bottom:ttt__item--bottom'],

  click() {
    if (!this.get('parent.hasWinner')) {
      this.newInputHandle();
    } else {
      alert('Acabou!');
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
        this.sendAction('afterWinner');
      }
    } else {
      alert('Select a unselected place');
    }
  }
});
