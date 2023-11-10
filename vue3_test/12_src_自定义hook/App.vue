<template>
  <Demo v-if="isShowDemo"/>
  <button @click="isShowDemo = !isShowDemo">点我隐藏</button>
  <hr>
  <Test/>
</template>

<script>
import Demo from './components/Demo'
import Test from './components/Test'
import {ref} from 'vue'
export default {
  name: 'App',
  components: {Demo,Test},
  setup(){
    let isShowDemo = ref(true)
    return {isShowDemo}
  }
}
</script>


