<template>
  <div>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                                                                    <!-- 多级路由中要写完整的路径-->
      </li>
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy(){
    console.log('Home组件即将被销毁')
  },
  mounted(){
    console.log('Home组件即将被挂载',this)
    window.aboutRoute = this.$route
    window.aboutRouter = this.$router
  }
}
</script>

<style scoped>

</style>