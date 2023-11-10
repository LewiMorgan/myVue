<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h3>sum:{{sum}}</h3>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>个人信息</h2>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <h3>薪资：{{job.j1.salary}}k</h3>
  <h3 v-show="person.car">汽车：{{person.car}}</h3>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪资</button>
  <button @click="addRawperson()">输出原始person</button>
  <button @click="addCar()">添加一辆汽车</button>
  <button @click="person.car.name+='!'">修改汽车的名字</button>
  <button @click="person.car.price++">修改价格</button>
  <button @click="setCar()">测试响应式</button>
</template>

<script>
//使用ref,reactive前要先注册
import {ref,reactive,toRefs,toRaw,markRaw} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let sum = ref(0)
    let person = reactive({
      name:'lewi',
      age:18,
      job:{
        j1:{
          type:'前端',
          salary:20
        }
      },
    })

    function addRawperson(){
      const p = toRaw(person)
      console.log(p)
    }
    function addCar(){//添加的属性自动是响应式的 不想要响应式？ markRaw
      let car = {name:'ts',price:100}
      person.car =markRaw(car)
    }
    function setCar(){
      const n = person.car.name+='!'
      const p = person.car.price++
      console.log(n,p)
    }


    return {
      sum,
      person,
      ...toRefs(person),
      addRawperson,
      addCar,
      setCar
    }
  }
}

</script>


