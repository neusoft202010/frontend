<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改病房信息</h3>
	
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
				    <label for="exampleInputPassword1">可容纳人数</label>
				    <input type="text" class="form-control" v-model="sickroom.max">
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
		name:"SickroomModify",
		data(){
			return {
				sickroom:{
					"max":""
				}
				
			};
		},
		created(){
			let sickroomNum = this.$route.params.num;
			this.getSickroom(sickroomNum);
		},
		methods:{
			getSickroom(num){
				axios.get("http://localhost:8800/sickroom/view?num=" + num).then(result=>{
					this.sickroom = result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8800/sickroom/modify", this.sickroom).then(result=>{
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
