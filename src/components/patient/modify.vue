<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改部门</h3>
	
	          <div class="box-tools pull-right">
	            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                    title="Collapse">
	              <i class="fa fa-minus"></i></button>
	            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	              <i class="fa fa-times"></i></button>
	          </div>
	        </div>
	        <div class="box-body">
	            <form method="post" v-on:submit.prevent="modify()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">姓名</label>
				    <input type="text" class="form-control" v-model="patient.name">
				    <small id="emailHelp" class="form-text text-muted"></small>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">电话</label>
				    <input type="text" class="form-control" v-model="patient.phone">
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
		name:"PatientModify",
		data(){
			return {
				patient:{
					"name":"",
					"phone":""
				}
				
			};
		},
		created(){
			let patientNum = this.$route.params.num;
			this.getPatient(patientNum);
		},
		methods:{
			getPatient(num){
				axios.get("http://localhost:8800/patient/view?num=" + num).then(result=>{
					this.patient = result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8800/patient/modify", this.patient).then(result=>{
					if(result.data.message=="success"){
						alert("信息修改成功");
					}
				});
			}
		}
	}
</script>

<style>
</style>
