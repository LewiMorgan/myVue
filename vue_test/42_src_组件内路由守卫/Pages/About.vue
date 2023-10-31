<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  //通过路由规则，进入该组件时被调用  与全局前（后）置路由的区别
  beforeRouteEnter(to,from,next){//
    console.log('About------beforeRouteEnter',to,from)
    if(to.meta.isAuth){//判断是否鉴权
      if(localStorage.setItem('school')==='atguigu'){
        next()
      }else {
        alert('school名称不正确')
      }
    }else{
      next()
    }
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to,from,next){
    console.log('beforeRouteLeave-----',to,from)
    next()
  },
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