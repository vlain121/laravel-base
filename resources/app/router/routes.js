const DashboardPage = () => import('../views/DashboardPage.vue')
export default [
    {
        path: '/',
        name: 'DashboardPage',
        component: DashboardPage,
    },
    {
        path: '*',
        component: DashboardPage,
    },
]
