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
        path: '/class',//名师详情
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
  path: '/mys/sign',//签到
  component: () => import('@/views/mys/sign')
},
{
  path: '/mys/htj',//好课推荐
  component: () => import('@/views/mys/htj')
},
{
  path: '/mys/jfxq',//签到详情
  component: () => import('@/views/mys/jfxq')
},
{
  path: '/mys/search',//签到详情 搜索
  component: () => import('@/views/mys/search')
},
{
  path: '/sms/sms',//验证码登录
  component: () => import('@/views/sms/sms')
},
{
  path: '/sms/find_sms',//设置密码登录
  component: () => import('@/views/sms/find_sms')
},
{
  path: '/mys/tu',//退出页
  component: () => import('@/views/mys/tu')
},
{
  path: '/detail',//老师详情 courseInfo
  component: () => import('@/views/index/teacher')
},
{
  path: '/basis',//主讲课程详情 
  component: () => import('@/views/index/basis')
},
{
  path: '/baoming',//报名
  component: () => import('@/views/index/baoming')
}

]

const router = new VueRouter({
  routes
})

export default router
