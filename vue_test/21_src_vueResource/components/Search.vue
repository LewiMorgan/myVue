<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWords"/>&nbsp;
<!--      将搜索框的值作为参数写入接口 使用v-model存储为keyWords-->
      <button @click="showUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Search",
  data(){
    return {
      keyWords:'',
    }
  },
  methods:{

    showUsers(){
      //使用接口获取数据
        this.$bus.$emit('updataList', {isFirst:false,isLoading:true,errMsg:'',users:[]})//请求前更新数据
        this.$http.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
          response => {
            console.log('请求成功了')
            //请求成功后更新List的数据
            this.$bus.$emit('updataList', {users:response.data.items,isLoading:false,errMsg:''})
          },
          error => {
            // console.log('出错了',error.message)
            //请求后更新List的数据
            this.$bus.$emit('updataList', {users:[],isLoading:false,errMsg:error.message})
          }
      )
    }
  }
}
/*思路：1，获取数据 =>通过搜索来拿到数据
        2.拿到搜索框的关键词后(v-model传递数据）
*       3.从Vue官方提供的接口来获取数据（参数配置要使用Es6的``表达式）
        4.拿到数据后传递数据 使用全局事件总线
        5.配置界面
*        */
</script>

<style scoped>

</style>