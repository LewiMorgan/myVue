<template>
  <div class="app">
    <h2>App组件</h2>
    <h3>{{name}}{{age}}</h3>
  </div>
</template>

<script>
import {ref,reactive,toRefs,readonly,isRef,isReactive,isReadonly,isProxy} from 'vue'
export default {
  name: "App",
  setup(){
    let sum = ref(0)
    let person = reactive({name:'lewi',age:18})
    let person2 = readonly({name:'张三',age:20})

    console.log(isRef(sum))
    console.log(isReactive(person))
    console.log(isReadonly(person2))
    console.log(isProxy(person))
    console.log(isProxy(sum))//注意ref生成的不是proxy代理对象 而是definepropoty生成的

    return {...toRefs(person)}
  }
}
</script>

<style scoped>
  .app{
    background: #cccccc;
    padding:10px
  }
</style>