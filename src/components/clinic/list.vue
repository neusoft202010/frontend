<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">科室管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">编号</th>
				  <th scope="col">名称</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="cm in clinicList" v-bind:key="cm.cid">
				  <td>{{cm.cid}}</td>
				  <td>{{cm.name}}</td>
				  <td><router-link v-bind:to="'/clinic/modify/'+cm.cid" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteClinic(cm.cid)" class="btn btn-danger">删除</a> 
					  <router-link v-bind:to="'/clinic/view/'+cm.cid" class="btn btn-default">查看</router-link>
				  </td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/clinic/add" class="btn btn-default">增加科室</router-link>
	</div>
</template>

<script>
	//import axios from "axios";
	export default{
		name:"ClinicList",
		data(){
			return {
				clinicList:[],
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
				this.axiosJSON.get("/clinic/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.clinicList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				})
			},
			deleteClinic(cid){
				let checkresult=confirm("确认删除科室吗？");
				if(checkresult){
					this.axiosJSON.post("/clinic/delete",{cid:cid}).then(result=>{
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
