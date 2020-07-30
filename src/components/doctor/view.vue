<template>
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看医生</h3>
  </div>
<div class="box-body">
  <form method="post" >
	  <div class="form-group">
		<label for="exampleInputEmail1">医生编号：  </label>
		<span>{{doctor.did}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">科室编号：  </label>
		<span>{{doctor.cid}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">姓名：  </label>
		<span>{{doctor.name}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">性别：  </label>
		<span>{{doctor.sex}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">年龄：  </label>
		<span>{{doctor.age}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">电话：  </label>
		<span>{{doctor.phone}}</span>
	  </div>
	  <router-link to="/doctor/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
</template>

<script>
	//import axios from "axios";
	export default{
		name:"DoctorView",
		data(){
			return {
				doctor:{
					did:"",
					cid:"",
					name:"",
					sex:"",
					age:"",
					phone:""
				}
			};
		},
		created(){
			let doctorDid=this.$route.params.did;
			this.getDoctor(doctorDid);
		},
		methods:{
			getDoctor(did){
				this.axiosJSON.get("/doctor/get?did="+did).then(result=>{
					this.doctor=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
