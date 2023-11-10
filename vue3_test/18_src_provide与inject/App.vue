<template>
  <div class="app">
    <h2>App组件（祖组件）</h2>
    <h3>{{person.name}},{{person.age}}</h3>
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child'
import {reactive,provide} from 'vue'
export default {
  name: "App",
  components:{Child},
  setup(){
    let person = reactive({name:'lewi',age:18})
    provide('person',person)//使用provide（提供）传递数据
    return {person}
  }
}
</script>

<style scoped>
  .app{
    background: #cccccc;
    padding:10px
  }
</style>