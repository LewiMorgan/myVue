<template>
  <div>
    <ul>
      <li>编号：{{$route.params.id}}</li>
      <li>编码：{{$route.params.name}}</li>
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