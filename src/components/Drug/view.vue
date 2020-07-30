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
	            <form action="delete.do" method="post">
				  <div class="form-group">
				    <label for="exampleInputEmail1">drugid</label>
				    <span></span>
				    <small id="emailHelp" class="form-text text-muted"></small>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">cost</label>
				    <span></span>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">name</label>
				    <span></span>
				  </div>
				 
				  <router-link to="/drug/list" class="btn btn-default">取消</router-link>
				  <div class="form-group">
				    <input type="hidden" class="form-control" name="num" value="${dm.num }">
				  </div>
				  
				</form>
	        </div>
	      </div>
</template>

<script>
	export default{
		name:"DrugView",
		data(){
			return {};
		}
	}
</script>

<style>
</style>
