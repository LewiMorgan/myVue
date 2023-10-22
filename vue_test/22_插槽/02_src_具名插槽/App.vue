<template>
  <div class="container">
    <Category title="食物">
      <img slot="center" src="https://img.zcool.cn/community/01d80e5e09f781a801216518695d24.jpg@2o.jpg" alt="">
      <a slot="footer" href="https://www.baidu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://vjs.zencdn.net/v/oceans.mp4"></video>
      <template slot="footer">
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category' //./


export default {
  name: "App",
  components:{Category},//s
  data(){
    return {
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['LOL','雨中冒险','grounded','森林'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  },


}
</script>
<style>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  /*样式写在category中也可以*/
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
</style>

