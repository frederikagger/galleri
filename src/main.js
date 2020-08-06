import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./routes";
import {rtdbPlugin} from 'vuefire'
import {store} from "./store";
import {BIconChevronBarUp, BIconChevronBarDown, BFormGroup, BFormInput, BFormTextarea, BModal, BCard, BCardText,
    BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem, BNavText} from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'


Vue.config.productionTip = true

Vue.use(ModalPlugin)
Vue.component('b-nav-text', BNavText)
Vue.component('b-nav-item', BNavItem)
Vue.component('b-navbar-nav', BNavbarNav)
Vue.component('b-collapse', BCollapse)
Vue.component('b-navbar-toggle', BNavbarToggle)
Vue.component('b-navbar-brand', BNavbarBrand)
Vue.component('b-navbar', BNavbar)
Vue.component('b-card-text', BCardText)
Vue.component('b-card', BCard)
Vue.component('b-icon-chevron-bar-up', BIconChevronBarUp)
Vue.component('b-icon-chevron-bar-down', BIconChevronBarDown)
Vue.component("b-form-group", BFormGroup)
Vue.component("b-form-input", BFormInput)
Vue.component('b-form-textarea', BFormTextarea)
Vue.component('b-modal', BModal)
Vue.use(rtdbPlugin)
Vue.use(VueRouter)

Vue.filter('currency', (value) => {
    return value.toLocaleString() + ' kr.';
});

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')

