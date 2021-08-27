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
      state.token=data.token
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
