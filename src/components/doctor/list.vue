<template>
<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">医生管理</h3>
	</div>
	<div class="box-body">
		<table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">编号</th>
			  <th scope="col">科室</th>
			  <th scope="col">姓名</th>
			  <th scope="col">性别</th>
			  <th scope="col">年龄</th>
			  <th scope="col">电话</th>
			  <th scope="col">操作</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="dm in doctorList" v-bind:key="dm.did">
			  <td>{{dm.did}}</td>
			  <td>{{dm.cid}}</td>
			  <td>{{dm.name}}</td>
			  <td>{{dm.sex}}</td>
			  <td>{{dm.age}}</td>
			  <td>{{dm.phone}}</td>
			  <td><router-link v-bind:to="'/doctor/modify/'+dm.did" class="btn btn-default">修改</router-link>
				  <a href="#" v-on:click="deleteDoctor(dm.did)" class="btn btn-danger">删除</a> 
				  <router-link v-bind:to="'/doctor/view/'+dm.did" class="btn btn-default">查看</router-link>
			  </td>
			</tr>
		  </tbody>
		</table>
	</div>
	<!-- /.box-body -->
	<router-link to="/doctor/add" class="btn btn-default">增加医生</router-link>
</div>
</template>

<script>
	//import axios from "axios";
	export default{
		name:"DoctorList",
		data(){
			return {
				doctorList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created(){
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJSON.get("/doctor/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.doctorList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				})
			},
			deleteDoctor(did){
				let checkresult=confirm("确认删除医生吗？");
				if(checkresult){
					this.axiosJSON.post("/doctor/delete",{did:did}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
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
