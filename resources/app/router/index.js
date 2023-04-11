import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: routes,
})

router.beforeEach((to, from, next) => {
    // if (to.path !== '/login') {
    //     const token = 'token' in store.state ? store.state.token : null
    //     if (!token) {
    //         next({
    //             path: '/login'
    //         })
    //     }
    // }
    next()
});

export default router
