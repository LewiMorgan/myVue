<template>
  <div>
    <h2 :style="{opacity}">hello world</h2>
    <ul>
      <li>news001 <input type="text"></li>
      <li>news002 <input type="text"></li>
      <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data(){
    return {
      opacity:1
    }
  },
  // mounted(){
  //   this.timer = setInterval(()=>{
  //     this.opacity -= 0.01
  //     console.log('1')
  //     if(this.opacity <= 0){
  //       this.opacity = 1
  //   }
  //   },16)
  // },
  // beforeDestroy(){
  //   clearInterval(this.timer)
  //   console.log('news组件将要被销毁了')
  // },

  activated(){//组件激活时触发
    this.timer = setInterval(()=>{
      this.opacity -= 0.01
      console.log('@')
      if(this.opacity <= 0){
        this.opacity = 1
      }
    },16)
  },
  deactivated(){//组件失活时触发
    //解决了由于设置keep-alive后组件不会销毁 导致无法停掉定时器的问题
    clearInterval(this.timer)
    console.log('news组件将要被销毁了')
  }
}
</script>

<style scoped>

</style>