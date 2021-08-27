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
        url:'/login',
        data:arg,
        method:'post'
    })
}