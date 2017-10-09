<template>
<div id="header">
<nav class="navbar navbar-inverse navbar-fixed-top"><div class="container"><div id="navbar-header" class="navbar-header">
<a id="brand" class="navbar-brand" href="#"> {{title}}
</a>
<div id="menu-bar">
<div id="menu" @click="appearH"><i class="fa fa-bars fa-2x" aria-hidden="true"></i>
</div>
<div id="menu-table">
<div id="links">
<a href="#" class="aLink"> <i class="fa fa-home fa-2x icona" aria-hidden="true"></i>
  Home</a>
  <a href="#" class="aLink"> <i class="fa fa-home fa-2x icona" aria-hidden="true"></i>
  forgin movies </a>
  
  </div>

</div>
</div>
</div><div id="navbar" class="collapse navbar-collapse">
<ul class="nav navbar-nav"><li class="active"><a href="#">Home</a></li><li><a href="#about">About</a></li><li><a href="#contact">Contact</a></li></ul><form class="navbar-form navbar-right"><div class="form-group">
<div class='input-group'>
<input type="text" class="form-control " id="input_search" autocomplete="off" @keyup="search" ref="search2" @keydown="searchDown" placeholder="Search" v-model='search_input'>
<span class="input-group-btn"><button class="btn btn-success" type="button">
<span class='glyphicon glyphicon-search'>
</span></button></span></div>
<div id='search' class='hidden-xs'>

</div>
</div>
  </form>
  </div><!--/.nav-collapse -->
  <div id="checkf">client : </div>
  </div>
</nav>
<div id='search_mobile' class='  col-xs-12 visible-xs  '>
<div class='result_mobile'><h5>result</h5></div>
<div class='result_mobile'>redasdasdsdaasdsadassult</div><div class='result_mobile'>redasddasdasdasdsadasdult</div></div></div></template>

<script> import {ev} from './main.js';
export default {
  name: 'header',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      search_input: '',
      result: [ {
        'name': 'dunkirk'
      }
      ,
      {
        'name': 'kemet'
      }
      ,
      {
        'name': 'egypt'
      }
      ,
      {
        'name': 'emar'
      }
      ,
      {
        'name': 'eslam alshbah '
      },
    
    ],
    results:[],
    resEn:[],
  }
}

,
methods: {
  search: function () {
      if (this.search_input.length > 0) {
 
        }

    },
  searchDown: ()=> {
  this.results = [] ; 
var el = document.getElementById('search');
el.innerHTML ='';
  },
  click_result:(event)=>{
var target = event.currentTarget ; 
document.getElementById('input_search').value = target.innerText;
  this.results = [];
var el = document.getElementById('search');
el.innerHTML ='';
location.replace('http://localhost:8080/'+target.innerText);
  },
  appearH:()=>{


if(parseInt($("#menu-table").css("left")) >= 0){
$("#menu-table").css("left",'-551px');

}else{
$("#menu-table").css("left",'0px');



}



  }
}

,
mounted() {

document.ontouchmove = function(event){
$('#checkf').text(event.changedTouches[0].clientX);




}

var header = document.getElementById('navbar-header');
var brand = document.getElementById('brand');

if(window.innerWidth <= 767){
brand.style.left = header.clientWidth / 2 - 30 +"px" ;
}

window.onresize = function(){

if(window.innerWidth <= 767){
brand.style.left = header.clientWidth / 2 - 30 +"px" ;
}else{

brand.style.left = "-20px";
brand.style.position = "relative";

}


}
}


,
computed: {}

,
props: ['title']
}
</script>
<style scoped>
.navbar-inverse {
  background-image: none;
  background-color: RGB(46, 139, 87);
}
.navbar-inverse .navbar-nav>.active>a,
.navbar-inverse .navbar-nav>.active>a:focus,
.navbar-inverse .navbar-nav>.active>a:hover {
  background-color: #FF6347;
}
@media (min-width: 840px) {
  .navbar>.container .navbar-brand,
  .navbar>.container-fluid .navbar-brand {
    margin-left: -15px;
    position: relative;
    left: -50px;
  }
}
@media (min-width: 768px) {
  .navbar>.container .navbar-brand,
  .navbar>.container-fluid .navbar-brand {
    margin-left: -15px;
    position: relative;
    left: -20px;
  }
  #menu-bar{
display:none;


}
}
.aLink{
    text-decoration: none;
    color: pink ; 
    display:block;
    margin-bottom:10px;
}
#header {
  margin-bottom: 100px;
}
.form-control {
  border-radius: 7px;
}
.btn {
  border: none;
}
.nav {
  text-align: center;
}
#search {
  position: absolute;
  top: 42px;
  /*right:8%;*/
}
.result {
  width: 200px;
  background: rgb(244, 247, 244);
  padding: 2px 10px 3px 10px;
  border-radius: 2px;
  display: block;
  cursor: pointer;

}
.result:hover {
  background: rgb(212, 247, 212);
}
h5 {
  margin-top: 6px;
  margin-bottom: 3px;
  font-size: 13px;
}

@media (max-width:767px) {
  #search_mobile {
    position: fixed;
    top: 235px;
    /*right:8%;*/
    z-index: 22222;
  }

  .result_mobile {
    background: rgb(244, 247, 244);
    padding: 2px 10px 3px 10px;
    border-radius: 2px;
    display: none;;
    cursor: pointer
  }

  .result_mobile:hover {
    background: rgb(212, 247, 212);
  }
  .navbar-header{

width:100%;

  }

  #menu{
    margin: 0 auto  ; 
    padding:10px 10px ; 
    
    position:absolute;
    left:0px; 
    cursor:pointer;

}
#menu-bar{
display:block;
z-index:3;


}
#menu-table{
    -webkit-transition: all  0.5s ease-out;
  -moz-transition:  all  0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
background-color:black ; 

position:absolute; 
width:60%;
left:-551px;
top:50px;
height:800px;
text-align:center;

}
.icon{
margin-right:80px;


}
#links{
margin-top:20px;


}
.icona{
margin-right:20px;


}
}
@media (max-width:767px) and (min-width:501px){

  .navbar-brand{
float:center;
position:absolute;

  }

}
@media (max-width:500px){


  .navbar-brand{
  position:absolute;

  
  
  }
}
</style>