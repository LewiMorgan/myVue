<template>
  <div class="school">
    <h3>{{name}}</h3>
    <h3>{{address}}</h3>
    <button @click="sendSchool()">把学校的名给app</button>
    <!--    需求点击按钮后把姓名提交给app-->
  </div>
</template>

<script>
export default {
  name: "School",
  props:['getSchoolName'],
  data(){
    return{
      name:'atguigu',
      address:'bj',
    }
  },
  methods:{
    sendSchool(){
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
 .school{
   background: lightcyan;
   padding: 5px;

 }
</style>
