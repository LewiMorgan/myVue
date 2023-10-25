//引入vue
import Vue from 'vue'
//引入app
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//引入store
import store from './store'
//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)


//创建vm
const vm = new Vue({
    el:'#app',
    render:h =>h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this//开启全局事件总线
    }
})
console.log(vm)