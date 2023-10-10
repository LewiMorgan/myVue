<template>
  <ul class="todo-main">
    <MyItem
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
    />
    <!--2.由数组遍历的次数决定有几项 完整写法v-for="(item,index) in todos" :key="todos.id"-->
    <!--3.:todos="todos" 用来传递数据 前一个todo为属性名 后一个todoObj为数组遍历后的数据  -->
  </ul>
</template>

<script>
import MyItem from "@/components/MyItem";
export default {
  name: "MyList",
  components: {MyItem},
  //1.传入数据(为了实现组件中的通讯把数据放入到App中
  props:['todos','checkTodo','deleteTodo']

}
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>