const app = new Vue({
    el : '#app',
    data : {
        mensaje : 'hola',
        contador: 0

    },
    methods : {

    },
    computed : {
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return{
                'bg-success' : this.contador <= 10,
                'bg-info' : this.contador >10 && this.contador<= 30,
                'bg-warning' : this.contador >30 && this.contador<= 60,
                'bg-danger' : this.contador >60

            }
        }
    }
})