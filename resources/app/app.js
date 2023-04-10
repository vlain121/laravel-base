import Vue from 'vue'
import store from './store'
import mixin from './mixin'
import App from './App.vue'
import router from './router'

window.Bus = new Vue({
    name: 'Bus',
})

Vue.mixin(mixin)

import { onLCP } from 'web-vitals'

onLCP((data) => {
    console.log(data)
})


new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app')
