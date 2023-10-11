<template>
  <div class="student">
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h3>{{number}}</h3>
    <button @click="add">点我num加一</button>
    <button @click="sendStudent">把学生姓名给app</button>
    <!-- 需求点击按钮后把姓名提交给app-->
    <button @click="unbind">解绑lewi事件</button>
    <button @click="death">销毁自定义事件（vc)</button>
  </div>
</template>

<script>

export default {
  name: "Student",
  data(){
    return{
      name:'mi',
      age:18,
      number:0
    }
  },
  methods:{
    add(){
      console.log('add回调被调用了')
      this.number++
    },
    sendStudent(){
      this.$emit("lewi",this.name,100,200,700)
      //this.$emit('click')
      // this.$emit('morgan')
    //  触发student组件实例身上的lewi this.name传递数据
    },
    //解绑事件
    unbind(){
      this.$off('lewi')//解绑一个事件
      // this.$off(['lewi','morgan'])
    },
    death(){
      //console.log(this)
      this.$destroy()//销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
                    // add奏效吗？？ 原生dom事件奏效
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


