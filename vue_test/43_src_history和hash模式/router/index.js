//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../Pages/About'
import Home from '../Pages/Home'
import Message from '../Pages/Message'
import News from '../Pages/News'
import Detial from '../Pages/Detial'
 const router =  new VueRouter({
    // mode:'hash',
    mode:'history',//修改路由的工作模式
    routes:[//这里要写routes 不是routers
        {
            name:'guanyv',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[//多级路由采用children配置项
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                    // beforeEnter:((to,from,next)=>{//独享路由 守卫没有后置守卫 可以搭配全局使用
                    //     console.log('独享路由守卫调用',to,from)
                    //     if(to.meta.isAuth){
                    //         if(localStorage.getItem('school') === 'atguigu'){
                    //             next()
                    //         }else{
                    //             alert('学校名不正确')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // })
                },

                {
                    name:'xiaoxi',
                    path:'message',//在多级路由中不需要写/
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detial',//使用占位符声明接收params参数
                            component:Detial,
                            meta:{title:'详情'},
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件 基本不使用
                            // props:{id:'001',name:'lewi'}
                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            // props:true
                            //props的第三种写法，值为函数
                            props($route){
                                return {
                                    id:$route.query.id,
                                    name:$route.query.name,
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫 初始化时被调用、每次路由切换之前被调用
//毕设！！！！！！！！！
// router.beforeEach((to,from,next)=>{//使用组件的beforeEach属性来设置路由切换时的条件
//     console.log('前置路由守卫调用',to,from)
//      if(to.meta.isAuth){//判断路由是否需要进行权限控制
//          if(localStorage.getItem('school') === 'atguigu'){//当school = atguigu时才可以切换
//              next()//是atguigu 所以放行
//          }else{
//              alert('学校信息不正确')
//          }
//      }else{
//          next()//放行其他的路由接口
//      }
// })

//全局后置路由守卫 初始化时被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{//只有两个参数
    console.log('后置路由守卫调用',to,from)
    document.title = to.meta.title || '硅谷系统' //||'硅谷系统'为初始值
})


export default router






