<template>
  <div>
    <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header"><h2>Vue Router Demo</h2></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
<!--            初始html中我们使用a标签完成页面的跳转-->
<!--            <a class="list-group-item active" href="./about.html">About</a>-->
<!--            <a class="list-group-item" href="./home.html">Home</a>-->

<!--            在router中通过router-link 和 to 标签实现路由的转换 to标签中只写/xxx，没有点-->
<!--            再通过active-class="active"-->
            <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
            <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
<!--                <p>根据组件具体的内容显示对应的内容</p>-->
<!--              指定组件的呈现位置-->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components:{},//s
}
</script>
<style>

</style>

