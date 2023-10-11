<template>
  <div class="student">
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <button @click="sendStudentName">把student的名字传递给school</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data(){
    return{
      name:'mi',
      age:18,
    }
  },
  methods:{
    //流程 1。绑定完单机响应事件后 2.去找声明自定义事件的组件（绑定自定义事件，写逻辑回调）3.触发事件：回到emit组件中完成传递
    //注意 要在this.$bus中操作
    sendStudentName(){
      // this.$bus.$emit('hello',this.name)
      pubsub.publish('hello',this.name)//发布消息
    }
  }

}
</script>
<style lang="less" scoped>
  .student{
    background: pink;
    padding: 5px  ;
    margin-top: 20px;
  }
</style>


