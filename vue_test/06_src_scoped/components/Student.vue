<template>
  <div class="demo">
    <h3 class="atguigu">{{name}}</h3>
    <h3>{{age}}</h3>
  </div>
</template>

<script>

export default {
  name: "Student",
  data(){
    return{
      name:'lewi',
      age:18
    }
  },
}
</script>
<style lang="less" scoped>
  .demo{
    background: pink;
    .atguigu{
      font-size: 30px;
    }
  }
</style>


