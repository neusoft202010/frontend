<template>
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加医生</h3>
  </div>
<div class="box-body">
  <form method="post" v-on:submit.prevent="add()">
	  <div class="form-group">
		<label for="exampleInputPassword1">科室编号</label>
		<input type="text" class="form-control" v-model="doctor.cid" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">姓名</label>
	  		<input type="text" class="form-control" v-model="doctor.name" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">性别</label>
	  		<input type="text" class="form-control" v-model="doctor.sex" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">年龄</label>
	  		<input type="text" class="form-control" v-model="doctor.age" required>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">电话</label>
	  		<input type="text" class="form-control" v-model="doctor.phone" required>
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
		name:"DoctorAdd",
		data(){
			return {
				doctor:{
					cid:"",
					name:"",
					sex:"",
					age:"",
					phone:""
				}
			};
		},
		created(){
			
		},
		methods:{
			add(){
				this.axiosJSON.post("/doctor/add", this.doctor).then(result=>{
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
