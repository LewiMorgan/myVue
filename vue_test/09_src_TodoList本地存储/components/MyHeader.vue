<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keydown.enter="add"/>
<!-- 需求：按下回车去添加一个数据  1.使用指令 @keydown.enter按下enter时会添加 -->
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "MyHeader",
  props:['receiver'],
  data(){
    return{
      title:''
    }
  },
  methods:{
    add(){
      //5.数据判断
      if(!this.title)  return alert('请在输入框中输入内容')
      //2.把要传输的数据打包
      const todoObj = {id:nanoid(),title:this.title,done:false}//nanoid随机生成id
      //console.log(todoObj)
      //使用e.target.value来获取输入的数据 e指event
      this.receiver(todoObj)
      /*3.接下来要把todoObj放到数组（List）中去
      * 1）先把数据放到App中（父组件）
      * 2）使用父子组件通信把新建的todoObj传递进去(通过传参的形式）
      * */
      //4.清除输入框
      this.title = ''
    }
  }
}
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>