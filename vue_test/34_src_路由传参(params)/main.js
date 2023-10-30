//引入vue
import Vue from 'vue'
//引入app
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false
//使用route插件
Vue.use(VueRouter)
//创建vm
const vm = new Vue({
    el:'#app',
    render:h =>h(App),
    router:router,
})
