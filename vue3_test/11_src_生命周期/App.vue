<template>
  <Demo v-if="isShowDemo"/>
  <button @click="isShowDemo = !isShowDemo">点我隐藏</button>
</template>

<script>
import Demo from './components/Demo'
import {ref} from 'vue'
export default {
  name: 'App',
  components: {Demo},
  setup(){
    let isShowDemo = ref(true)
    return {isShowDemo}
  }
}
</script>


