import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./routes";
import {store} from "./store";
import {BIconChevronBarUp, BIconChevronBarDown,
    BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem, BNavText, BNav} from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue';
import VueMeta from 'vue-meta'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = true
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.use(ModalPlugin)
Vue.component('b-nav', BNav)
Vue.component('b-nav-text', BNavText)
Vue.component('b-nav-item', BNavItem)
Vue.component('b-navbar-nav', BNavbarNav)
Vue.component('b-collapse', BCollapse)
Vue.component('b-navbar-toggle', BNavbarToggle)
Vue.component('b-navbar-brand', BNavbarBrand)
Vue.component('b-navbar', BNavbar)
Vue.component('b-icon-chevron-bar-up', BIconChevronBarUp)
Vue.component('b-icon-chevron-bar-down', BIconChevronBarDown)

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')

