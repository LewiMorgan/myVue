<template>
  <div class="app">
    <h2>{{msg}} 学生姓名：{{studentName}}</h2>
<!--    方法1：通过父组件给子组件传递一个函数类型的props实现 子传父-->
    <School :getSchoolName="getSchoolName"/>
<!--    方法2：通过父组件给子组件绑定一个自定义事件实现 子传父 v-on/@-->
<!--    <student @lewi="getStudentName" @morgan="m1"/>-->
<!--    方法3：通过父组件给子组件绑定一个自定义事件实现 使用ref  这个方法灵活 延时，一次-->
    <student ref="student" @click.native="show"/><!--通过app的vc获取到student的实例对象 如果要触发原生的click事件 添加.native-->

  </div>
<!--  scoped用法 ref？？？-->
</template>

<script>
import School from './components/School'
import Student from './components/Student'


export default {
  name: "App",
  data(){
    return {
      msg:'你好啊',
      studentName: ''
    }
  },
  components:{Student,School},
  methods:{
    getSchoolName(name){
      console.log('app收到school的姓名',name)
    },
    getStudentName(name,...params) {
      console.log('app收到student姓名',name,params)
      this.studentName = name
    },
    m1(){
      console.log('morgan被调用了')
    },
    show(){
      alert('我要触发原生click事件')
    }
  },
  mounted(){
    this.$refs.student.$on('lewi',this.getStudentName)//绑定自定义事件
    /*this.$refs.student.$on('lewi', (name,...params)=>{//这钟方式回调函数的this值为调用Lewi事件的组件（student),所以要使用箭头函数使this向外找到app
      console.log('app收到student姓名',name,params)
      this.studentName = name
    })*/
    //this.$refs.student.$once('lewi',this.getStudentName)//自定义事件只触发一次
  }
}
</script>
<style>
  .app{
    background-color: #cccccc;
    padding: 5px;
  }
</style>
