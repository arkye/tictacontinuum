import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ttt'],

  actions: {
    tictactoeHasFineshied() {
      console.log('result ---', this.get('model.winner'));
    }
  },

  parsedNodes: Ember.computed('model.nodes', function() {
    let result = [], chunkSize = 3;
    const nodes = this.get('model.nodes').toArray();

    for (let i = 0; i < nodes.length; i += chunkSize) {
      result.push(nodes.slice(i, i + chunkSize));
    }

    return result;
  })
});
