<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改药物</h3>
	
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
				    <label for="exampleInputEmail1">DRUGID</label>
				    <input type="text" class="form-control" v-model="drug.drugid">
				    <small id="emailHelp" class="form-text text-muted"></small>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">cost</label>
				    <input type="text" class="form-control" v-model="drug.cost">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">name</label>
				    <input type="text" class="form-control" v-model="drug.name">
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
		name:"DrugModify",
		data(){
			return {
				drug:{
					"drugid":"",
					"cost":"",
					"name":""
				}
				
			};
		},
		created(){
			let drugNum = this.$route.params.num;
			this.getDrug(drugNum);
		},
		methods:{
			getDrug(num){
				axios.get("http://localhost:8065/drug/view?num=" + num).then(result=>{
					this.drug = result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8065/drug/modify", this.drug).then(result=>{
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
