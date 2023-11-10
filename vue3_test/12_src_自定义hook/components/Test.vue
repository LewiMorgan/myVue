<template>
  <h2>我是Test组件</h2>
  <h2>获取鼠标焦点：x={{point.x}}y={{point.y}}</h2>
</template>

<script>
import usePoint from "@/hooks/usePoint";
export default {
  name: "Test",
  setup(){
    const point = usePoint()
    return {point}
  }
}
</script>

