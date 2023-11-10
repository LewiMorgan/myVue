<template>
  <div class="app">
    <h2>App组件</h2>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h2>Loading...</h2>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child' //静态引入
import {defineAsyncComponent} from 'vue'
const Child =  defineAsyncComponent(()=>import('./components/Child')) //动态引入
export default {
  name: "App",
  components:{Child}
}
</script>

<style scoped>
  .app{
    background: #cccccc;
    padding:10px
  }
</style>