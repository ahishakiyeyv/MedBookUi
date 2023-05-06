import { createStore } from 'vuex'

export default createStore({
  state: {
    url:'http://127.0.0.1:8000/api/',
    user:null,
    users:[],
    appointment:[],
    test:[],
    tests:{},
    service:[], 
    services:{}
  },
  getters: {
    user : state=>{
      if(state.user === null){
        return JSON.parse(localStorage.getItem('user'))
      }
      return state.user
    },
    token : (_state, getters)=>getters?.users?.token
  },
  mutations: {
    login(state,user){
      state.user=user;
      localStorage.setItem('user',state.user);
      // window.location.href="#/appointment"
    },
    logout(state){
      state.user='';
      localStorage.removeItem('user');
      // this.$router.push('#/login')
     // window.location.href="#/login"
      // window.location.reload()
    },
    initializeStore(state){
      const storedUser=localStorage.getItem('user')
      if(storedUser){
        try{
          state.user = JSON.parse(storedUser);
        }catch(e){
          console.error("Error parsing user data from localStorage",e)
        }
      }else{
        this.commit('logout');
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
