import axios from 'axios'
import { baseUrl } from "@/config/index.js"// 多环境url
import {Toast, Loading} from "vant"


// 基础
const service = axios.create({
    baseURL: baseUrl,//url地址
    timeout: 5000,
})
// 请求
service.interceptors.request.use(
    (config) => {
           Toast.loading({//loading
            message: '加载中...',
            forbidClick: true,
            duration:30000,
          });

        return config
    }, (error) => {
        return Promise.reject(error)
    })
// 响应
service.interceptors.response.use(
    (response) => {
        
        Toast.clear()//关闭loading
        return Promise.resolve(response)
    }, (error) => {
        return Promise.reject(error)
    })
// 抛出
export default service