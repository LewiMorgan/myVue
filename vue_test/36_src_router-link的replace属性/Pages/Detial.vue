<template>
  <div>
    <ul>
      <li>编号：{{id}}</li>
      <li>编码：{{name}}</li>
      <li>{{a}}</li>
      <li>{{b}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Detial",
  props:['id','name','a','b'],//可以让路由接收参数时不去写过于繁琐的
  mounted(){
    console.log(this.$route)
    console.log('wdf?')
  }
}
</script>

<style scoped>

</style>