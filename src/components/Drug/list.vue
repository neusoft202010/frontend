<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">药物列表</h3>
	
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
				      <th scope="col">DRUGID</th>
				      <th scope="col">cost</th>
				      <th scope="col">name</th>
				     
				    </tr>
				  </thead>
				  <tbody>
					<tr v-for="dm in drugList" v-bind:key="dm.drugid">
					  <td>{{dm.drugid}}</td>
					  <td>{{dm.cost}}</td>
					  <td>{{dm.name}}</td>
					  
					  <td><router-link v-bind:to="'/drug/modify/' + dm.drugid" class="btn btn-primary">修改</router-link>
					    		<a href="#" v-on:click="deleteDrug(dm.drugid)" class="btn btn-danger">删除</a>
					    		<router-link to="/drug/view" class="btn btn-warning">查看</router-link>
					  </td>
					</tr>
					<td></td>
					<td></td>
					<td></td>
				
					<router-link to="/drug/add" class="btn btn-success">增加药物</router-link>
			
				  </tbody>
				</table>
	        </div>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"DrugList",
		data(){
			return {
				drugList:[]
				
				
			};
		},
		created() {
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8800/drug/getall",{
					
				}).then(result=>{
					
					this.drugList = result.data.list;
				});
			},
			deletePatient(num){
				let checkresult = confirm("您确定要删除吗");
				if(checkresult){
					axios.post("http://localhost:8800/drug/delete", {"drugid":num}).then(result=>{
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
