import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Manage from '@/page/manage';
import Home from '@/page/home';
import UserList from '@/page/userList';
import ShopList from '@/page/shopList';
import FoodList from '@/page/foodList';


import UserCharts from '@/page/userCharts';
import ShopCharts from '@/page/shopCharts';



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
				meta: [],
			},{
				path: "/userList",
				component: UserList,
				meta: ['添加数据', '用户列表'],
			},{
				path: "/shopList",
				component: ShopList,
				meta: ['添加数据', '商家列表'],
			},{
				path: "/foodList",
				component: FoodList,
				meta: ['添加数据', '食物列表'],
			},
			
			
			
			
			
			{
				path: "/userCharts",
				component: UserCharts,
				meta: ['图标', '用户数据展示'],
			},{
				path: "/shopCharts",
				component: ShopCharts,
				meta: ['图标', '商家数据展示'],
			}
			
			]
		},
	]
})
