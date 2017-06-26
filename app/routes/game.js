import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.createToe();
  },

  createToe() {
    var toe = this.store.createRecord('toe', {
      id: 1
    });

    toe.get('boxes').pushObjects(this.createBoxes(toe));
    return toe;
  },

  createBoxes(toe) {
    var boxes = Ember.A([]);

    for (var i = 0; i < 9; i++) {
      var currentBox = this.store.createRecord('box', {
        id: this.getRandomInt(),
        toe: toe
      });

      currentBox.set('continuum', this.createContinuum());
      boxes.pushObject(currentBox);
    }

    return boxes;
  },

  createContinuum() {
    var continuum = this.store.createRecord('continuum', {
      id: this.getRandomInt()
    });

    continuum.get('nodes').pushObjects(this.initialTTTState(continuum));

    return continuum;
  },

  initialTTTState(continuum) {
    return this.connectNodeToEdges(continuum);
  },

  connectNodeToEdges(continuum) {
    let nodes = this.createNodes(continuum);

    var edges = [
                [2,4,5], [1,3,5], [2,5,6],
                [1,5,7], [1,2,3,4,6,7,8,9], [3,5,9],
                [4,5,8], [7,5,9], [8,5,6]
               ]

     var edgesWeight = [
                 [3,1,4], [3,3,1], [3,2,1],
                 [1,3,1], [4,1,2,3,3,2,1,4], [1,3,1],
                 [1,2,3], [3,1,3], [3,4,1]
                ]

    for (var i = 0; i < 9; i++) {
      var currentNode = nodes.objectAt(i);
      var nodeEdges = Ember.A([]);

      for (var j = 0; j < edges[i].length; j++) {
        nodeEdges.pushObject(this.store.createRecord('nodeedge', {
          id: this.getRandomInt(),
          weight: edgesWeight[i][j],
          source: currentNode,
          target: nodes.objectAt(edges[i][j]-1)
        }))
      }

      currentNode.get('edges').pushObjects(nodeEdges);
    }

    return nodes;
  },

  createNodes(continuum) {
    let borders = this.createBorders();

    var weights = [8,1,6,3,5,7,4,9,2];
    var nodes = Ember.A([]);

    for (var i = 0; i < 9; i++) {
      var currentNode = this.store.createRecord('node', {
        id: this.getRandomInt(),
        weight: weights[i],
        father: continuum,
        border: borders[i]
      });

      nodes.pushObject(currentNode);
    }

    return nodes;
  },

  createBorders() {
    var borders = [
        [1,0,0,1], [1,0,0,0], [1,1,0,0],
        [0,0,0,1], [0,0,0,0], [0,1,0,0],
        [0,0,1,1], [0,0,1,0], [0,1,1,0]
    ]
    var bordersObjects = Ember.A([]);

    for (var i = 0; i < 9; i++) {
      bordersObjects.pushObject(this.store.createRecord('nodeBorders', {
        id: this.getRandomInt(),
        top: !!borders[i][0],
        right: !!borders[i][1],
        bottom: !!borders[i][2],
        left: !!borders[i][3]
      }))
    }

    return bordersObjects;
  },

  getRandomInt() {
    return Math.floor(Math.random() * (100000000));
  }
});
