<template>
  <div class="demo">
    <h3>{{name}}</h3>
    <h3>{{adress}}</h3>
  </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return{
      name:'atguigu',
      adress:'bj',
    }
  }
}
</script>

<style scoped>
 .demo{
   background: lightcyan;
 }
</style>
