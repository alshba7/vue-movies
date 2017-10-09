import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import body from './body.vue';
import watch from './watch.vue';
Vue.use(VueResource);
Vue.use(VueRouter);
const routes =[{path:'/:value',component:watch},{path:'/',component:body},{path:'/*',redirect:'/'}];
const router = new VueRouter({
routes,
mode:'history'

});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
