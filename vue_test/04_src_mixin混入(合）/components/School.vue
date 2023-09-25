<template>
  <div>
    <h3 @click="showInfo">{{name}}</h3>
    <h3>{{adress}}</h3>
  </div>
</template>

<script>
//导入mixin文件
// import {mixin,mixin2} from '../mixin'
export default {
  name: "School",
  data(){
    return{
      name:'atguigu',
      adress:'bj',
      x:666
    }
  },
  mounted(){
    console.log('hello!!!')
  },
  //导入配置项 注意要写成mixins
  // mixins:[mixin,mixin2]
}
</script>
