<template>
  <div>
    <button @click="showStudent">获取学生信息</button>
    <button @click="showCar">获取学生信息</button>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  data(){
    return {

    }
  },
  methods:{
    showStudent(){
      //vue中采用axios包装ajax请求
      // 采用代理服务器的方法实现跨域
        // 缺点：只能代理一个服务器，不灵活
      //但我们由新的解决思路 在vue.config.js中配置

      axios.get('http://localhost:8080/atguigu/students').then(
          response =>{
            console.log('请求成功了',response.data)
          },
          error =>{
            console.log('请求失败了',error.message)
          }
      )
    },
    showCar(){
      axios.get('http://localhost:8080/demo/cars').then(
          response =>{
            console.log('请求成功了',response.data)
          },
          error =>{
            console.log('请求失败了',error.message)
          }
      )
    }

  }

}
</script>

