<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h3>x:{{x.y}}</h3>
  <button @click="x={y:888}">替换x</button>
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
import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let person = shallowReactive({//使用shallowReactive实现浅层响应式 如果有一个对象数据，结构比较深, 但变化时只是外层属性变化
      name:'lewi',
      age:18,
      job:{
        j1:{
          type:'前端',
          salary:20
        }
      },
    })
    const x = shallowRef({//只处理基本数据类型的响应式,
      // 不进行对象的响应式处理 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换
      y:0
    })

    return {
      x,
      ...toRefs(person)
    }
  }
}

</script>


