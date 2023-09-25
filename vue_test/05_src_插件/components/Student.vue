<template>
  <div>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <input type="text" v-fbind:value="name">
    <button @click="showHello">点我测试hello方法</button>
  </div>
</template>

<script>

export default {
  name: "Student",
  data(){
    return{
      name:'lewi',
      age:18
    }
  },
  methods:{
    showHello(){
      this.hello()
    }
  }
}
</script>
