//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../Pages/About'
import Home from '../Pages/Home'
import Message from '../Pages/Message'
import News from '../Pages/News'

export default new VueRouter({
    routes:[//这里要写routes 不是routers
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[//多级路由采用children配置项
                {
                    path:'message',//在多级路由中不需要写/
                    component:Message
                },
                {
                    path:'news',
                    component:News
                }
            ]
        }
    ]
})






