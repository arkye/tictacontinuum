import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ttt__item'],
  classNameBindings: ['noBorderTop:ttt__item--top', 'noBorderRight:ttt__item--right', 'noBorderLeft:ttt__item--left', 'noBorderBottom:ttt__item--bottom'],

  click() {
    this.sendAction('didSelect', this.get('i'), this.get('j'));
  }
});
