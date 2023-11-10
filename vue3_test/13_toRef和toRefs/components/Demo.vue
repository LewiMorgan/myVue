<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h2>个人信息</h2>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <h3>薪资：{{job.j1.salary}}k</h3>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪资</button>
</template>

<script>
//使用ref,reactive前要先注册
import {ref,reactive,toRef,toRefs} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let person = reactive({
      name:'lewi',
      age:18,
      job:{
        j1:{
          type:'前端',
          salary:20
        }
      }
    })

    const x = toRefs(person)
    console.log('toRefs',x)

    //我的模板中不想写这么多 person.obj.j1.salary
    // 可以使用toRef/toRefs把模板简化
    return {
      person,
      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary')
      ...toRefs(person)
    }
  }
}

</script>


