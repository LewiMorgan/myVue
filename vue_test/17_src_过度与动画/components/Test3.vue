<template>
  <div>
    <button @click="isShow = !isShow">点击显示/隐藏</button>
    <!--    1.事件的显示/隐藏
            2.实现动画  1)@keyframes v-enter-active{},v-leave-active{animation}
                      2)在模板中transition-->
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInUp"
        leave-active-class="animate__backOutDown"
    >

      <h2 v-show="isShow" key="1">hello-world</h2>
      <h2 v-show="!isShow" key="2">hello-world</h2>
    </transition-group>

  </div>
</template>

<script>
import 'animate.css'
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
</style>