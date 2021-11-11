var myapp = new Vue({
    el: '#app',
    data: {
      saludo: 'Hola',
      nombre: 'Miguel',
      message: 'El hierro nos ayuda a jugar'

    },
    methos: {
        imprimirEnConsola() {
            console.log('El hierro nos ayuda a jugar');
        }
    },
    computed: {

    }
})