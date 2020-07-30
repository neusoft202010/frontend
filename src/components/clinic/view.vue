<template>
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看科室</h3>
  </div>
<div class="box-body">
  <form method="post" >
	  <div class="form-group">
		<label for="exampleInputPassword1">编号：  </label>
		<span>{{clinic.cid}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">名称：  </label>
		<span>{{clinic.name}}</span>
	  </div>
	  <router-link to="/clinic/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
</template>

<script>
	//import axios from "axios";
	export default{
		name:"ClinicView",
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
			}
		}
	}
</script>

<style>
</style>
