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
// 登录
export function login(arg){
    return request({
        url:requers_url.login,
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
export function teacher(){
    return request({
        url:requers_url.teacher,
        data:{},
        method:"get"
    })
}