//引入vue
import Vue from 'vue'
//引入app
import App from './App.vue'
//引入element-ui组件库
import ElementUI from 'element-ui';
//引入element-ui的全部样式
import 'element-ui/lib/theme-chalk/index.css';
//使用elmentUI插件
Vue.use(ElementUI);
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
const vm = new Vue({
    el:'#app',
    render:h =>h(App),
})
