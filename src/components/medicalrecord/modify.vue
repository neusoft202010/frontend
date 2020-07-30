<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改病例</h3>
	
	          <div class="box-tools pull-right">
	            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                    title="Collapse">
	              <i class="fa fa-minus"></i></button>
	            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	              <i class="fa fa-times"></i></button>
	          </div>
	        </div>
	        <div class="box-body">
	            <form method="post" v-on:submit="modify()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">PID</label>
				    <input type="text" class="form-control" v-model="medicalrecord.pid">
				    <small id="emailHelp" class="form-text text-muted"></small>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">did</label>
				    <input type="text" class="form-control" v-model="medicalrecord.did">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">drugid</label>
				    <input type="text" class="form-control" v-model="medicalrecord.drugid">
				  </div>
				 
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/drug/list" class="btn btn-default">取消</router-link>
				  
				  
				</form>
	        </div>
	      </div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"MedicalrecordModify",
		data(){
			return {
				medicalrecord:{
					"pid":"",
					"did":"",
					"drugid":""
				}
				
			};
		},
		created(){
			let medicalrecordNum = this.$route.params.num;
			this.getMedicalrecord(medicalrecordNum);
		},
		methods:{
			getDrug(num){
				axios.get("http://localhost:8800/medicalrecord/view?num=" + num).then(result=>{
					this.medicalrecord = result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8800/medicalrecord/modify", this.medicalrecord).then(result=>{
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
