<template>
  <div id="head">
<head>
  <title>{{title}}</title>
  <meta charset="UTF-8">
  <meta name="description" content="Free movies for whole the world ">
  <meta name="keywords" content="Movies,forgien,test">
  <meta name="author" content="Eslam">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

  </div>
</template>

<script>
import header from './header.vue';
import body from './body.vue';
import footer from './footer.vue';
export default {
  name: 'head',
  data () {
    return {
    }
  },
  props:['title']
}
</script>

<style>
</style>