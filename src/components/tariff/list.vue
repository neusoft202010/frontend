<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">部门列表</h3>
	
	          <div class="box-tools pull-right">
	            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                    title="Collapse">
	              <i class="fa fa-minus"></i></button>
	            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	              <i class="fa fa-times"></i></button>
	          </div>
	        </div> 
	        <div class="box-body">
				<table class="table">
				  <thead class="thead-dark">
				    <tr>
					  <th scope="col">缴费单ID</th>
				      <th scope="col">病人ID</th>
				      <th scope="col">病人姓名</th>
				      <th scope="col">费用</th>
				      <th scope="col">操作</th>
				    </tr>
				  </thead>
				  <tbody>
					  
					    <tr v-for="tm in tariffList" v-bind:key="tm.tid">		     
					      <td>{{tm.tid}}</td>
					      <td>{{tm.pid}}</td>
					      <td>{{tm.name}}</td>
						  <td>{{tm.cost}}</td>
					      <td><router-link v-bind:to="'/tariff/modify/' + tm.tid" class="btn btn-primary">修改</router-link>  
					      		<a href="#" v-on:click="deleteTariff(tm.tid)" class="btn btn-danger">删除</a> 
					      		<router-link v-bind:to="'/tariff/view/' + tm.tid" class="btn btn-warning">查看</router-link>
					      </td>
					    </tr>
						<td></td>
						<td></td>
						<router-link to="/tariff/add" class="btn btn-success">增加缴费信息</router-link>
				  	  
				  </tbody>
				</table>
	        </div>
	      </div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"TariffList",
		data(){
			return {
				tariffList:[]
				
				
			};
		},
		created() {
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8800/tariff/getall",{
					
				}).then(result=>{
					
					this.tariffList = result.data.list;
				});
			},
			deleteTariff(num){
				let checkresult = confirm("您确定要删除吗");
				if(checkresult){
					axios.post("http://localhost:8083/tariff/delete", {"tid":num}).then(result=>{
						alert(result.data.message);
						if(result.data.message=="success"){
							this.getList();
						}
					});
				}
				
			}
		}
	}
</script>

<style>
</style>
