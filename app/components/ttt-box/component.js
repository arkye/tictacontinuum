import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ttt', 'node--outter'],
  classNameBindings: ['box.border.top:ttt__item--top', 'box.border.right:ttt__item--right', 'box.border.left:ttt__item--left', 'box.border.bottom:ttt__item--bottom', 'shouldHighLight:node--outter--selected'],

  shouldHighLight: Ember.computed('box.weight', 'box.toe.previousMakedPlace', function() {
    return this.get('box.weight') == this.get('box.toe.nextAllowedPlaceWeight');
  })
});
