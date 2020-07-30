import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminLogin from "./../components/admin/login.vue"
import HomeMain from "./../components/home/main.vue";
import DoctorMain from "./../components/doctor/main.vue";
import DoctorList from "./../components/doctor/list.vue";
import DoctorAdd from "./../components/doctor/add.vue";
import DoctorModify from "./../components/doctor/modify.vue";
import DoctorView from "./../components/doctor/view.vue";
import ClinicMain from "./../components/clinic/main.vue";
import ClinicList from "./../components/clinic/list.vue";
import ClinicAdd from "./../components/clinic/add.vue";
import ClinicModify from "./../components/clinic/modify.vue";
import ClinicView from "./../components/clinic/view.vue";

Vue.use(VueRouter)

  const routes = [
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/doctor",name:"doctormain",component:DoctorMain,children:[
		{path:"list",name:"doctorlist",component:DoctorList},
		{path:"add",name:"doctoradd",component:DoctorAdd},
		{path:"modify/:did",name:"doctormidify",component:DoctorModify},
		{path:"view/:did",name:"doctorview",component:DoctorView},
		{path:"",redirect:"list"}
	]},
	{path:"/clinic",name:"clinicmain",component:ClinicMain,children:[
		{path:"list",name:"cliniclist",component:ClinicList},
		{path:"add",name:"clinicadd",component:ClinicAdd},
		{path:"modify/:cid",name:"clinicmidify",component:ClinicModify},
		{path:"view/:cid",name:"clinicview",component:ClinicView},
		{path:"",redirect:"list"}
	]},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default router
