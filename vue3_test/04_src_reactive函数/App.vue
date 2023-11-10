<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h2>个人信息</h2>
  <h3 v-show="person.name">姓名：{{person.name}}</h3>
  <h3>年龄：{{person.age}}</h3>
  <h3>工作：{{person.job.type}}</h3>
  <h3>薪资：{{person.job.salary}}</h3>
  <h3>爱好：{{person.hobby}}</h3>
  <h3 v-show="person.sex">性别：{{person.sex}}</h3>
  <h3>测试：{{person.job.a.b.c}}</h3>
  <button @click="changeInfo">修改信息</button>
  <button @click="addSex">添加性别</button>
  <button @click="deleteName">删除姓名</button>
</template>

<script>
//修改时必须使用ref属性和value来完成对引用对象的操作
// 且模板中不需要写xxx.value 已经自动加上了

//使用ref,reactive前要先注册
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  //数据
  setup(){
    let person = reactive({
      name:'lewi',
      age:18,
      job:{
        type:'前端',
        salary:'100k',
        a:{
          b:{
            c:123
          }
        }
      },
      hobby:['吃饭','学习','健身']
    })


    //方法
    function changeInfo(){//使用reactive定义的obj属性不需要写xxx.value
      person.name = 'mi'
      person.age = 20
      person.job.type = 'UI'
      person.job.salary = '10K'
      person.job.a.b.c = 456
      person.hobby[0] = '睡觉'
      // console.log(name,age,job)
    }

    function addSex(){
      person.sex = '男'
    }
    function deleteName(){
      // person.name = ''
      delete person.name
    }
    //返回值
    return{
      person,
      changeInfo,
      addSex,
      deleteName
    }

  }
}
</script>


