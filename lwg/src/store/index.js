import Vue from 'vue'
import Vuex from 'vuex'
// 1 导入vuex-persist 
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
   storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token1:'',
    token:[]
  },
  mutations: {
    dotoken(state,data){
      state.token1=data.remember_token//存token
      state.token=data//数据
    },
    
    tui(state){//清除token
       state.token=""
    }
  },
  getters:{
    
  },
  actions: {
  },
  modules: {
  },//2 配置plugins
  plugins: [vuexLocal.plugin] 
})
