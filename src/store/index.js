import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgKey: '2-3'
  },
  mutations: {
    setImgKey (state, key) {
      state.imgKey = key
    }
  },
  getters: {
    imgKey: state => state.imgKey
  }
})
