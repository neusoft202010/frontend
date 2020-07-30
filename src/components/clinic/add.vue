<template>
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加科室</h3>
  </div>
<div class="box-body">
  <form method="post" v-on:submit.prevent="add()">
	  <div class="form-group">
	  		<label for="exampleInputPassword1">名称</label>
	  		<input type="text" class="form-control" v-model="clinic.name" required>
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	  <router-link to="/clinic/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
</template>

<script>
	//import axios from "axios";
	export default{
		name:"ClinicAdd",
		data(){
			return {
				clinic:{
					name:"",
				}
			};
		},
		created(){
			
		},
		methods:{
			add(){
				this.axiosJSON.post("/clinic/add", this.clinic).then(result=>{
					alert(result.data.message);
					if(result.data.status=="OK"){
						this.$router.push("/clinic/list");
					}
				});
			}
		}
	}
</script>

<style>
</style>
