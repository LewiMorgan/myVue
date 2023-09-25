<template>
  <div>
    <School/>
    <hr>
    <student/>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'


export default {
  name: "App",
  components:{Student,School},

}
</script>
<!--<style scoped>
  .title{
    color: red;
  }
</style>-->
