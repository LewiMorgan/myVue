import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    namespaced:true,//加上这个属性才能在count组件中使用模块化操作
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('请输入姓王的')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[{id:'001',name:'张三'}]
    },
    getters:{
        getFirstName(state){
            return state.personList[0].name
        }
    }
}
