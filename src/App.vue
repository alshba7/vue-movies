<template>
  <div id="app">
<head-bar :title='title'></head-bar>
<header-bar :title='title'></header-bar>
    <router-view ></router-view>

<footer-bar :title='title'></footer-bar>
  </div>
</template>

<script>
import head from './head.vue';
import header from './header.vue';
import body from './body.vue';
import footer from './footer.vue';
import {ev} from './main.js';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'my site ',
      result:[{'name':'dunkirk'},{'name':'kemet'},{'name':'egypt'}]
    }
  },
  components:{
    'header-bar':header,
    'footer-bar':footer,
    'body-bar':body,
    'head-bar':head

  },
  methods:{

},
mounted(){



},
}
</script>

<style>
body{
background-color:#3CB371;
font-family: 'Slabo 27px', serif;

}
</style>
