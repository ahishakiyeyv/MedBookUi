import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/login/login.vue'
import signin from '../views/login/signin.vue'
import TestView from '../views/TestView.vue'
import AppointmentView from '../views/AppointmentView.vue'
import Admin from '../views/admin/credentials/login.vue'
import signinadmin from '../views/admin/credentials/signup.vue'
import dashboard from '../views/admin/dashboardView.vue'
import Adminappointment from '../views/admin/Appointment.vue'
import Test from '../views/admin/Test.vue'
import Service from '../views/admin/Service.vue'
import Patient from '../views/admin/Patient.vue'
import AppointmentDetails from '../views/admin/AppointmentDetails.vue'
import Utilisateur from '../views/admin/Utilisateur.vue'
import appoint from '../views/appoint'
import appoint1 from '../views/appoint1'
import appoint2 from '../views/appoint2'
import store from '../store'
// import {IS_USER_AUTHENTICATE_GETTER} from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/login', name: 'login', component: login, meta:{auth:false}},
  { path: '/signin', name: 'signin', component: signin, meta:{ auth:false} },
  { path: '/test',name: 'test',component: TestView},
  { path: '/appointment',name: 'appointment',component: AppointmentView, meta:{auth:true}},
  { path: '/admin',name: 'admin',component: Admin},
  { path: '/signinAdmin',name: 'signinAdmin',component: signinadmin},
  { path: '/dashboard',name: 'dashboard',component: dashboard},
  { path: '/Adminappointment',name: 'Adminappointment',component: Adminappointment},
  { path: '/TestAdmin',name: 'TestAdmin',component: Test},
  { path: '/service',name: 'service',component: Service},
  { path: '/patient',name: 'patient',component: Patient},
  { path: '/AppointmentDetails/:id',name: 'AppointmentDetails',component: AppointmentDetails},
  { path: '/utilisateur',name: 'utilisateur',component: Utilisateur},
  { path: '/tab',name: 'appoint',component: appoint,meta:{auth:true}},
  { path: '/tab1',name: 'appoint1',component: appoint1, meta:{auth:true}},
  { path: '/tab2',name: 'appoint2',component: appoint2, meta:{auth:true}},
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next)=>{
  const auth=to.matched.some(record=>record.meta.auth)
  if(auth && !store.state.user){
    next('/login')
  // }else if(!requireAuth && store.state.user.user){
  //   next({
  //     path:'/appointment',
  //     query:{redirect:to.fullPath}
  //   })
  }else{
    next()
  }
})
export default router
