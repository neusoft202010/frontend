<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">查看信息</h3>
	
	          <div class="box-tools pull-right">
	            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                    title="Collapse">
	              <i class="fa fa-minus"></i></button>
	            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	              <i class="fa fa-times"></i></button>
	          </div>
	        </div>
	        <div class="box-body">
	            <form method="post">
				  <div class="form-group">
				    <label for="exampleInputEmail1">病人ID</label>
					<span>	{{patient.pid}}</span>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">病房ID</label>
				    <span>	{{patient.sid}}</span>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">姓名</label>
				    <span>	{{patient.name}}</span>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">性别</label>
				    <span>	{{patient.sex}}</span>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">年龄</label>
				    <span>	{{patient.age}}</span>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">电话</label>
				    <span>	{{patient.phone}}</span>
				  </div>
				 
				  <router-link to="/patient/list" class="btn btn-default">返回</router-link>
				  <div class="form-group">
				    <input type="hidden" class="form-control" name="num" value="${dm.num }">
				  </div>
				  
				</form>
	        </div>
	      </div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"PatientView",
		data(){
			return {
				patient:{
					"pid":"",
					"sid":"",
					"name":"",
					"sex":"",
					"age":"",
					"phone":""
				}
			};
		},
		created() {
			let patientNum = this.$route.params.num;
			console.log(patientNum);
			this.getPatient(patientNum);
		},
		methods:{
			getPatient(num){
				axios.get("http://localhost:8083/patient/view?num=" + num).then(result=>{
					this.patient = result.data.result;
				});
			}
		}
		
	}
</script>

<style>
</style>
