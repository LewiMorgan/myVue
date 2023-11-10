<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h3>sum:{{sum}}</h3>
  <button @click="sum++">点我++</button>
  <hr>
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
import {ref,reactive,toRefs,readonly,shallowReadonly} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let sum = ref(0)
    let person = reactive({//使用shallowReactive实现浅层响应式 如果有一个对象数据，结构比较深, 但变化时只是外层属性变化
      name:'lewi',
      age:18,
      job:{
        j1:{
          type:'前端',
          salary:20
        }
      },
    })

    person = shallowReadonly(person)
    sum = readonly(sum)
    return {
      sum,
      ...toRefs(person)
    }
  }
}

</script>


