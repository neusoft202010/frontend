import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store/index'

import AdminLogin from "./../components/admin/login.vue"
import HomeMain from "./../components/home/main.vue"

import ClinicMain from "./../components/clinic/main.vue";
import ClinicList from "./../components/clinic/list.vue";
import ClinicAdd from "./../components/clinic/add.vue";
import ClinicModify from "./../components/clinic/modify.vue";
import ClinicView from "./../components/clinic/view.vue";

import DoctorMain from "./../components/doctor/main.vue";
import DoctorList from "./../components/doctor/list.vue";
import DoctorAdd from "./../components/doctor/add.vue";
import DoctorModify from "./../components/doctor/modify.vue";
import DoctorView from "./../components/doctor/view.vue";

import DrugMain from "./../components/drug/main.vue"
import DrugList from "./../components/drug/list.vue"
import DrugAdd from "./../components/drug/add.vue"
import DrugModify from "./../components/drug/modify.vue"
import DrugView from "./../components/drug/view.vue"

import IndrugMain from "./../components/indrug/main.vue"
import IndrugList from "./../components/indrug/list.vue"
import IndrugAdd from "./../components/indrug/add.vue"
import IndrugModify from "./../components/indrug/modify.vue"
import IndrugView from "./../components/indrug/view.vue"

import MedicalrecordMain from "./../components/medicalrecord/main.vue"
import MedicalrecordList from "./../components/medicalrecord/list.vue"
import MedicalrecordAdd from "./../components/medicalrecord/add.vue"
import MedicalrecordModify from "./../components/medicalrecord/modify.vue"
import MedicalrecordView from "./../components/medicalrecord/view.vue"

import PatientMain from "./../components/patient/main.vue"
import PatientList from "./../components/patient/list.vue"
import PatientAdd from "./../components/patient/add.vue"
import PatientModify from "./../components/patient/modify.vue"
import PatientView from "./../components/patient/view.vue"

import SickroomMain from "./../components/sickroom/main.vue"
import SickroomList from "./../components/sickroom/list.vue"
import SickroomAdd from "./../components/sickroom/add.vue"
import SickroomModify from "./../components/sickroom/modify.vue"
import SickroomView from "./../components/sickroom/view.vue"

import TariffMain from "./../components/tariff/main.vue"
import TariffList from "./../components/tariff/list.vue"
import TariffAdd from "./../components/tariff/add.vue"
import TariffModify from "./../components/tariff/modify.vue"
import TariffView from "./../components/tariff/view.vue"

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
	{path:"/patient", name:"patientmain", component:PatientMain, children:[
		{path:"list", name:"patientlist", component:PatientList},
		{path:"add", name:"patientadd", component:PatientAdd},
		{path:"modify/:num", name:"patientmodify", component:PatientModify},
		{path:"view/:num", name:"patientview", component:PatientView},
		{path:"", redirect:"list"}
	]},
	{path:"/sickroom", name:"sickroommain", component:SickroomMain, children:[
		{path:"list", name:"sickroomlist", component:SickroomList},
		{path:"add", name:"sickroomadd", component:SickroomAdd},
		{path:"modify/:num", name:"sickroommodify", component:SickroomModify},
		{path:"view/:num", name:"sickroomview", component:SickroomView},
		{path:"", redirect:"list"}
	]},
	{path:"/tariff", name:"tariffmain", component:TariffMain, children:[
		{path:"list", name:"tarifflist", component:TariffList},
		{path:"add", name:"tariffadd", component:TariffAdd},
		{path:"modify/:num", name:"tariffmodify", component:TariffModify},
		{path:"view/:num", name:"tariffview", component:TariffView},
		{path:"", redirect:"list"}
	]},
	{path:"/drug", name:"drugmain", component:DrugMain, children:[
		{path:"list", name:"druglist", component:DrugList},
		{path:"add", name:"drugadd", component:DrugAdd},
		{path:"modify/:num", name:"drugmodify", component:DrugModify},
		{path:"view/:num", name:"drugview", component:DrugView},
		{path:"", redirect:"list"}
	]},
	{path:"/indrug", name:"indrugmain", component:IndrugMain, children:[
		{path:"list", name:"indruglist", component:IndrugList},
		{path:"add", name:"indrugadd", component:IndrugAdd},
		{path:"modify/:num", name:"indrugmodify", component:IndrugModify},
		{path:"view/:num", name:"indrugview", component:IndrugView},
		{path:"", redirect:"list"}
	]},
	{path:"/medicalrecord", name:"medicalrecordmain", component:MedicalrecordMain, children:[
		{path:"list", name:"medicalrecordlist", component:MedicalrecordList},
		{path:"add", name:"medicalrecordadd", component:MedicalrecordAdd},
		{path:"modify/:num", name:"medicalrecordmodify", component:MedicalrecordModify},
		{path:"view/:num", name:"medicalrecordview", component:MedicalrecordView},
		{path:"", redirect:"list"}
	]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
	if(to.path=="/login"){
		next();
	}
	else{
		if(store.getters.loginuser!=null){
			next();
		}
		else{
			next("/login");
		}
	}
})

export default router
