import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);
import routes from './routes.js'

// 创建路由器对象
const router=new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:"active"
})

export default router
