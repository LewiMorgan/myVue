<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @receiver="receiver"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFoots :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFoots>
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
      //用户自己添加数据时数组应该为空 同时保证添加的数据在刷新后不会丢失 1）使用watch
      todos: JSON.parse(localStorage.getItem('todos')) || []
      //3.设置完了 需要接收 接受时注意要把字符串解析成原本数组的格式
      //4.写[]的原因是因为 刚进来时没有数据 传入数据为空时返回的值为null 所以要传入一个空数组
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
  },

  watch:{
    //5.深度监视 监视属性是否修改
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))//2.要使用json转化 不然数据的格式为object
      }
    }
  },
  mounted(){
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('deleteTodo',this.deleteTodo)
  },
  beforeDestory(){
    this.$bus.$off('checkTodo')
    this.$bus.$off('deleteTodo')
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
