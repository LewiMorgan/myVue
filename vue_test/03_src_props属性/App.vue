<template>
  <div>
    <student name="张三"  :age="18"  sex="男"/>

  </div>
</template>

<script>
import Student from './components/Student'
export default {
  name: "App",
  components:{Student},

}
</script>
