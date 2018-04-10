<template>
	<div class="fillcontain">
		<el-row style="height: 100%;width:100%">
			<el-col :span="4" style="height:100%;background:#324057">
				
					<el-menu default-active="manage" class="el-menu-vertical-demo" 
					 background-color="#324057" text-color="#fff" active-text-color="#20A0FF"
					 style="min-height:100%;width:100%" router>
						<el-menu-item index="manage">
							<i class="el-icon-menu"></i>
							<span slot="title">首页</span>
						</el-menu-item>
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-document"></i>
								<span>数据管理</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="userList">用户列表</el-menu-item>
								<el-menu-item index="shopList">商家列表</el-menu-item>
								<el-menu-item index="foodList">食品列表</el-menu-item>
								<el-menu-item index="1-1">订单列表</el-menu-item>
								<el-menu-item index="1-1">管理员列表</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">
								<i class="el-icon-plus"></i>
								<span>添加数据</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title">
								<i class="el-icon-ele-wxbbaobiao"></i>
								<span>图表</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="userCharts">用户数据展示</el-menu-item>
								<el-menu-item index="shopCharts">商家数据展示</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="4">
							<template slot="title">
								<i class="el-icon-ele-wxbbiaowang"></i>
								<span>编辑</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="5">
							<template slot="title">
								<i class="el-icon-ele-iconfontjixieqimo"></i>
								<span>设置</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="6">
							<template slot="title">
								<i class="el-icon-ele-iconfontxingxing"></i>
								<span>说明</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				
			</el-col>
			<el-col :span="20" style="height:100%;overflow:auto">
			
					<router-view></router-view>
				
			</el-col>
		</el-row>
	</div>
</template>

<script>
import "../assets/icon/iconfont.css"
export default {};
</script>

<style scoped>

</style>