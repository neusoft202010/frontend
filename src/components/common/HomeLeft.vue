<template>
	<div>
		<!-- Left side column. contains the sidebar -->
		<aside class="main-sidebar">
		  <!-- sidebar: style can be found in sidebar.less -->
		  <section class="sidebar">
		    <!-- Sidebar user panel -->
		    <div class="user-panel">
		      <div class="pull-left image">
		        <img src="./assets/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
		      </div>
		      <div class="pull-left info">
		        <p>管理员</p>
		        <a href="#"><i class="fa fa-circle text-success"></i>注销</a>
		      </div>
		    </div>
		    <!-- sidebar menu: : style can be found in sidebar.less -->
		    <ul class="sidebar-menu" data-widget="tree">
		      <li class="header">系统功能主菜单</li>
		      <li class="treeview">
		        <a href="#">
		          <i class="fa fa-dashboard"></i> <span>科室管理</span>
		          <span class="pull-right-container">
		            <i class="fa fa-angle-left pull-right"></i>
		          </span>
		        </a>
		        <ul class="treeview-menu">
		          <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
		          <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
		        </ul>
		      </li>
			  <li class="treeview">
			    <a href="#">
			      <i class="fa fa-dashboard"></i> <span>病人管理</span>
			      <span class="pull-right-container">
			        <i class="fa fa-angle-left pull-right"></i>
			      </span>
			    </a>
			    <ul class="treeview-menu">
			      <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
			      <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
			    </ul>
			  </li>
			  <li class="treeview">
			    <a href="#">
			      <i class="fa fa-dashboard"></i> <span>药品管理</span>
			      <span class="pull-right-container">
			        <i class="fa fa-angle-left pull-right"></i>
			      </span>
			    </a>
			    <ul class="treeview-menu">
			      <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
			      <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
			    </ul>
			  </li>
		    </ul>
		  </section>
		  <!-- /.sidebar -->
		</aside>
	</div>
</template>

<script>
	export default{
		name:"HomeLeft",
		data(){
			return {};
		}
	}
</script>

<style>
</style>
