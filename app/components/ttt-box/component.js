import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ttt', 'node--outter'],
  classNameBindings: ['box.border.top:ttt__item--top', 'box.border.right:ttt__item--right', 'box.border.left:ttt__item--left', 'box.border.bottom:ttt__item--bottom'],
});
