<template>
  <div class="child">
    <h2>Child组件</h2>
    <h2>{{sum}}</h2>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "Child",
  async setup(){
    let sum = ref(0)
    const p = new Promise((resolve,reject)=>{//异步
      setTimeout(()=>{
        resolve({sum})
      },1000)
    })
    return await p
  }
}
</script>

<style scoped>
  .child{
    background: skyblue;
    padding: 10px;
  }
</style>