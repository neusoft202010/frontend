<template>
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改医生</h3>
  </div>
<div class="box-body">
  <form method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputPassword1">科室编号</label>
		<input type="text" class="form-control" v-model="doctor.cid">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">姓名</label>
	  		<input type="text" class="form-control" v-model="doctor.name">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">性别</label>
	  		<input type="text" class="form-control" v-model="doctor.sex">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">年龄</label>
	  		<input type="text" class="form-control" v-model="doctor.age">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">电话</label>
	  		<input type="text" class="form-control" v-model="doctor.phone">
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	  <router-link to="/doctor/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
</template>

<script>
	//import axios from "axios";
	export default{
		name:"DoctorModify",
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
			},
			modify(){
				this.axiosJSON.post("/doctor/modify", this.doctor).then(result=>{
					alert(result.data.message);
					if(result.data.status=="OK"){
						this.$router.push("/doctor/list");
					}
				});
			}
		}
	}
</script>

<style>
</style>
