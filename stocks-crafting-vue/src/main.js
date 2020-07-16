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


//Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);

//let server = `${ConfigClass.getUrlApi().toString()}`;


const routes = [
    {
      name: 'Simuladores',
      path: '/Simuladores',
      component: Simuladores
    }    
  ]
  
const router = new VueRouter({mode: 'history', routes: routes});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

















