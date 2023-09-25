<template>
  <div>
    <h3 @click="showInfo">{{name}}</h3>
    <h3>{{age}}</h3>
  </div>
</template>

<script>
//const名 文件名
// import {mixin,mixin2} from '../mixin'

export default {
  name: "Student",
  data(){
    return{
      name:'lewi',
      age:18
    }
  },
  // mixins:[mixin,mixin2]
}
</script>
