export const mixin = {
    methods:{
        showInfo(){
            alert(this.name)
        }
    },
    mounted(){
        console.log('hello')
    }
}
export const mixin2 = {
    data(){
        return{
            x:10,
            y:20
        }
    }
}
