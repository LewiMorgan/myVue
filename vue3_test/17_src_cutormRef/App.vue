<template>
  <input type="text" v-model="keyWord">
  <h2>{{keyWord}}</h2>
</template>

<script>
import {ref,customRef} from 'vue'
export default {
  name: 'App',
  setup(){
    function myRef(value,delay){//相当于一个函数
      let timer
      return customRef((track,trigger)=>{//返回一个customRef 参数是函数
        return {//返回get,set
          get(){
            console.log(`读取了myRef容器中的数据：${value}`)
            track()//追踪 同意修改后重新调用
            return value
          },
          set(newValue){//newValue是指修改后的值
            clearTimeout(timer)//防抖！！ 防止定时器不断的开启 然后页面在反复的刷新
            timer = setTimeout(()=>{
              value = newValue
              console.log(`myRef容器中的值被修改为${newValue}`)
              trigger()//再次触发get去读取值
            },delay)
          }
        }
      })
    }
    // let keyWord = ref('hello')
    //自定义ref
    let keyWord = myRef('hello',1000)
    return {keyWord}
  }
}
</script>


