import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login';
import Manage from '@/page/manage';
import Home from '@/page/home';
import UserList from '@/page/userList';
import ShopList from '@/page/shopList';
import FoodList from '@/page/foodList';
import OrderList from '@/page/orderList';
import AdminList from '@/page/adminList';
import AddShop from '@/page/addShop';
import AddGood from '@/page/addGood';
import UserCharts from '@/page/userCharts';
import ShopCharts from '@/page/shopCharts';
import VueEdit from '@/page/vueEdit';
import AdminSet from '@/page/adminSet';
import Explain from '@/page/explain';







Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Login
		},{
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
				meta: ['管理数据', '用户列表'],
			},{
				path: "/shopList",
				component: ShopList,
				meta: ['管理数据', '商家列表'],
			},{
				path: "/foodList",
				component: FoodList,
				meta: ['管理数据', '食物列表'],
			},{
				path: "/orderList",
				component: OrderList,
				meta: ['管理数据', '订单列表'],
			},{
				path: "/adminList",
				component: AdminList,
				meta: ['管理数据', '管理员列表'],
			},{
				path: "/addShop",
				component: AddShop,
				meta: ['添加数据', '添加商铺'],
			},{
				path: "/addGood",
				component: AddGood,
				meta: ['添加数据', '添加商品'],
			},{
				path: "/userCharts",
				component: UserCharts,
				meta: ['图表', '用户数据展示'],
			},{
				path: "/shopCharts",
				component: ShopCharts,
				meta: ['图表', '商家数据展示'],
			},{
				path: "/vueEdit",
				component: VueEdit,
				meta: ['编辑', '编辑文本'],
			},{
				path: "/adminSet",
				component: AdminSet,
				meta: ['设置', '管理员设置'],
			},{
				path: "/explain",
				component: Explain,
				meta: ['说明', '就是说明'],
			},


			

			






			]
		},
	]
})
