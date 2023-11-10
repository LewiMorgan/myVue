<template>
  <Demo @hello="showInfo" msg="hello" school="atguigu">
    <h2>ceshi插槽</h2>
  </Demo>
<!--  传递数据，自定义事件-->
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components: {Demo},
  setup() {

    function showInfo(value) {
      alert(`'你好，触发了自定义事件,我收到的参数是${value}'`)
    }

    return {
      showInfo
    }
  }
}
</script>


