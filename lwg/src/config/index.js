// 根据环境引入不同配置 process.env.VUE_APP_ENV
let enviroment = process.env.VUE_APP_ENV
//前面公共部分env.取出 用字符串+变量拼接
let config = require("./env."+ enviroment)
module.exports =config

// 根据环境引入不同配置 process.env.VUE_APP_ENV
// const environment = process.env.VUE_APP_ENV || 'development'
// const config = require('./env.' + environment)
// module.exports = config