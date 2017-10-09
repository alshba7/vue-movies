<template>
  <div id="body">
<div class="container" id="movies">
<div class="row">
<div class="col-lg-12  movies col-md-12   col-sm-offset-0 col-sm-12 col-xs-12">
<center>
<a href="#"> 
<div class="movie " v-for="movie in movies">
<div class="title">{{movie.name}} </div>
<div classs="image"><img class="img":src="movie.image" /></div>
<div class="cat">{{movie.cat}} <i class="fa fa-film" aria-hidden="true"></i>
</div>
<div class="watched "> 21515 <i class="fa fa-eye" aria-hidden="true"></i>
 </div>
 <div class="desc"><p>hello eslam how are you are you fine or not , are you love elevator ?? yeah you like to lift </p></div>

</div>
</a>
</center>


</div>
</div>
</div>
  </div>

</template>

<script>
export default {
  name: 'body',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:true,
      titlehover:false,
      movies:[{'image':'http://cera.online/wp-content/uploads/Dunkirk_Film_poster.jpg','name':'Dunkirk','cat':'war'},{'image':'http://cera.online/wp-content/uploads/Dunkirk_Film_poster.jpg','name':'Dunkirk','cat':'war'},{'image':'http://cera.online/wp-content/uploads/Dunkirk_Film_poster.jpg','name':'Dunkirk','cat':'war'},{'image':'http://cera.online/wp-content/uploads/Dunkirk_Film_poster.jpg','name':'Dunkirk','cat':'war'},{'image':'http://cera.online/wp-content/uploads/Dunkirk_Film_poster.jpg','name':'Dunkirk','cat':'war'},{'image':'http://cera.online/wp-content/uploads/wakefield-poster01-292x292.jpg','name':'wakefield','cat':'war'},{'image':'http://cera.online/wp-content/uploads/london-heist-movie-poster-01-600x350-292x170.jpg','name':'London Heits','cat':'war'},{'image':'http://cera.online/wp-content/uploads/drone-2017-189x360.jpg','name':'Drone','cat':'action'}],

        

      
    }
  },
  methods:{


  },
  mounted(){
//$('.movies').css('left',$('body').width() / 10) ;


}

}
</script>

<style scoped>
#movies{
margin-top:40px;
margin-bottom:40px;
position:relative;
float:center;

}
.movie{
  
border:1px solid white ; 
position:relative ; 
overflow:hidden;
padding: 0  ;
margin-right:10px;
margin-top:20px;
    -webkit-perspective: 300px; /* Chrome, Safari, Opera  */
    perspective: 300px;
border-radius:10px;
}
@media (min-width:1024px){
.movie{

width:18%;
float:right;


}}

@media (min-width:768px) and (max-width:1023px){
.movie{

width:23%;
float:left;


}

}




@media (max-width:767px) and (min-width:501px){
.movie{

width:45%;
float:left;



}
#movies{

margin-left:7%;

}
}


@media (max-width:500px){
.movie{

width:65%;
float:center;

}

} 
.movie:hover > .title{
top:0px;


}


.movie:hover > .cat{
left:10px;


}
.movie:hover > .watched{
left:10px;


}
.movie:hover > .desc{
    top: 84%;

}

.title{
  -webkit-transition: all  0.3s ease-out;
  -moz-transition:  all  0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

position:absolute;
top:-30px;
background-color:rgba(0, 0, 0, 0.5);
width:100%;
text-align:center;
color:white;
z-index:2;
}
.cat{
  -webkit-transition: all  0.4s ease-out;
  -moz-transition:  all  0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  transition: all .4s ease-out;
position:absolute;
top: 44px;
left:-120px;
color:white;
    box-shadow: 10px #0000;

background-color:rgb(76, 27, 27);
padding:3px 6px 3px 6px ; 
border:2px solid rgb(76, 27, 27);
border-radius:8px;

}
 .img{
width:100%;
height:360px;
border-radius:10px;
margin-right:10px;

  -webkit-transition: all  0.3s ease-out;
  -moz-transition:  all  0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.movie:hover   .img{

    transform:scale(1.1,1.2);

}
.watched{
  -webkit-transition: all  0.4s ease-out;
  -moz-transition:  all  0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  transition: all .4s ease-out;
position:absolute; 
top: 160px;
left:-120px;
color:white;
    box-shadow: 10px #0000;

background-color:rgb(66, 57, 57);
padding:3px 6px 3px 6px ; 
border:2px solid rgb(66, 57, 57);

border-radius:8px;

}

.desc{


position:absolute; 
left: 40%;
color:yellow ; 
  -webkit-transition: all  .5s ease-out;
  -moz-transition:  all  .5s ease-out;
  -o-transition: all .5s ease-out;
  transition: all .5s ease-out;
      top: 500px;
right:0;
left:0;
margin:0 auto ;
overflow:hidden;
background-color:rgba(0, 0, 0, 0.5)}

.desc p {

width:70%;
height:30%;
opacity:1;
color:white;
line-height:1.3;

}


</style>

