<template>
  <div>
    <button @click="isShow = !isShow">点击显示/隐藏</button>
    <!--    1.事件的显示/隐藏
            2.实现动画  1)@keyframes v-enter-active{},v-leave-active{animation}
                      2)在模板中transition-->
    <transition-group name="hello">
      <h2 v-show="isShow" key="1">hello-world</h2>
      <h2 v-show="!isShow" key="2">hello-world</h2>
    </transition-group>

  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
h2{
  background-color: orange;
}
/* 进入的起点、离开的终点 */
.hello-enter,.hello-leave-to{
  transform: translateX(-100%);
}
.hello-enter-active,.hello-leave-active{
  transition: 0.5s linear;
}
/* 进入的终点、离开的起点 */
.hello-enter-to,.hello-leave{
  transform: translateX(0);
}


</style>