<template>
  <div>
    <button @click="isShow = !isShow">点击显示/隐藏</button>
<!--    1.事件的显示/隐藏
        2.实现动画  1)@keyframes v-enter-active{},v-leave-active{animation}
                  2)在模板中transition-->
    <transition name="hello">
      <h2 v-show="isShow">hello-world</h2>
    </transition>

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
    /*width: 500px;*/
    background-color: papayawhip;
  }
  /*使用动画*/
  .hello-enter-active{
    animation: lewi 1s linear;
  }
  .hello-leave-active{
    animation: lewi 1s linear reverse;
  }

  /*创建动画*/
  @keyframes lewi {
    from {
      transform: translateX(100%)
    }
    to{
      transform: translateX(0px);
    }
  }

</style>