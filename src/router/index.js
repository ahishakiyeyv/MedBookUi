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

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/login', name: 'login', component: login},
  { path: '/signin', name: 'signin', component: signin },
  { path: '/test',name: 'test',component: TestView},
  { path: '/appointment',name: 'appointment',component: AppointmentView},
  { path: '/admin',name: 'admin',component: Admin},
  { path: '/signinAdmin',name: 'signinAdmin',component: signinadmin},
  { path: '/dashboard',name: 'dashboard',component: dashboard},
  { path: '/Adminappointment',name: 'Adminappointment',component: Adminappointment},
  { path: '/TestAdmin',name: 'TestAdmin',component: Test},
  { path: '/service',name: 'service',component: Service},
  { path: '/patient',name: 'patient',component: Patient},
  { path: '/AppointmentDetails/:id',name: 'AppointmentDetails',component: AppointmentDetails},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
