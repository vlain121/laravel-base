const DashboardPage = () => import('../views/DashboardPage.vue')
const LoginPage = () => import('../views/LoginPage.vue')
export default [
    {
        path: '/',
        name: 'DashboardPage',
        component: DashboardPage,
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
    },
]
