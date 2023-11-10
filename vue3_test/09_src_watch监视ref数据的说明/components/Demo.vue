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

import {ref,reactive,watch} from 'vue'
export default {
  name: 'Demo',
  // watch:{
  //   sum(oldvalue,newvalue){//vue2简写
  //     console.log(oldvalue,newvalue)
  //   }
  // },
  // watch:{
  //   sum:{
  //     immediate:true,
  //     handler(oldvalue,newvalue){//vue2完整写法 handler immediate:true
  //       console.log(oldvalue,newvalue)
  //     }
  //   }
  // },
  setup(){
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = ref({
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

    //一：监视ref定义的多个响应式数据 使用[] 一个的话直接写，  也可以传递第三个参数 immediate,deep
    // watch([sum,msg],(oldvalue,newvalue)=>{//vue3中的watch写法 回调
    //   console.log(oldvalue,newvalue)
    // },{immediate:true})

    //二：监视reactive定义的响应式数据
    // 1：不能正确获取到oldvalue
    // 2. 强制开启了深度监视deep配置无效
    // watch(person,(oldvalue,newvalue)=>{
    //   console.log(oldvalue,newvalue)
    // },{deep:false})//此处的deep属性不生效

    //三：监视reactive定义的一个响应式数据的一个属性
    // watch(()=>person.name,(oldvalue,newvalue)=>{
    //   console.log('person中的name被修改了',oldvalue,newvalue)
    // },{deep:false})

    //四：监视reactive定义的一个响应式数据的某些属性
    // watch([()=>person.name,()=>person.age],(oldvalue,newvalue)=>{
    //   console.log('person中的name/age属性改变了',oldvalue,newvalue)
    // })
    //特殊 监视reactive定义的一个响应式数据中的某个对象属性时 要开启深度监视
    // watch(()=>person.obj,(oldvalue,newvalue)=>{
    //   console.log('person中的obj被修改了',oldvalue,newvalue)
    // },{deep:true})

    //如果使用ref来定义person 检测的是refilpm对象 1.这时watch的第一个参数要写为person.value 此时监视的是ref中reactive生成的proxy对象
    //                                      2.或开启深度监视deep:true

    // console.log(sum)
    // console.log(person)
    watch(person,(oldvalue,newvalue)=>{
      console.log('person数据被修改了',oldvalue,newvalue)
    },{deep:true})

    return{
      sum,
      msg,
      person
    }

  }


}

</script>


