<template>
  <div class="row">
<!--    记得写冒号 nnd-->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.login}}</p>
      <h2 v-show="info.isFirst">欢迎使用！！</h2>
      <h2 v-show="info.isLoading">Loading...</h2>
      <h2>{{info.errMrg}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data(){
    return {
      info:{
        users:[],
        isFirst:true,
        isLoading:false,
        errMsg:''
      }
    }
  },
  methods:{
    updataList(infoObj){
      //console.log('List组件接受到了数据',infoObj)
      this.info = {...this.info,...infoObj} //使用es6将传递过来的对象中的属性更新
    }
  },
  mounted(){
    this.$bus.$on('updataList',this.updataList)
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>