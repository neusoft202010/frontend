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
				    <label for="exampleInputEmail1">缴费单ID</label>
				    <span>	{{tariff.tid}}</span>	
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">病人ID</label>
				    <span>	{{tariff.pid}}</span>	
				  </div>
				  <div class="form-group">
				    <label for="exampleInputEmail1">姓名</label>
				    <span>	{{tariff.name}}</span>			
				  </div>
				  <div class="form-group">
				    <label for="exampleInputEmail1">费用</label>
				    <span>	{{tariff.cost}}</span>		
				  </div>
				 
				  <router-link to="/tariff/list" class="btn btn-default">返回</router-link>
				  
				  
				</form>
	        </div>
	      </div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"TariffView",
		data(){
			return {
				tariff:{
					
					"tid":"",
					"pid":"",
					"name":"",
					"cost":""
				}
			};
		},
		created() {
			let tariffNum = this.$route.params.num;
			console.log(tariffNum);
			this.getTariff(tariffNum);
		},
		methods:{
			getTariff(num){
				axios.get("http://localhost:8800/tariff/view?num=" + num).then(result=>{
					this.tariff = result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
