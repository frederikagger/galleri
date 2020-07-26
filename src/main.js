import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from '@/routes';
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.filter('currency', (value) => {
    return value.toLocaleString() + ' kr.';
});

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
