<template>
  <div>
    <h3>{{name | mySlice}}</h3>
    <h3>{{adress}}</h3>
  </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return{
      name:'atguigu',
      adress:'bj',
    }
  }
}
</script>
