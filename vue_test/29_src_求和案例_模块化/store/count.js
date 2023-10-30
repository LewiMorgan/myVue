export default  {
    namespaced:true,
    actions:{
        addOdd(context,value){
            if(context.state.sum % 2){//逻辑
                console.log('actions中的addOdd被调用了')
                context.commit('ADD',value)
            }
        },
        addWait(context,value){
            setTimeout(()=>{
                console.log('actions中的addWait被调用了')
                context.commit('ADD',value)
            },1000)
        }
    },
    mutations:{
        ADD(state,value){
            // console.log('mutations中的ADD被调用')
            state.sum += value
        },
        SUB(state,value){
            // console.log('mutations中的SUB被调用')
            state.sum -= value
        },
    },
    state:{
        sum:0,
        school:'atguigu',
        name:'lewi',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}
