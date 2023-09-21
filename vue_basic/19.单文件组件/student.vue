<template>
<!--结构-->
  <div>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
  </div>
</template>

<script>
//交互
export default {//默认暴露，省略extend 的写法
  name:'student',
  data(){
    return {
      name:'atguigu',
      age:18
    }
  },

}
</script>


