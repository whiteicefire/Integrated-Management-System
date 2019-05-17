import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes, appRoutes } from './routes'
import { getToken } from '../libs/auth'
import store from '../store'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

// export default function (/* { store, ssrContext } */) {
const Router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
  appRoutes,

  // Leave these as is and change from quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
})

const whiteList = ['/login']// 设置白名单，避免死循环

// function hasPermission(router, accessMenu) {
//   if (whiteList.indexOf(router.path) !== -1) {
//     return true;
//   }
//   let menu = Util.getMenuByName(router.name, accessMenu);
//   if (menu.name) {
//     return true;
//   }
//   return false;

// }

//地址栏改变，比$route(to)先触发
Router.beforeEach(async (to, from, next) => {

  if (getToken()) {
    let userInfo = store.state.user.userInfo;
    if (!userInfo.name) {
      try {
        await store.dispatch("GetUserInfo",store.state.user.openid)
        await store.dispatch('updateAccessMenu',store.state.menurouter.menus)
        if (to.path === '/login') {
          next({ name: 'Index' })
        } else {
          //Util.toDefaultPage([...routers], to.name, router, next);
          // next({ ...to, replace: true })//菜单权限更新完成,重新进一次当前路由
          next({ path: to.path })
        }
      }  
      catch (e) {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
          next()
        } else {
          next('/login')
        }
      }
    } else {
      if (to.path === '/login') {
        next({ name: 'Index' })
      } else {
          next();      
        // if (hasPermission(to, store.getters.accessMenu)) {
        //   Util.toDefaultPage(store.getters.accessMenu,to, routes, next);
        // } else {
        //   next({ path: '/403',replace:true })
        // }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login')
    }
  }
  // let menu = Util.getMenuByName(to.name, store.getters.accessMenu);
  // Util.title(menu.title);
});

Router.afterEach((to) => {
  window.scrollTo(0, 0);
});

export default Router