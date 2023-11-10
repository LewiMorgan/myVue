<template>
  <div class="son">
    <h2>Son组件（孙组件）</h2>
    <h3>{{person.name}},{{person.age}}</h3>
  </div>
</template>

<script>
import {inject} from 'vue'
export default {
  name: "Son",
  setup(){
    //使用inject接收祖祖件传递过来的数据
    const person = inject('person')
    return {person}
  }
}
</script>

<style scoped>
  .son{
    background: orange;
    padding: 10px;
  }
</style>