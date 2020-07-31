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
				      <th scope="col">病人ID</th>
				      <th scope="col">病房ID</th>
				      <th scope="col">姓名</th>
				      <th scope="col">性别</th>
					  <th scope="col">年龄</th>
					  <th scope="col">电话</th>
					  <th scope="col">操作</th>
				    </tr>
				  </thead>
				  <tbody>
					<tr v-for="pm in patientList" v-bind:key="pm.pid">
					  <td>{{pm.pid}}</td>
					  <td>{{pm.sid}}</td>
					  <td>{{pm.name}}</td>
					  <td>{{pm.sex}}</td>
					  <td>{{pm.age}}</td>
					  <td>{{pm.phone}}</td>
					  <td><router-link v-bind:to="'/patient/modify/' + pm.pid" class="btn btn-primary">修改</router-link>
					    		<a href="#" v-on:click="deletePatient(pm.pid)" class="btn btn-danger">删除</a>
					    		<router-link v-bind:to="'/patient/view/' + pm.pid" class="btn btn-warning">查看</router-link>
					  </td>
					</tr>
					<td></td>
					<td></td>
					<td></td>
				
					<router-link to="/patient/add" class="btn btn-success">增加病人</router-link>
			
				  </tbody>
				</table>
	        </div>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"PatientList",
		data(){
			return {
				patientList:[]
				
				
			};
		},
		created() {
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8800/patient/getall",{
					
				}).then(result=>{
					
					this.patientList = result.data.list;
				});
			},
			deletePatient(num){
				let checkresult = confirm("您确定要删除吗");
				if(checkresult){
					axios.post("http://localhost:8800/patient/delete", {"pid":num}).then(result=>{
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
