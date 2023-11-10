<template>
  <h2>求和：{{sum}}</h2>
  <button @click="sum++">点我加一</button>
</template>

<script>

import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onUnmounted,onBeforeUnmount} from 'vue'
export default {
  name: 'Demo',
  setup(){
    //使用组合式api的形式
    //beforeCreate和created ----> setup 这两个没有组合式api的写法
    console.log('---setup--')
    onBeforeMount(()=>{
      console.log('---onBeforeMount---')
    })
    onMounted(()=>{
      console.log('---onMounted')
    })
    onBeforeUpdate(()=>{
      console.log('---onBeforeUpdate')
    })
    onUpdated(()=>{
      console.log('---onUpdated---')
    })
    onBeforeUnmount(()=>{
      console.log('---onBeforeUnmount---')
    })
    onUnmounted(()=>{
      console.log('---onUnmounted---')
    })

    let sum = ref(0)
    return{
      sum,
    }
  },
  //使用配置项的形式来写
  // beforeCreate(){
  //   console.log('---beforeCreate---')
  // },
  // created(){
  //   console.log('---created---')
  // },
  // beforeMount(){
  //   console.log('---beforeMount---')
  // },
  // mounted(){
  //   console.log('---mounted---')
  // },
  // beforeUpdate(){
  //   console.log('---beforeUpdate')
  // },
  // updated(){
  //   console.log('---updated---')
  // },
  // beforeUnmount(){//vue2是beforeDestroy
  //   console.log('---beforeDestroy---')
  // },
  // unmounted(){//vue2是destroyed
  //   console.log('---destroyed---')
  // }
}

</script>


