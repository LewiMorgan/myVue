<template>
  <h2>求和：{{sum}}</h2>
  <button @click="sum++">点我加一</button>
  <hr>
  <h2>鼠标的坐标x={{point.x}},y={{point.y}}</h2>
</template>

<script>

import {ref} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
  name: 'Demo',
  setup(){
    let sum = ref(0)
    let point = usePoint()

    return{
      sum,
      point
    }
  }
}

</script>


