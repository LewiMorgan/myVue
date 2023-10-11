<template>
  <div class="school">
    <h3>{{name}}</h3>
    <h3>{{address}}</h3>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data(){
    return{
      name:'atguigu',
      address:'bj',
    }
  },
  mounted(){//使用事件总线 创建自定义事件
    // this.$bus.$on('hello',(name)=>{//回调，接受数据 另一种方法是写在methods
    //   console.log('接受到student组件的名字',name)
    // })
    this.subscribeId = pubsub.subscribe('hello',(msgName,data)=>{//订阅消息
      console.log(this)
      console.log('我接受到了订阅的消息:',msgName,data)
    })
  },
  beforeDestory(){//解绑当前组件用到的自定义事件
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.subscribeId)//取消订阅
  }
}
</script>

<style scoped>
 .school{
   background: lightcyan;
   padding: 5px;

 }
</style>
