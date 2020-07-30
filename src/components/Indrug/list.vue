<template>
	<div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">进药单列表</h3>
	
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
				      <th scope="col">ID</th>
				      <th scope="col">drugid</th>
				      <th scope="col">date</th>
					  <th scope="col">quantity</th>
				     
				    </tr>
				  </thead>
				  <tbody>
					<tr v-for="im in indrugList" v-bind:key="im.id">
					  <td>{{im.drugid}}</td>
					  <td>{{im.date}}</td>
					  <td>{{im.quantity}}</td>
					  
					  <td><router-link v-bind:to="'/indrug/modify/' + dm.drugid" class="btn btn-primary">修改</router-link>
					    		<a href="#" v-on:click="deleteIndrug(dm.drugid)" class="btn btn-danger">删除</a>
					    		<router-link to="/indrug/view" class="btn btn-warning">查看</router-link>
					  </td>
					</tr>
					<td></td>
					<td></td>
					<td></td>
				
					<router-link to="/indrug/add" class="btn btn-success">增加进药记录</router-link>
			
				  </tbody>
				</table>
	        </div>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"IndrugList",
		data(){
			return {
				indrugList:[]
				
				
			};
		},
		created() {
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8800/indrug/getall",{
					
				}).then(result=>{
					
					this.indrugList = result.data.list;
				});
			},
			deletePatient(num){
				let checkresult = confirm("您确定要删除吗");
				if(checkresult){
					axios.post("http://localhost:8800/indrug/delete", {"id":num}).then(result=>{
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
