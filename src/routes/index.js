import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import('@/view/main'),
            children:[
                {
                    path:"",
                    component:()=>import('@/view/home'),
                    meta:{
                        title:"工作平台",
                        index:"1"
                    },
                },
                {
                    path:'/article',
                    component:()=>import('@/view/content/article.vue'),
                    meta:{
                        title:"文章列表",
                        parentName:"内容管理",
                        index:"2-1"
                    },
                },
                {
                    path:'/company',
                    component:()=>import('@/view/company.vue'),
                    meta:{
                        title:"公司列表",
                        parentName:"用户管理",
                        index:"2-2"
                    },
                },
                {
                    path:'/user',
                    component:()=>import('@/view/user/userlist/userlist.vue'),
                    meta:{
                        title:"用户列表",
                        parentName:"用户管理",
                        index:"3-1"
                    },
                },
                {
                    path:'/company',
                    component:()=>import('@/view/company.vue'),
                    meta:{
                        title:"公司列表",
                        parentName:"用户管理",
                        index:"3-2"
                    },
                }
            ]
        },
        {
            path:"/login",
            component:()=>import("@/view/account/login"),
            meta:{
                title:"登录",
                anonymous:true
            }
        }

    ]
})


import config from '@/config'
router.beforeEach((to,from,next)=>{
    document.title=to.meta.title+'- 网站'

    //当前路由需要登录，如果成功，验证登录，否则到登录页
    if(!to.meta.anonymous){

        //做登录验证
        if(sessionStorage.getItem(config.CACHE_KEY.LOGIN_USERNAME)){
            next()
        }else{
            //到登录页
            next('/login')
        }
    }else{
        //不需要登录的页面直接跳转
        next()
    }

})

export  default  router