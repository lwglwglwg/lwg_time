let enviroment = process.env.VUE_APP_ENV
let config = require("./env."+ enviroment)
console.log(config);

module.exports =config

// 根据环境引入不同配置 process.env.VUE_APP_ENV
// const environment = process.env.VUE_APP_ENV || 'development'
// const config = require('./env.' + environment)
// module.exports = config