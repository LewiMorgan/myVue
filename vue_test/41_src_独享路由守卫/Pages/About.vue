<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    // console.log('About即将被销毁了')
  },
  mounted() {
    // console.log('About即将被挂载了',this)
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  }
}
</script>

<style scoped>

</style>