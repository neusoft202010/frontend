<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">修改部门</h3>
	
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
				    <label for="exampleInputPassword1">费用</label>
				    <input type="text" class="form-control" v-model="tariff.cost">
				  </div>
				 
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/tariff/list" class="btn btn-default">取消</router-link>
				 
				  
				</form>
	        </div>
	      </div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"TariffModify",
		data(){
			return {
				tariff:{
					"cost":""
				}
				
			};
		},
		created(){
			let tariffNum = this.$route.params.num;
			this.getTariff(tariffNum);
		},
		methods:{
			getTariff(num){
				axios.get("http://localhost:8800/tariff/view?num=" + num).then(result=>{
					this.tariff= result.data.result;
				});
			},
			modify(){
				axios.post("http://localhost:8800/tariff/modify", this.tariff).then(result=>{
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
