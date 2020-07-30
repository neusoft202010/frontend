<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加部门</h3>
	
	          <div class="box-tools pull-right">
	            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                    title="Collapse">
	              <i class="fa fa-minus"></i></button>
	            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	              <i class="fa fa-times"></i></button>
	          </div>
	        </div>
	        <div class="box-body">
				<form  method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">病房ID</label>
				    <input type="text" class="form-control" v-model="patient.sid" required>
				    
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">姓名</label>
				    <input type="text" class="form-control" v-model="patient.name" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">性别</label>
				    <input type="text" class="form-control" v-model="patient.sex" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">年龄</label>
				    <input type="text" class="form-control" v-model="patient.age" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">电话</label>
				    <input type="text" class="form-control" v-model="patient.phone" required>
				  </div>
				 
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/patient/list" class="btn btn-default">取消</router-link>
				</form>
	        </div>
	      </div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"PatientAdd",
		data(){
			return {
				patient:{
					"sid":"",
					"name":"",
					"sex":"",
					"age":"",
					"phone":""
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8800/patient/add", this.patient).then(result=>{
					if(result.data.message=="success"){
						alert("信息添加成功");
					}
				});
			}
		}
	}
</script>

<style>
</style>
