<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h2>个人信息</h2>
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <br>
  <span>姓名：{{person.fullName}}</span>
  <br>
  姓名：<input type="text" v-model="person.fullName">
</template>

<script>
//使用ref,reactive前要先注册
import {reactive,computed} from 'vue'
export default {
  name: 'Demo',
  // computed:{//vue2写法
  //   fullName(){
  //     return this.person.firstName + '-' + this.person.lastName
  //   }
  // },
  setup(){
    let person = reactive({
      firstName:'张',
      lastName:'三',

      //计算属性-没有考虑计算属性被修改的情况
      // fullName:computed(()=>{//在computed的括号中写回调函数作为参数
      //   return person.firstName + '-' + person.lastName
      // })

      fullName:computed({
        get(){
          return person.firstName + '-' + person.lastName
        },
        set(value){//修改必然会有一个修改的值
          const nameArr = value.split('-')//拆分修改的值
          person.firstName = nameArr[0]
          person.lastName = nameArr[1]
        }
      })
    })

    return {
      person,
    }
  }
}

</script>


