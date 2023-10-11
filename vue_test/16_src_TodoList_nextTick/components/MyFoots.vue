<template>
  <div class="todo-footer" v-show="total">
    <label>
<!--      <input type="checkbox" :checked="isAll" @change='checkAll'/>-->
      <!--使用计算属性的完整写法来实现功能  v-model可以使用因为没有修改props 修改的是计算属性的值-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}}
          <!--这里要使用计算属性-->
        </span>
    <button class="btn btn-danger" @click="clearAll(todos.done)">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFoots",
  props:['todos'],
  computed:{
    //已完成数
    doneTotal(){
      /*const x = this.todos.reduce((pre,current)=>{
        console.log('pre='+pre)
        return pre + (current.done ? 1 : 0)
      },0)
      console.log("x="+x)
      return x*/
      return  this.todos.reduce((pre,todo)=>pre + (todo.done ? 1 : 0),0)
    },
    //总数
    total(){
      return this.todos.length
    },
    //全部完成后勾选 判断已完成数与总数是否相等且已完成的数必须>0（删除到0时取消勾选）
    isAll:{
      get(){//读
        return this.doneTotal === this.total && this.doneTotal > 0
      },
      set(value){//写
        return  this.$emit('checkAllTodo',value)
        //console.log(value)
      }
    }
  },
  methods:{
    /*全选or取消全选的普通写法 1）先拿到全选的值true/false 使用event.target.checked 简写为e
    *                     2) 去app中把值全部赋值给app 中todos的done的值
    * */

    // checkAll(e){
    //   this.checkAllTodo(e.target.checked)
    //   //console.log(x)
    // }
    //清除所有的已勾选
    clearAll(){
      this.$emit("clearAllTodo")
    },
  }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>