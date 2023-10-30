//该文件用来创建Vuex中最为核心的store
//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//引入js
import countOption from './count'
import personOption from './person'
//使用vuex插件 写在main.js中会报错
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{//使用modules完成模块化的操作
        countAbout:countOption,
        personAbout:personOption
    }
})
