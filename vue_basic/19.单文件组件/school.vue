<template>
<!--结构-->
  <div class="demo">
    <h2>{{name}}</h2>
    <h2>{{adress}}</h2>
    <button @click="showSchool">点我显示学校名称</button>
  </div>
</template>

<script>
//交互
export default {//默认暴露，省略extend 的写法
  name:'school',
  data(){
    return {
      name:'atguigu',
      adress:'beijing'
    }
  },
  methods:{
    showSchool(){
      console.log(this.name)
    }
  }
}
</script>

<style>
/*样式*/
  .demo{
    background: lightcyan;
  }
</style>
