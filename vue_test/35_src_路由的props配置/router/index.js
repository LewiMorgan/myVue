//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../Pages/About'
import Home from '../Pages/Home'
import Message from '../Pages/Message'
import News from '../Pages/News'
import Detial from '../Pages/Detial'

export default new VueRouter({
    routes:[//这里要写routes 不是routers
        {
            name:'guanyv',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[//多级路由采用children配置项
                {
                    path:'message',//在多级路由中不需要写/
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detial/:id/:name',//使用占位符声明接收params参数
                            component:Detial,
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件 基本不使用
                            // props:{id:'001',name:'lewi'}
                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            // props:true
                            //props的第三种写法，值为函数
                            props($route){
                                return {
                                    id:$route.query.id,
                                    name:$route.query.name,
                                    a:1,
                                    b:'hello'
                                }
                            }
                        }
                    ]
                },
                {
                    path:'news',
                    component:News
                }
            ]
        }
    ]
})






