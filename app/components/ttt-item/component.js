import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ttt__item'],
  classNameBindings: ['noBorderTop:ttt__item--top', 'noBorderRight:ttt__item--right', 'noBorderLeft:ttt__item--left', 'noBorderBottom:ttt__item--bottom'],

  click() {
    if (!this.get('model.hasWinner')) {
      this.newInputHandle();
    } else {
      alert('Acabou!');
    }
  },

  newInputHandle() {
    if (this.get('value') == -1) {
      // set player mark to position
      this.set('value', + this.get('model.isCircleTurn'));

      // change player symbol
      this.set('model.isCircleTurn', (1 - (+ this.get('model.isCircleTurn'))));

      // increment number of plays
      this.incrementProperty('model.numberOfPlays');

      // check winner
      if (this.get('model.hasWinner')) {
        this.sendAction('afterWinner');
      }
    } else {
      alert('Select a unselected place');
    }
  }
});
