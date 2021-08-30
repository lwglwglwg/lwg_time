import Vue from 'vue'
import Vuex from 'vuex'
// 持久化
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
   storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
  },
  mutations: {
    dotoken(state,data){
      state.token=data
    },
    tui(state){//清除token
       state.token=""
    }
  },
  getters:{
    // sums(state){
    //       let num =0
    //      state.token.forEach(item=>{
    //          num += item.status
    //      })
    //      return [num]
    // }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
