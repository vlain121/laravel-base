import Vue from 'vue'
import store from './store'
import mixin from './mixin'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import DefaultLayout from './layouts/DefaultLayout'
Vue.component('default-layout', DefaultLayout)
window.Bus = new Vue({
    name: 'Bus',
})

Vue.mixin(mixin)

import { onLCP } from 'web-vitals'

onLCP((data) => {
    console.log(data)
})
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app')
