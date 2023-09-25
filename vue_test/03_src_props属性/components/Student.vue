<template>
  <div>
    <h1>{{msg}}</h1>
    <h3>{{name}}</h3>
    <h3>{{sex}}</h3>
    <h3>{{myAge}}</h3>
    <button @click="updataAge">尝试修改年龄</button>
  </div>

</template>

<script>
export default {
  name: "Student",
  data(){
    return{
      msg:'hello',
      myAge:this.age
    }
  },
  methods:{
    updataAge(){
      this.myAge++
    }
  },
  //简单声明接收
  props:['name','age','sex'],
  //接收的同时对数据进行类型限制(传过来的数据）
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String,
  // }
  ////接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  // props:{
  //   name:{
  //     type:String,//name的类型是字符串
  //     required:true,//name是必要的
  //   },
  //   age:{
  //     type:Number,
  //     default:99,//默认值
  //   },
  //   sex:{
  //     type:String,
  //     default: true,
  //   }
  // }

}
</script>

<style scoped>

</style>