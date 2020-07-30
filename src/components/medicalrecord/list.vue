<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">病例列表</h3>
	
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
				      <th scope="col">PID</th>
				      <th scope="col">DID</th>
				      <th scope="col">DRUGID</th>
				     
				    </tr>
				  </thead>
				  <tbody>
					<tr v-for="mm in medicalrecordList" v-bind:key="mm.pid">
					  <td>{{mm.pid}}</td>
					  <td>{{mm.did}}</td>
					  <td>{{mm.drugid}}</td>
					  
					  <td><router-link v-bind:to="'/medicalrecord/modify/' + mm.pid" class="btn btn-primary">修改</router-link>
					    		<a href="#" v-on:click="deleteDrug(mm.pid)" class="btn btn-danger">删除</a>
					    		<router-link to="/drug/view" class="btn btn-warning">查看</router-link>
					  </td>
					</tr>
					<td></td>
					<td></td>
					<td></td>
				
					<router-link to="/medicalrecord/add" class="btn btn-success">增加病例</router-link>
			
				  </tbody>
				</table>
	        </div>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"medicalrecordList",
		data(){
			return {
				medicalrecordList:[]
				
				
			};
		},
		created() {
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8065/medicalrecord/getall",{
					
				}).then(result=>{
					
					this.medicalrecordList = result.data.list;
				});
			},
			deletePatient(num){
				let checkresult = confirm("您确定要删除吗");
				if(checkresult){
					axios.post("http://localhost:8065/medicalrecord/delete", {"pid":num}).then(result=>{
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
