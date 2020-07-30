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
				    <label for="exampleInputEmail1">病房ID</label>
				    <span>	{{sickroom.sid}}</span>
				    <small id="emailHelp" class="form-text text-muted"></small>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">可容纳人数</label>
				    <span>	{{sickroom.max}}</span>
				  </div>
				 
				  <router-link to="/sickroom/list" class="btn btn-default">取消</router-link>
				  
				  
				</form>
	        </div>
	      </div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"SickroomView",
		data(){
			return {
				sickroom:{
					
					"sid":"",
					"max":""
				}
			};
		},
		created() {
			let sickroomNum = this.$route.params.num;
			console.log(sickroomNum);
			this.getSickroom(sickroomNum);
		},
		methods:{
			getSickroom(num){
				axios.get("http://localhost:8083/sickroom/view?num=" + num).then(result=>{
					this.sickroom = result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
