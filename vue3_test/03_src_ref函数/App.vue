<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h2>个人信息</h2>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <h3>工作：{{job.type}}</h3>
  <h3>薪资：{{job.salary}}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
//修改时必须使用ref属性和value来完成对引用对象的操作
// 且模板中不需要写xxx.value 已经自动加上了

import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let name = ref('lewi')
    let age = ref(18)//ref处理基本数据类型使用geter,seter来实现响应式
    let job = ref({//ref处理对象类型 采用的是es6中的Proxy来实现响应式
      type:'前端',
      salary:'100K'
    })

    function changeInfo(){
      name.value = 'mi'
      age.value = 20
      job.value.type = 'UI'//obj属性不需要写xxx.value
      job.value.salary = '10K'
      console.log(name,age,job)
      console.log(name.value,age.value,job.value)
    }

    return{
      name,
      age,
      job,
      changeInfo
    }

  }
}
</script>


