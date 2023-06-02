import { createStore } from 'vuex'

export default createStore({
  state: {
    allData:[],
    url:'http://127.0.0.1:8000/api/',
    user:null,
    users:[],
    appointment:[],
    test:[],
    tests:{},
    service:[], 
    services:{},
    infirmier:null,
    infirmiers:[],
    medecin:[],
    medecins:{},
    accepter_count:'',
    refuser_count:'',
    attente_count:'',
    all_count:'',
    patient_count:'',
    rendezvous_count:'',
    service_count:'',
    test_count:'',
    all:''
  },
  getters: {
    user : state=>{
      if(state.user === null){
        return JSON.parse(localStorage.getItem('user'))
      }
      return state.user
    },
    token : (_state, getters)=>getters?.users?.token,


    infirmier: state=>{
      if(state.infirmier === null){
        return JSON.parse(localStorage.getItem('user'))
      }
      return state.infirmier
    },
    token:(_state,getters)=>getters?.infirmier?.token
  },
  mutations: {
    login(state,user){
      state.user=user;
      localStorage.setItem('user',state.user);
      // window.location.href="#/appointment"
    },
    login_inf(state,infirmier){
      state.infirmier=infirmier;
      localStorage.setItem('user',state.infirmier);
    },
    logout(state){
      state.user='';
      localStorage.removeItem('user');
      // this.$router.push('#/login')
     // window.location.href="#/login"
      // window.location.reload()
    },
    logout_inf(state){
      state.infirmier='';
      localStorage.removeItem('user');
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
      const storedInfimier=localStorage.getItem('user')
      if(storedInfimier){
        try{
          state.infirmier=JSON.parse(storedInfimier);
        }catch(e){
          console.error('Error parsing infirmier data from local storage',e)
        }
      }else{
        this.commit('logout_inf')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
