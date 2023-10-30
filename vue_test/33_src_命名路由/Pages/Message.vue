<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!--字符串写法 -->
        <!--<router-link to="/home/message/detial?id=001&name=leiw">{{m.name}}</router-link>&nbsp;&nbsp-->
<!--        <router-link :to="`/Home/Message/Detial?id=${m.id}&name=${m.name}`">{{m.name}}</router-link>&nbsp;&nbsp;-->
        <!--对象写法 -->
        <router-link :to="{
          name:'xiangqing',
          query:{
            id:m.id,
            name:m.name
          }
        }">
          {{m.id}}
        </router-link>
      </li>
      <hr>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
/*
* 思路：
*   1.写数据 然后通过遍历的方式完成message的页面
*   2.引入并配置detial组件 配置index(message的children配置项
*   3.修改message组件中跳转的路劲标签和属性(route-link,to)
*   4.传递参数 使用对象写法或字符串写法都可以
*   5.接收参数 在$route.query.XXX来接收
* */

export default {
  name: "Message",
  data(){
    return {
      messageList:[
        {id:'001',name:'message1'},
        {id:'002',name:'message2'},
        {id:'003',name:'message3'},
      ]
    }
  }
}
</script>

<style scoped>

</style>