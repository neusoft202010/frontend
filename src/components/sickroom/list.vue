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
				      <th scope="col">病房ID</th>
				      <th scope="col">最大容纳人数</th>
				      <th scope="col">操作</th>
				    </tr>
				  </thead>
				  <tbody>
					<tr v-for="sm in sickroomList" v-bind:key="sm.sid">
					  <td>{{sm.sid}}</td>
					  <td>{{sm.max}}</td>
					
					  <td><router-link v-bind:to="'/sickroom/modify/'+ sm.sid" class="btn btn-primary">修改</router-link>
					    		<a href="#" v-on:click="deleteSickroom(sm.sid)" class="btn btn-danger">删除</a> 
					    		<router-link v-bind:to="'/sickroom/view/' + sm.sid" class="btn btn-warning">查看</router-link>
					  </td>
					</tr>
					
					<td></td>
					<router-link to="/sickroom/add" class="btn btn-success">增加病房</router-link>
					    
				  	  
				  </tbody>
				</table>
	        </div>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"SickroomList",
		data(){
			return {
				sickroomList:[]
				
				
			};
		},
		created() {
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8800/sickroom/getall",{
					
				}).then(result=>{
					
					this.sickroomList = result.data.list;
				});
			},
			deleteSickroom(num){
				let checkresult = confirm("您确定要删除吗");
				if(checkresult){
					axios.post("http://localhost:8800/sickroom/delete", {"sid":num}).then(result=>{
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
