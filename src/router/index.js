import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeMain from "./../components/home/main.vue";
import DoctorMain from "./../components/doctor/main.vue";
import ClinicMain from "./../components/clinic/main.vue";
import AdminMain from "./../components/admin/main.vue";

Vue.use(VueRouter)

  const routes = [
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/doctor",name:"doctormain",component:DoctorMain},
	{path:"/clinic",name:"clinicmain",component:ClinicMain},
	{path:"/admin",name:"adminmain",component:AdminMain}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default router
