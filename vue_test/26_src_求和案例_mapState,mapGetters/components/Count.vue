<template>
  <div>
    <h2>总和为:{{sum}}</h2>
<!--    我们想要简写$store.state.xxx属性 可以导入映射（mapState,mapGetters来完成-->
    <h2>总和*10:{{bigSum}}</h2>
    <h2>学校：{{school}}</h2>
    <h2>姓名：{{name}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addOdd">奇数加</button>
    <button @click="addWait">等等加</button>
  </div>

</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "Count",
  data(){
    return {
      n:1
    }
  },
  computed:{
    //1.手写计算属性
    // school(){
    //   return this.$store.state.school
    // },
    // name(){
    //   return this.$store.state.name
    // },
    // sum(){
    //   return this.$store.state.sum
    // },
    //2.通过vuex的mapState来生成计算属性，从state中读取数据。对象写法
    //使用es6写法：
    //...mapState({sum:'sum',school:'school',name:'name'}),
    //3.数组写法
    ...mapState(['sum','school','name']),
    /*-----------------------------------------------*/
    // bigSum(){
    //   return this.$store.getters.bigSum
    // }
    ...mapGetters(['bigSum'])//同上
  },
  methods:{
    add(){
      //1.给整的store绑定dispatch 传递两个参数（函数，值）
      //5.如果没有业务逻辑 可以不dispatch 直接调mutation中的commit
      // this.$store.dispatch('add',this.n)
      this.$store.commit('ADD',this.n)
    },
    sub(){
      // this.$store.dispatch('sub',this.n)
      this.$store.commit('SUB',this.n)
    },
    addOdd(){//4.把逻辑封装在action中
      this.$store.dispatch('addOdd',this.n)
    },
    addWait(){//4.把逻辑封装在action中
      this.$store.dispatch('addWait',this.n)
    }
  },
  mounted(){
    console.log(this)
  }
}
</script>

<style scoped>
  button{
    margin-right: 5px;
  }
</style>