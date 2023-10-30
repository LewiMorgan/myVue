<template>
  <div>
    <ul>
      <li>编号：{{$route.query.id}}</li>
      <li>编码：{{$route.query.name}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Detial",
  mounted(){
    console.log(this.$route)
    console.log('wdf?')
  }
}
</script>

<style scoped>

</style>