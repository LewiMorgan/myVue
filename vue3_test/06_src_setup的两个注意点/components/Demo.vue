<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h2>个人信息</h2>
  <h3 v-show="person.name">姓名：{{person.name}}</h3>
  <h3>年龄：{{person.age}}</h3>
  <h3>{{msg}}</h3>
  <h3>学校：{{school}}</h3>
  <button @click="test">点击测试自定义事件</button>
  <slot></slot>
</template>

<script>
//使用ref,reactive前要先注册
import {ref,reactive} from 'vue'
export default {
  name: 'Demo',
  props:['msg','school'],
  emits:['hello'],//配置项接收到传递过来的函数
  beforeCreate() {
    // console.log('----beforeCreate----')
  },
  setup(props,context){
    // console.log('----setup----',this)
    // console.log(props)
    // console.log(context)
    // console.log(context.attrs) //与vue2中的$attrs一样
    // console.log(context.emits) //触发自定义事件的
    console.log(context.slots)
    //1.setup比beforeCreate执行要早
    //2.props 中的attrs参数在组件不声明接收时会拿到传递过来的数据
    //           emit参数

    let person = reactive({
      name:'lewi',
      age:18
    })

    function test(){
      context.emit('hello',666)
    }

    return {
      person,
      test
    }
  }
}

</script>


