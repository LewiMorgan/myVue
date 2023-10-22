<template>
  <div class="container">
    <Category title="食物">
      <img src="https://img.zcool.cn/community/01d80e5e09f781a801216518695d24.jpg@2o.jpg" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://vjs.zencdn.net/v/oceans.mp4"></video>
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
  .container{
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

