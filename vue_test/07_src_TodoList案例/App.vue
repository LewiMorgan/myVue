<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :receiver="receiver"></MyHeader>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
        <MyFoots :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFoots>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from "./components/MyList"
import MyItem from "./components/MyItem"
import MyFoots from './components/MyFoots'

export default {
  name: "App",
  components:{MyFoots,MyHeader,MyList,MyItem},
  data(){
    return  {
      todos:[
        {id:'001',title:'学习',done:true},
        {id:'002',title:'锻炼',done:true},
        {id:'003',title:'打游戏',done:false},
      ]
    }

  },
  methods:{
    //添加一个todo
    receiver(todoObj){
      //console.log("我是app组件的函数")
      this.todos.unshift(todoObj)
    },
    //修改todo的勾选 然后在组件中逐步传递给item
    checkTodo(id){
      this.todos.forEach((todo)=>{//拿到数组后遍历
        if(todo.id === id) todo.done = !todo.done
      })
    },
    //删除todo
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    //全选or取消全选
    checkAllTodo(done){
      this.todos.forEach(todo=>{
        todo.done = done
      })
    },
    //清除所有的已勾选
    clearAllTodo(){
      this.todos = this.todos.filter(todo=>{//filter不会修改原数组 所以把结果赋值给this.toods
        return !todo.done
      } )
    }
  }
}
</script>
<style>
  /*base*/
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus {
    outline: none;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
