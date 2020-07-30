<template>
	<!-- Default box -->
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
				  <c:forEach items="" var="dm">
				    <tr>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td><a href="tomodify.mvc" class="btn btn-default">修改</a>
				          <a href="todelete.mvc" class="btn btn-danger">删除</a> 
				          <a href="toview.mvc" class="btn btn-default">查看</a>  </td>
				    </tr>
				  </c:forEach> 
				  </tbody>
				</table>
	        </div>
	        <!-- /.box-body -->
	        <a href="toadd.mvc" class="btn btn-default">增加医生</a>
	      </div>
</template>

<script>
	export default{
		name:"DoctorMain",
		data(){
			return {};
		}
	}
</script>

<style>
</style>
