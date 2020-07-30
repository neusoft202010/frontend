<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加药品</h3>
	
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
				    <label for="exampleInputEmail1">DrugID</label>
				    <input type="text" class="form-control" v-model="drug.drugid" required>
				    
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">价格</label>
				    <input type="text" class="form-control" v-model="drug.cost" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">药品名</label>
				    <input type="text" class="form-control" v-model="drug.name" required>
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
		name:"DrugAdd",
		data(){
			return {
				drug:{
					"drugid":"",
					"cost":"",
					"name":""
					
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8800/drug/add", this.drug).then(result=>{
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
