<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h2>个人信息</h2>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <h3>性别：{{sex}}</h3>
  <button @click="sayWelcome">Welcome</button>
  <button @click="sayName">hello</button>
  <button @click="test1">vue2测试</button>
  <button @click="test2">vue3测试</button>
</template>

<script>
//1.composition API 组合式API
//vue2和vue3语法不要混用
import {h} from 'vue'
export default {
  name: 'App',
  data(){
    return{
      sex:'男'
    }
  },
  methods:{
    sayWelcome(){
      alert('欢迎')
    },
    test1(){
      console.log(this.name)
      console.log(this.age)
      console.log(this.sex)
      this.sayWelcome()
    }
  },
  setup(){
    let name = 'lewi'
    let age = 18

    function sayName(){
      alert('你好啊')
    }
    function test2(){
      console.log(name)
      console.log(age)
      // console.log(sex)
      sayName()
    }

    return{
      name,
      age,
      sayName,
      test2
    }

    // return ()=> h('h1','尚硅谷')
  }
}
</script>


