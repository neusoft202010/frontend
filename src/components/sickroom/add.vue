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
				    <input type="text" class="form-control" v-model="sickroom.sid" required>
				    
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">可容纳人数</label>
				    <input type="text" class="form-control" v-model="sickroom.max" required>
				  </div>
				 
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/sickroom/list" class="btn btn-default">取消</router-link>
				</form>
	        </div>
	      </div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"SickroomAdd",
		data(){
			return {
				sickroom:{
					"sid":"",
					"max":""
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8800/sickroom/add", this.sickroom).then(result=>{
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
