import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Manage from '@/page/manage';
import Home from '@/page/home';
import UserList from '@/page/userList';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		}, {
			path: '/manage',
			name: '',
			component: Manage,
			children: [{
				path: "",
				component: Home,
				meta: ['添加数据', '添加商铺'],
			},{
				path: "/userList",
				component: UserList,
				meta: ['添加数据', '用户列表'],
			}
			]
		},
	]
})
