import Vue from 'vue'
import App from './App.vue'

//2.引入插件
import pluins from './pluins'

Vue.config.productionTip = false
//3.使用插件
Vue.use(pluins,1,2,3)
new Vue({
    el:'#app',
    render:h =>h(App),
})