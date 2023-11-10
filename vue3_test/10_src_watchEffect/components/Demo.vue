<template>
  <h2>求和：{{sum}}</h2>
  <button @click="sum++">点我加一</button>
  <hr>
  <h2>信息：{{msg}}</h2>
  <button @click="msg+='!'">点我添加！</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪水：{{person.obj.obj1.salary}}k</h2>
  <button @click="person.name+='~'">修改name</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.obj.obj1.salary++">加薪！！！</button>
</template>

<script>

import {ref,reactive,watchEffect} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name:'lewi',
      age:18,
      obj:{
        obj1:{
          salary:20,
          type:'前端'
        },
        obj2:{
          salary:5,
          type:'移动'
        }
      }
    })

    //上来自动调用一次（immediate） 开启深度监视 在属性被调用时调用回调函数
    watchEffect(()=>{
      const x1 = person.name
      const x2 = person.obj.obj1.salary
      console.log('watchEffect被调用了')
    })

    return{
      sum,
      msg,
      person
    }

  }


}

</script>


