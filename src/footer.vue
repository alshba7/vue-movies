<template>
  <div id="footer">


  <!--[ footer ] -->
<div id="footer">
<div id='copyright'>
<center >
&reg;	{{title}}
</center>
</div>
<!-- the start of cetgory-->
<div id='catgy' class='col-xs-12'>
<div id='cat1' class='col-lg-5 col-md-5 col-sm-5 '>
<div class='catgy col-lg-3 col-md-3  col-sm-3  hidden-xs'><a href='#'>forgin  </a></div>
<div class='catgy col-lg-3 col-md-3 col-sm-3  hidden-xs'><a href='#'>germany   </a> </div>
<div class='catgy col-lg-3 col-md-3  col-sm-3    hidden-xs'><a href='#'>turkish  </a> </div>

</div>
<div id='cat' class=' col-lg-push-2 col-lg-5  col-md-5  col-sm-5 col-sm-push-2 '>
<div class='catgy col-lg-3 col-md-3 col-sm-3   hidden-xs'><a href='#'>forgin  </a> </div>
<div class='catgy col-lg-3 col-md-3  col-sm-3 hidden-xs'><a href='#'>germany   </a> </div>
<div class='catgy col-lg-3 col-md-3 col-sm-3    hidden-xs'><a href='#'>turkish  </a> </div>

</div>
</div>
<!-- the end of cetgory-->

</div>


  </div>
</template>

<script>
import header from './header.vue';
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 props:['title']
}
</script>

<style scoped>
a{
text-decoration:none;
color:rgba(87, 87, 87, 0.97); 

}
a:hover{
color:rgba(138, 138, 138, 0.97);

}
#footer{
 position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #2E8B57;
  text-align: center;
}
.catgy{

background-color:rgb(89, 193, 103);
margin-left:3%;
border-radius:5px;
}
#catgy{

position:absolute;



}

</style>
