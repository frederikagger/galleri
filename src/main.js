import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "@/routes";

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.filter('currency', (value) => {
  return value.toLocaleString() + ' kr.';
});

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition){
    if (savedPosition){
      return savedPosition;
    } else {
          return {x:0, y:0}

    }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
