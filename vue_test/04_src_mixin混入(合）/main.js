import Vue from 'vue'
import App from './App.vue'
import {mixin,mixin2} from './mixin'
Vue.config.productionTip = false

Vue.mixin(mixin)
Vue.mixin(mixin2)//会给vm和vc都
new Vue({
    el:'#app',
    render:h =>h(App),
})