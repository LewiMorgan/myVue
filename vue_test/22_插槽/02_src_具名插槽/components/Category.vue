<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot name="center">组件标签中的标签体1</slot>
    <slot name="footer">组件标签中的标签体1</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title']
}
</script>

<style scoped>
  .category{
    background-color:paleturquoise;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: yellow;
  }

</style>