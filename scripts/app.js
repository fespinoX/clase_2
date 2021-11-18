Vue.component("nombre-componente", {
    props: ["titulo"],
    template: `
    <p>holi, soy el componente</p>
    `,
})

var myapp = new Vue({
    el: '#app',
    data: {
        numeroDeClase: 4,
    },
    methods: {
        
    },
    computed: {

    }
})