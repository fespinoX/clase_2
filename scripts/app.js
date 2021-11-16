var myapp = new Vue({
    el: '#app',
    data: {
      tienePiojitos: true,
      piojitosMsg: "Tiene piojitos",
      modoOscuro: true,
      mostrarMsg: true,
      textBtn: "Ocultar mensaje",
      michis: [
        {
            nombre: 'Zelda',
            pelo: 'largo',
            color: 'gris'
        },
        {
            nombre: 'Minerva',
            pelo: 'corto',
            color: 'blanco y gris'
        },
        {
            nombre: 'Lady',
            pelo: 'corto',
            color: 'tricolor'
        },
        {
            nombre: 'Mariah',
            pelo: 'largo',
            color: 'carey'
        },


      ]
    },
    methods: {
        changeTheme() {
            if (this.modoOscuro) {
                this.modoOscuro = false;
            } else {
                this.modoOscuro = true;
            }
        },
        toggleMsg() {
            if (this.mostrarMsg) {
                this.mostrarMsg = false;
                this.textBtn = "Mostrar mensaje";
            } else {
                this.mostrarMsg = true;
                this.textBtn = "Ocultar mensaje";
            }
        }
    },
    computed: {

    }
})