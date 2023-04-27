const DashboardPage = () => import('../views/DashboardPage.vue')
const LoginPage = () => import('../views/LoginPage.vue')
const CustomerPage = () => import('../views/CustomerPage.vue')
export default [
  {
    path: '/',
    name: 'DashboardPage',
    component: DashboardPage,
  },
  {
    path: '/customer',
    name: 'CustomerPage',
    component: CustomerPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
]
