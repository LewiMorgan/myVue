<template>
  <div>
    <h2>学校人员</h2>
    <input type="text" v-model="name">
    <button @click="addPerson">添加人员信息</button>
    <button @click="addPersonWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个随机</button>
    <h3>列表中第一个名字是:{{firstName}}</h3>
    <ul>
      <li v-for="person in personList" :key="person.id">{{person.name}}</li>
    </ul>
    <h3>Count组件中和为{{sum}}</h3>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
  name: "Person",
  data(){
    return {
      name:''
    }
  },
  computed:{
    personList(){
      return this.$store.state.personAbout.personList
    },
    sum(){
      return this.$store.state.countAbout.sum
    },
    firstName(){
      return this.$store.getters["personAbout/getFirstName"]//getters中的属性要采用这种方式取
    }
  },
   // ...mapState(['sum','personList']),
  methods:{
    addPerson(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('personAbout/ADD_PERSON',personObj)//注意要使用personAbout/XXX的形式来commit
      this.name = ''
    },
    addPersonWang(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.dispatch('personAbout/addPersonWang',personObj)//联系actions使用dispatch
      this.name = ''
    },
    addPersonServer(){
      this.$store.dispatch('personAbout/addPersonServer')
    }
  }
}
</script>

<style scoped>

</style>