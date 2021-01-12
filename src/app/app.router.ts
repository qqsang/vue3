import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw, } from "vue-router";
import Index from './components/index.vue';
import About from './components/about.vue';
import postRouter from './components/post/post.router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about-us',
    //redirect: '/about'
    redirect: { name: 'about' }//重定向
  },
  ...postRouter
];

/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHistory(),
  routes

});

/**
 * 导航守卫
 */
router.beforeEach((
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    console.log('导航守卫');
    console.log("to.matched:", to.matched);
  }
  next();
  // console.log('导航守卫');
  // console.log('to', to);
  // console.log('from', from);

  // if (to.name === 'about') {
  //   next('/');
  // } else { next(); }


})


/**
 * 导出路由
 */
export default router;