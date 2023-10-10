import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
    el:'#app',
    render:h =>h(App),
    beforeCreate(){//在vue生命周期的第一步去安装  因为事件总线必须绑定在vm/vc身上
        Vue.prototype.$bus = this //安装全局事件总线 在vue的原型对象上安装
    }

})