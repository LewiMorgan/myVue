<template>
  <div>
    <h2>学校人员</h2>
    <input type="text" v-model="name">
    <button @click="addPerson">添加人员信息</button>
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
      return this.$store.state.personList
    },
    sum(){
      return this.$store.state.sum
    }
  },
   // ...mapState(['sum','personList']),
  methods:{
    addPerson(){
      const personObj = {id:nanoid(),name:this.name}
      this.$store.commit('ADD_PERSON',personObj)
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>