import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ttt'],
  isCircleTurn: true,

  didInsertElement(){
    var status = Ember.A([Ember.A([-1, -1, -1]), Ember.A([-1, -1, -1]), Ember.A([-1, -1, -1])]);
    this.set('tttStatus', status);
  },

  actions: {
    didSelect(i,j) {
      var status = this.get('tttStatus');

      if (status.get(i).get(j) != -1) {
        alert('Escolha uma posição que ainda não foi marcada!');
      } else {
        if (this.get('isCircleTurn')) {
          status.get(i).set(j.toString(), 1)
        } else {
          status.get(i).set(j.toString(), 0)
        }

        this.toggleProperty('isCircleTurn');
      }


    }
  }
});
