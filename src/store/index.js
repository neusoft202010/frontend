import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  loginuser:null,
	  
  },
  getters: {
	  loginuser(state){
		  return state.loginuser;
	  }
  },
  mutations: {
	  setLoginUser(state, user){
		  state.loginuser = user;
	  },
	  logoutUser(state){
		  state.loginuser = null;
	  }
  },
  actions: {
	  loginUser(state, user){
		  state.commit("setLoginUser", user);
	  },
	  logout(state){
		  state.commit("logoutUser");
	  }
  },
  modules: {
  }
})
