<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot :games="games" msg="hello">组件标签中的标签体1</slot>
<!--    :games="games" msg="hello"传递数据给使用插槽者-->
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title'],
  data(){
    return {
      games:['LOL','雨中冒险','grounded','森林'],
    }
  },
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