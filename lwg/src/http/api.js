import request from './request'//获取请求axios
import requers_url from './requers_url' //请求url
// 封装方法 再导出

// 验证码smsCode
export function smsCode(arg){
    return request({
        url:requers_url.smsCode,
        data:arg,//数据
        method:'post'
    })
}
// 验证码登录
export function login(arg){
    return request({
        url:requers_url.login,
        data:arg,
        method:'post'
    })
}
// 密码登录
export function password(arg) {
    return request({
        url:requers_url.password,
        data:arg,
        method:'post'
    })
}
// tabbar
export function tabbar(){
    return request({
         url:requers_url.tabbar,
         data:{},
         method:'get'  
    })
}
// banner
export function banner() {
     return request({
         url:requers_url.banner,
         data:{},
         method:'get'
     })
}
// appIndex
export function appIndex(){
     return request({
         url:requers_url.appIndex,
         data:{},
         method:"get"
     })
}
// teacher
export function teacher(arg){
    return request({
        url:requers_url.teacher+arg,//arg为teacher_id
        data:arg,
        method:"get"
    })
}
//// teacher 
export function mainCourse(arg){
    return request({
        url:requers_url.mainCourse,//主讲课程
        data:arg,
        method:"post"
    })
}
//courseInfo/主讲课程详情 id
export function basis(arg){
    return request({
        url:requers_url.basis+arg,//主讲课程
        data:arg,
        method:"get"
    })
}

//courseInfo/团队介绍 id basis_Tuandui
export function basis_Tuandui(arg){
    return request({
        url:requers_url.basis_Tuandui+arg,//主讲课程
        data:arg,
        method:"get"
    })
}
//courseInfo/课程大纲  
export function kcdg(arg){
    return request({
        url:"/app/courseChapter",//主讲课程
        data:arg,
        method:"post"
    })
}
// 报名  baoming
export function  baoming(arg){
    return request({
        url:requers_url.baoming,//主讲课程
        data:{arg},
        method:"post"
    })
}
// 积分
export function jf(params){
    return request({
        url:requers_url.jf,//主讲课程
        params:params,
        method:"get"
    })
}
//积分详情
export function jfxq (arg){
      return request({
          url:requers_url.jfxq+arg,//详情
          data:arg,
          method:'get'  
      })
}
// 签到 年月日
export function sigin(arg){
    return request({
        url:requers_url.sigin,
        data:arg,
        method:"get"
    })
}

 
//add3  咨询同步:  zx_top  

export function zx_top(arg){
    return request({
        url:requers_url.zx_top,
        data:arg,
        method:"get"
    })
}
// zx 内容
export function zx_conent(arg){
    return request({
        url:'/app/information/index',
        data:arg,
        method:"post"
    })
}
// 咨询详情
export function zx_detail(arg){
    return request({
        url:'/app/information/detail',
        data:arg,
        method:"post"
    })
}

// add4 图书  
 export function tu(){
     return request({
         url:"/app/book/classify",
         methods:'get',
         data:{},
     })
 }
//  图书全部数据
export function tuAll(arg){
    return request({
        url:"/app/book/list/0",
        methods:'get',
        data:{arg},
    })
}
