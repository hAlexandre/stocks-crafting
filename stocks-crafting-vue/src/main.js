import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../src/css/dashboard.css'
import $ from 'jquery'
window.jQuery = window.$ = $;


import VueRouter from 'vue-router'
import Simuladores from './components/Simuladores.vue'
import Blog from './components/Blog.vue'
import QuemSomos from './components/QuemSomos.vue'

//Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);



import BlogService from './service/BlogService.js'
import {ConfigClass} from './classes/ConfigClass.js'

let server = `${ConfigClass.getUrlApi().toString()}`;

Vue.prototype.$blogService = BlogService;
Vue.prototype.$server = server;

const routes = [
    {
      name: 'Simuladores',
      path: '/Simuladores',
      component: Simuladores
    },
    {
      name: 'Blog',
      path: '/Blog',
      component: Blog
    },
    {
      name: 'QuemSomos',
      path: '/QuemSomos',
      component: QuemSomos
    }     
  ]
  
const router = new VueRouter({mode: 'history', routes: routes});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

















