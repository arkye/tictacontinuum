import Ember from 'ember';

export default Ember.Component.extend({
  parsedBoxes: Ember.computed('model.boxes', function() {
    let result = [], chunkSize = 3;
    const boxes = this.get('model.boxes').toArray();

    for (let i = 0; i < boxes.length; i += chunkSize) {
      result.push(boxes.slice(i, i + chunkSize));
    }

    return result;
  })
});
