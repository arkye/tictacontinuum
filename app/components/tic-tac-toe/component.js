import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ttt'],

  actions: {
    tictactoeHasFineshied() {
      console.log('result ---', this.get('model.winner'));
    }
  }
});
