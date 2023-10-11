<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id) "/>

      <!--  1.使用@change改变复选框的状态的同时改变数据 1）获取id -->

      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!--<input type="checkbox" v-model="todo.done"/>-->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo,$event)"
          ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyItem",
  props:['todo'],//接受传递过来的数据 数据从大组件传递到小组件
  methods:{
    //
    handleCheck(id){
      //console.log(id)
      //2)改变app中的数据的id 数据在哪去哪修改 所以去app中
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    handleDelete(id){
      //通知app过滤数组
      // this.deleteTodo(id)
      // this.$bus.$emit('deleteTodo',id)
      pubsub.publish('deleteTodo',id)
    },
    //编辑按钮 添加isEdit属性来决定是否添加input框
    handleEdit(todo){
      if(todo.hasOwnProperty('isEdit')){//如果已经有isEdit直接去修改
        todo.isEdit = true
      }
      else {//如果没有再去set中添加
        this.$set(todo,'isEdit',true)
      }
      this.$nextTick(function (){//
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点的回调
    handleBlur(todo,e){
      todo.isEdit = false
      // console.log('调用handleBlur')
      //更新数据 input框里有值才去更新 没有值直接g
      if(!e.target.value) return alert('对话框中不能为空')
      this.$bus.$emit('updateTodo',todo.id,e.target.value)

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