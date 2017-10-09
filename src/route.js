import Vue from 'vue';
import VueRouter from 'vue-router';
import body from './body.vue';
import watch from './watch.vue';
Vue.use(VueRouter);
const routes =[{path:'/:value',component:watch},{path:'/',component:body},{path:'/*',redirect:'/'}];
export default new VueRouter({
routes,
mode:'history'

});