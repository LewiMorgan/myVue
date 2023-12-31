import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
new Vue({
    el:'#app',
    render:h =>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this//开启全局事件总线
    }
})