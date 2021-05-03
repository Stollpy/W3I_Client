import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    API_BASE_URL: 'https://localhost:8000/api/v1.0', // safe-cove-86297.herokuapp.com
    token: sessionStorage.getItem('jwt'),
    URI_USER: sessionStorage.getItem('uri_user'),
    ID_MAIN_ACCOUNT_SESSION: sessionStorage.getItem('id_main_account_session'),
  },
  mutations: {
    setToken: function (state, value){
      state.token = value;
    },
    setIdMainAccount: function (state, value){
      state.ID_MAIN_ACCOUNT_SESSION = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
