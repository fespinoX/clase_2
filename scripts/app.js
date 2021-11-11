var myapp = new Vue({
    el: '#app',
    data: {
      saludo: 'Hola',
      nombre: 'Miguel',
      message: 'El hierro nos ayuda a jugar',
      htmlCard: `<span>Ahora la bebé tiene que dormir en la cuna</span>`,
      link: 'www.google.com'

    },
    methods: {
        imprimirEnConsola() {
            console.log(this.message);
        }
    },
    computed: {
        nombreConSaludo() {
            return `${this.nombre}, como va?`;
        }
    }
})