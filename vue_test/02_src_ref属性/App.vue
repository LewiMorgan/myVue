<template>
  <div>
    <School ref="sch"></School>
    <h2 v-text="msg" ref="title"></h2>
    <button @click="showDom" ref="btn">点我输出dom</button>
  </div>
</template>

<script>
//引入组件
import School from './components/School'
export default {
    name:'App',
    components:{
      School,
    },
    data(){
      return {
        msg:'Welcome'
      }
    },
    methods:{
      showDom(){
        console.log(this.$refs.title)//真实dom元素
        console.log(this.$refs.sch)//vc School组件De实例对象
      }
    }

}
</script>
