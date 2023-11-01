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
    <!-- 组件的缓存要使用keep-alive标签包裹展示区 include属性来确定具体的组件   -->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy(){
    // console.log('Home组件即将被销毁')
  },
  mounted(){
    // console.log('Home组件即将被挂载',this)
    window.aboutRoute = this.$route
    window.aboutRouter = this.$router
  }
}
</script>

<style scoped>

</style>