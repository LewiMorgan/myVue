<template>
  <div>
    <button @click="showDialog = true">点我显示组件</button>
    <teleport to="body">
      <div class="mark" v-if="showDialog">
        <div class="dialog">
          <h3>内容</h3>
          <h3>内容</h3>
          <h3>内容</h3>
          <h3>内容</h3>
          <button @click="showDialog = false">点我隐藏</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import {ref,Teleport} from 'vue'
export default {
  name: "Dialog",
  setup(){
    let showDialog = ref(false)
    return {showDialog}
  }
}
</script>

<style scoped>

  .mark{
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;/*铺满整个屏幕*/
    background: rgb(0,0,0,0.5);
  }
  .dialog{
    width: 200px;
    height: 200px;
    background: yellow;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>