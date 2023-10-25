//该文件用来创建Vuex中最为核心的store
//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用vuex插件 写在main.js中会报错
Vue.use(Vuex)

//准备actions 用于响应组件中的动作
const actions = {
    // add(context,value){//2.在add中接收参数 并commit（commit中的是mutations中的需要大写)
    //     console.log('action被调用了')
    //     context.commit('ADD',value)//context类似mini的store
    // },
    // sub(context,value){
    //     context.commit('SUB',value)
    // },
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

}
//准备mutations 用于操作数据（state)
const mutations = {//3.在mutations中写逻辑
    ADD(state,value){
        // console.log('mutations中的ADD被调用')
        state.sum += value
    },
    SUB(state,value){
        // console.log('mutations中的SUB被调用')
        state.sum -= value
    }
}
//准备state 用于存储数据
const state = {
    sum:0,
    school:'atguigu',
    name:'lewi'
}
//准备getter 用于将state中的数据加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
