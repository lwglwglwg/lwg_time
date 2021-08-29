import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    redirect:'/index',
    component: () => import('@/views/Home'),
    children:[
      {
        path: '/index',
        component: () => import('@/views/index')
      },
      {
        path: '/class',
        component: () => import('@/views/class')
      },
      {
        path: '/zx',
        component: () => import('@/views/zx')
      },
      {
        path: '/books',
        component: () => import('@/views/books')
      },
      {
        path: '/my',
        component: () => import('@/views/my')
      },
      {
        path: '/mys/mys',//登录成功
        component: () => import('@/views/mys/mys')
      },
     
    ]
  },
 {
  path: '/login',
  component: () => import('@/views/login'),
 },
 {
  path: '/setting',//验证码设置
  component: () => import('@/views/setting')
},
{
  path: '/mys/tu',//退出页
  component: () => import('@/views/mys/tu')
},
{
  path: '/index/teacher',//老师详情
  component: () => import('@/views/index/teacher')
},

]

const router = new VueRouter({
  routes
})

export default router
