<template>
    <div id="episodes">
    
            <div class="row" >
<div class="test  col-lg-12 col-md-12 col-sm-12 col-xs-12" >
<div id="episode" class="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
<ul  id="link" >
<li><a>حلقة 1 </a></li>
<li><a>حلقة 2 </a></li>
<li><a>حلقة 3 </a></li>

</ul>

</div>
<div id="series" class="col-lg-6  col-md-6 col-sm-6 col-xs-6 ">
<ul id="link" v-for="serie in series">
<li  @click="tepisodes"  :serie="serie.nameSeries"><a >{{serie.series +' '+'موسم '}}</a></li>

</ul>

</div>
</div>

    </div>

    </div>
</template>


<script>
    
export default{
 name:'related',
data (){

return {
    series:[{'series':'1','nameSeries':'naruto 1'},{'series':' 2','nameSeries':'naruto 2'},{'series':'3','nameSeries':'naruto 3'},{'series':'4','nameSeries':'naruto 4'},{'series':'5','nameSeries':'naruto 5'}]
}

},mounted(){


},methods:{

tepisodes:()=>{

alert('dsadsa');

}

}


    }



</script>



<style scoped>

#series{

height:495px;
border-left:5px solid RGB(46, 139, 87);
}
#episode{
height:495px;

}
    .test{
margin:0 auto;
padding:0 auto ; 
  white-space: normal; 
  text-overflow: ellipsis;
  line-height: 1.4em;
word-wrap: break-word; 
    }

    #link{

        list-style-type: none;
    
        margin: 0;
    
        padding: 0;
    
        overflow: hidden;
    

        position: relative;



    }
    #link  li {


        background-color: pink;
    
        cursor: pointer;
    
    
    
    
        margin-top: 5px;
    
        margin-bottom: 3px;

    }
      #link  li a {


       display: block;
    
        color: black;
    
        text-align: center;
    
        padding-left: 14px ;
        padding-right:14px;
    
        text-decoration: none;

      }
    #episodes{
padding:5px 0px 20px 0px ; 


    }
   @media  (max-width:1024px) and (min-width:767px){
   #link  li a {



        padding-left: 2px ;
        padding-right:2px;
   

      }


    }
   @media (max-width:767px){

.row{
margin-left:0px;
margin-right:0px;
    
}

#series{

height:687px;
}
   }
 
</style>