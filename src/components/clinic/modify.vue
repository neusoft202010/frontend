<template>
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改科室</h3>
  </div>
<div class="box-body">
  <form method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
			<label for="exampleInputPassword1">名称</label>
			<input type="text" class="form-control" v-model="clinic.name">
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
		name:"ClinicModify",
		data(){
			return {
				clinic:{
					cid:"",
					name:"",
				}
			};
		},
		created(){
			let clinicCid=this.$route.params.cid;
			this.getClinic(clinicCid);
		},
		methods:{
			getClinic(cid){
				this.axiosJSON.get("/clinic/get?cid="+cid).then(result=>{
					this.clinic=result.data.result;
				});
			},
			modify(){
				this.axiosJSON.post("/clinic/modify", this.clinic).then(result=>{
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
