import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

//export default route(function (/* { store, ssrContext } */) {
//  const createHistory = process.env.SERVER
 //   ? createMemoryHistory
  //  : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

//  const Router = createRouter({
 //   scrollBehavior: () => ({ left: 0, top: 0 }),
 //   routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
 //   history: createHistory(process.env.VUE_ROUTER_BASE)
 // })
export default route(function () {
  const Router = createRouter({
    history: createWebHistory(),
    routes,
  })

   Router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('username') // 確認是否已登入
    if (to.path === '/login' && isAuthenticated) {
      next('/'); // 如果已登入且嘗試訪問登錄頁面，則重定向到首頁
    } else if (to.path !== '/login' && !isAuthenticated) {
      next('/login'); // 未登入則跳轉到 login
    } else {
      next(); // 允許訪問
    }
  })

  return Router
})
