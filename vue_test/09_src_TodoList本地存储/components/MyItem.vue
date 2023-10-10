<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id) "/>
      <!--  1.使用@change改变复选框的状态的同时改变数据 1）获取id -->

      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!--<input type="checkbox" v-model="todo.done"/>-->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props:['todo','checkTodo','deleteTodo'],//接受传递过来的数据 数据从大组件传递到小组件
  methods:{
    //
    handleCheck(id){
      //console.log(id)
      //2)改变app中的数据的id 数据在哪去哪修改 所以去app中
      this.checkTodo(id)
    },
    handleDelete(id){
      //通知app过滤数组
      this.deleteTodo(id)
    }
  }

}
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;

    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #cccccc;
  }

</style>