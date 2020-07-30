<template>
  <div id="app" class="wrapper">
    <header class="main-header">
      <!-- Logo -->
      <a href="../../index2.html" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>A</b>LT</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>医院管理系统</b></span>
      </a>
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
      </nav>
    </header>
    
    <!-- =============================================== -->
    
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
            <p v-if="loginuser!=null">{{loginuser.name}}</p>
			<p v-else>未登录</p>
            <router-link v-if="loginuser!=null" to="/login"><i class="fa fa-circle text-success"></i>注销</router-link>
			<router-link v-else to="/login"><i class="fa fa-circle text-success"></i>登录</router-link>
          </div>
        </div>
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul v-if="loginuser!=null" class="sidebar-menu" data-widget="tree">
          <li class="header">系统功能主菜单</li>
		  <li class="treeview">
		    <router-link to="/clinic">
		      <i class="fa fa-dashboard"></i> <span>科室管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		    <ul class="treeview-menu">
		      <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
		      <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
		    </ul>
		  </li>
          <li class="treeview">
            <router-link to="/doctor">
              <i class="fa fa-dashboard"></i> <span>医生管理</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </router-link>
            <ul class="treeview-menu">
              <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
              <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
            </ul>
          </li>
		  <li class="treeview">
		    <router-link to="/patient">
		      <i class="fa fa-dashboard"></i> <span>病人管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		    <ul class="treeview-menu">
		      <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
		      <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
		    </ul>
		  </li>
		  <li class="treeview">
		    <router-link to="/sickroom">
		      <i class="fa fa-dashboard"></i> <span>病房管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		    <ul class="treeview-menu">
		      <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
		      <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
		    </ul>
		  </li>
		  <li class="treeview">
		    <router-link to="/tariff">
		      <i class="fa fa-dashboard"></i> <span>缴费信息管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		    <ul class="treeview-menu">
		      <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
		      <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
		    </ul>
		  </li>
		  <li class="treeview">
		    <router-link to="/medicalrecord">
		      <i class="fa fa-dashboard"></i> <span>病例管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		    <ul class="treeview-menu">
		      <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
		      <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
		    </ul>
		  </li>
		  <li class="treeview">
		    <router-link to="/drug">
		      <i class="fa fa-dashboard"></i> <span>药品管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		    <ul class="treeview-menu">
		      <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
		      <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
		    </ul>
		  </li>
		  <li class="treeview">
		    <router-link to="/indrug">
		      <i class="fa fa-dashboard"></i> <span>进药记录管理</span>
		      <span class="pull-right-container">
		        <i class="fa fa-angle-left pull-right"></i>
		      </span>
		    </router-link>
		    <ul class="treeview-menu">
		      <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
		      <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
		    </ul>
		  </li>
		  
		  
		  
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>
    
    <!-- =============================================== -->
    
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          主页
          <small>子功能</small>
        </h1>
        <ol class="breadcrumb">
          <li><router-link to="/"><i class="fa fa-dashboard"></i>首页</router-link></li>
          <li><a href="#"></a></li>
          <li class="active"></li>
        </ol>
      </section>
    
      <!-- Main content -->
      <section class="content">
    
        <!-- Default box -->
        <div class="box"> 
          <div class="box-body">
            <router-view></router-view>
          </div>
        </div>
        <!-- /.box -->
    
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    
    <footer class="main-footer">
      <div class="pull-right hidden-xs">
        <b>Version</b> 1.0
      </div>
      <strong>Copyright &copy; 2020-2021 <a href="https://adminlte.io">第10小组</a>.</strong>版权所有。
    </footer>
  </div>
</template>

<script>
	export default{
		name:"App",
		data(){
			return{};
		},
		computed:{
			loginuser(){
				return this.$store.getters.loginuser;
			}
		}
	}
</script>

<style>
	@import url("assets/bower_components/bootstrap/dist/css/bootstrap.min.css");
	@import url("assets/bower_components/font-awesome/css/font-awesome.min.css");
	@import url("assets/bower_components/Ionicons/css/ionicons.min.css");
	@import url("assets/dist/css/AdminLTE.min.css");
	@import url("assets/dist/css/skins/_all-skins.min.css");
</style>
