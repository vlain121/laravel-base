import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
import AuthApi from '../api/auth'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: routes,
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const authenticated = 'user' in store.state && 'id' in store.state.user ? store.state.user.id : null
    if (!authenticated) {
      AuthApi.me((response) => {
        store.dispatch('setUser', response.data).then(() => {})
      }, () => {
        next({
          path: '/login'
        })
      })
    }
  }
  next()
});

export default router
