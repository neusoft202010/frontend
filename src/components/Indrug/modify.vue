<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改进药记录</h3>
	
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
				    <label for="exampleInputEmail1">ID</label>
				    <input type="text" class="form-control" v-model="indrug.id">
				    <small id="emailHelp" class="form-text text-muted"></small>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">drugid</label>
				    <input type="text" class="form-control" v-model="indrug.drugid">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">date</label>
				    <input type="text" class="form-control" v-model="indrug.date">
				  </div>
				  
				  <div class="form-group">
				    <label for="exampleInputPassword1">quantity</label>
				    <input type="text" class="form-control" v-model="indrug.quantity">
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
		name:"IndrugModify",
		data(){
			return {
				drug:{
					"id":"",
					"drugid":"",
					"date":"",
					"quantity":""
				}
				
			};
		},
		created(){
			let indrugNum = this.$route.params.num;
			this.getIndrug(indrugNum);
		},
		methods:{
			getIndrug(num){
				axios.get("http://localhost:8800/indrug/view?num=" + num).then(result=>{
					this.indrug = result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8800/indrug/modify", this.indrug).then(result=>{
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
