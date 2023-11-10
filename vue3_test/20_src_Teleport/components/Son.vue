<template>
  <div class="son">
    <h2>我是Son组件</h2>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from '../components/Dialog'
export default {
  name: "Son",
  components:{Dialog}
}
</script>

<style scoped>
  .son{
    background: orange;
    padding: 10px;
  }
</style>