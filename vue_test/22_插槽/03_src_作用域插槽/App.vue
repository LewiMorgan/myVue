<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
<!--        使用atguigu来接收传递过来的数据 接收时必须要使用template容器来接收传递来的参数-->
        <ul>
          <li v-for="(game,index) in atguigu.games" :key="index">{{game}}</li>
        </ul>
        {{atguigu.msg}}
      </template>
    </Category>

    <Category title="游戏" >
      <template scope="{games}">
        <ol>
          <li v-for="(game,index) in games" :key="index">{{game}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">
        <h4 v-for="(game,index) in games" :key="index">{{game}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category' //./

export default {
  name: "App",
  components:{Category},//s
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

