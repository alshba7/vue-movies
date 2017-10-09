<template>
    <div id="watch">



        <div class='container-fluid'>
    
            <div class="row">
    
                <center>
    
                    <div class="title col-lg-5 col-lg-push-4 col-md-5 col-md-push-4 col-sm-5 col-sm-push-4 col-sm-offset-0 col-xs-8 col-xs-offset-2">
    
                        <div>
    
                            <h4>فيلم الرعب saw </h4>
    
                        </div>
    
    
    
                    </div>
    
                </center>
    
            </div>
    
        </div>
    
        <div class='container-fluid'>
    
            <div class="row" id="fullWatch">
    
    <div class="col-lg-3 col-md-3 col-sm-3 "  id="bigScreen"  >
            <div id="links">
            <ul id="links_ul">
            <li class="link_li"  @click.prevent="Clink" number="0" name="episodes-bar" style="background:#4c2121;"><a @click.prevent="com_options = 'episodes-bar'"  href="#">test</a></li>
            <li class="link_li" @click.prevent="Clink" number="1"  name="related-bar"><a  @click.prevent="com_options = 'related-bar'" href="#">test</a></li>
            <li class="link_li" @click.prevent="Clink" number="2"  name="like-bar" ><a  @click.prevent="com_options = 'like-bar'"  href="#">test</a></li>

            </ul>
                <component class="test-c" :is="com_options"></component>

            </div>
            
            </div>
    
                <div class="col-lg-9 col-lg-push-0 col-md-9 col-md-push-0 col-sm-9 col-sm-push-0 col-xs-12" id="movie">
    
                    <div id="movie-bar " class="col-lg-12 col-xs-12">
    
                        <div id="url_videos" class="col-lg-12 col-md-12 col-sm-12">
    
    
    
                            <ul id="url_video">
    
                                <div v-for="(url_video,index) in url_videos" class="vi">
    
                                    <li :url="url_video.video_url" :num="index" @click.prevent="cVideo" ><a>{{url_video.website}}</a></li>
    
                                </div>
    
                            </ul>
    
                        </div>
    
    
    
                        <div id="window" class="col-lg-12 col-xs-12">
    
                            <iframe rel="nofollow" :src="video" id="iframe" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
    
    
    
                        </div>
    
                    </div>
    
    
    
                </div>
    
    <div class="col-xs-12" id="smallScreen"  >
         <div id="links">
            <ul id="links_ul">
            <li class="link_li" @click.prevent="Clink" number="0" name="episodes-bar" style="background:#4c2121;"><a  @click.prevent="com_options = 'episodes-bar'"   href="#">test</a></li>
            <li class="link_li"  @click.prevent="Clink" number="1" name="related-bar"><a  @click.prevent="com_options = 'related-bar'"  href="#">test</a></li>
            <li class="link_li"  @click.prevent="Clink" number="2"  name="like-bar" ><a   @click.prevent="com_options = 'like-bar'"   href="#">test</a></li>

            </ul>
                <component :is="com_options"></component>

            </div>
    </div>
    
            </div>
    
    
    
        </div>
    
    
    
    
    
    </div>
</template>

<script>
import episodes from './episodes.vue';
import related from './related.vue';



function test(){

alert('adsadas');

}
    export default {
    
    
    
        name: 'watch',
    
        data() {
    
    
    
            return {
    
                url: '',
    
                video: '',
                elemetWatchVideo:'elementvideo',
                com_options:'episodes-bar'  ,
                url_videos: []
                    ,movies: [{
    
                    'image': 'http://cera.online/wp-content/uploads/Dunkirk_Film_poster.jpg',
    
                    'name': 'Dunkirk',
    
                    'cat': 'war'
    
                }, {
    
                    'image': 'http://cera.online/wp-content/uploads/Dunkirk_Film_poster.jpg',
    
                    'name': 'Dunkirk',
    
                    'cat': 'war'
    
                }, {
    
                    'image': 'http://cera.online/wp-content/uploads/Dunkirk_Film_poster.jpg',
    
                    'name': 'Dunkirk',
    
                    'cat': 'war'
    
                }, {
    
                    'image': 'http://cera.online/wp-content/uploads/Dunkirk_Film_poster.jpg',
    
                    'name': 'Dunkirk',
    
                    'cat': 'war'
    
                }, {
    
                    'image': 'http://cera.online/wp-content/uploads/Dunkirk_Film_poster.jpg',
    
                    'name': 'Dunkirk',
    
                    'cat': 'war'
    
                }, {
    
                    'image': 'http://cera.online/wp-content/uploads/wakefield-poster01-292x292.jpg',
    
                    'name': 'wakefield',
    
                    'cat': 'war'
    
                }, {
    
                    'image': 'http://cera.online/wp-content/uploads/london-heist-movie-poster-01-600x350-292x170.jpg',
    
                    'name': 'London Heits',
    
                    'cat': 'war'
    
                }, {
    
                    'image': 'http://cera.online/wp-content/uploads/drone-2017-189x360.jpg',
    
                    'name': 'Drone',
    
                    'cat': 'action'
    
                }],
    
    
    
    
    
            }
    
    
    
        },
    
        props: ['name'],
    
        mounted() {
    
            this.video = 'https://openload.co/embed/u9TZd7vPAjg/';
    
            this.url = this.$route.params.value;
    
            this.url_videos.push({
    
                'video_url': 'https://openload.co/embed/fVVKtZXB87c/',
    
                'website': 'openload'
    
            }, {
    
                'video_url': 'https://estream.to/embed-k25edk3017ww.html',
    
                'website': 'estream'
    
            }, {
    
                'video_url': 'https://www.raptu.com/e/FICNG7XC7M',
    
                'website': 'raptu'
    
            }, {
    
                'video_url': 'http://irooc.com/op/play/gnnS02eaD9zu9k8/',
    
                'website': 'irooc'
    
            }, {
    
                'video_url': 'https://filescdn.com/embed-tnz012g4dkaj.html',
    
                'website': 'filescdn'
    
            }, {
    
                'video_url': 'https://userscloud.com/embed-8676qvlt4fca.html',
    
                'website': 'usercloud'
    
            });
    
            var heightE = document.getElementById('movie');
    
            var elementVideoCode = `<div class="col-lg-3 col-md-3 col-sm-3 "  id="bigScreen"  >
            <div id="links">
            <ul id="links_ul">
            <li class="link_li"  name="related-bar"><a  class="color" href="#">test</a></li>
            <li class="link_li" name="episodes-bar"><a href="#">test</a></li>
            <li class="link_li" name="like-bar" ><a href="#">test</a></li>

            </ul>
            </div>
            
            </div>`;
    
            if (window.innerWidth > 767) {
    
    $('#smallScreen').hide();
    
    
    
    
                var elementVideo = document.getElementById('bigScreen').style.height = heightE.clientHeight + 55 + 'px';
    
    
    
            } else {
        $('#bigScreen').hide();

    
                var elementVideo = document.getElementById('smallScreen').style.height = heightE.clientHeight + 55 + 'px';
    
    
    
    
    
    
    
            }
    
            window.addEventListener('resize', function() {
    
    
    
                if (window.innerWidth > 767) {
    
        $('#smallScreen').hide();
        $('#bigScreen').hide();
        $('#bigScreen').show();

    

    
    
    
                    var elementVideo = document.getElementById('bigScreen').style.height = heightE.clientHeight + 'px';
    
    
    
                } else {
    
      $('#smallScreen').hide();
        $('#bigScreen').hide();
        $('#smallScreen').show();
    
                    var elementVideo = document.getElementById('smallScreen').style.height = heightE.clientHeight + 'px';
    
    
    
    
    
                }
    
            });
/*   for link_li */
/*
document.getElementById('bigScreen').addEventListener('click',function(){

alert('dsadsa');

});
function myFunction(x) {
    x.style.background = "yellow";
}
*/

       },
       
       
    
        methods: {
    
            cVideo: (event) => {
    
                var target = event.currentTarget;
    
                var url = target.getAttribute('url');
    
                document.getElementById('iframe').setAttribute('src', url);
 $('.vi li').css('background','pink');                

                target.style.backgroundColor='#4c2121';
                
    
            },
            Clink:(event)=>{
            var target = event.currentTarget ; 
            $('.link_li').css('backgroundColor','pink');
           var element =  target.getAttribute('name');
            $("[name='"+element+"']").css('backgroundColor','#4c2121');

            }
            
    
    
    
        },
        components:{
           'related-bar':related,
           'episodes-bar':episodes,
   


        },
    
    
    }
</script>

<style scoped>

#smallScreen{

overflow:hidden;
background-color:#333; padding:3px 3px 3px 3px ; float:left; margin-top:30px;margin-bottom:40px;padding:10px 0px 10px 0px;

}
#links_ul{
        list-style-type: none;
    
        margin: 0;
    
        padding: 0;
    
        overflow: hidden;
    
        background-color: #333;
    
        position: relative;
}
#links_ul li{
  
        background-color: pink;
    
        cursor: pointer;
    
        float: right;
    
        margin-right: 2%;
    
        width: 30%;
    
        margin-top: 5px;
    
        margin-bottom: 3px;


}

#links_ul li a {


       display: block;
    
        color: white;
    
        text-align: center;
    
        padding: 14px 10px;
    
        text-decoration: none;


}
.color{

background-color:rgb(193, 17, 35);

}
  #bigScreen {
background-color:#333; padding:3px 3px 3px 3px ; float:left; margin-top:30px;margin-bottom:40px;padding:10px 0px 10px 0px;
position:relative;
    }
    #watch {
    
        margin-right: 0 auto;
    
        margin-left: 0 auto;
    
    }
    
    
    
    #movie {
    
        background-color: rgb(89, 193, 103);
    
        margin-top: 30px;
    
        margin-bottom: 40px;
    
        padding: 10px 0px 10px 0px;
    
    }
    
    
    
    #window {
    
        height: 450px;
    
        position: relative;
    
    }
    
    
    
    #window>iframe {
    
        width: 100%;
    
        height: 450px;
    
        position: absolute;
    
        left: 0%
    
    }
    
    
    
    #url_videos {
    
        padding: 20px 20px 20px 20px
    
    }
    
    
    
    #url_video {
    
        list-style-type: none;
    
        margin: 0;
    
        padding: 0;
    
        overflow: hidden;
    
        background-color: #333;
    
        position: relative;
    
    }
    
 
    #url_video li {
    
        background-color: pink;
    
        cursor: pointer;
    
        float: right;
    
        margin-right: 2%;
    
        width: 14%;
    
        margin-top: 5px;
    
        margin-bottom: 3px;
    
    }
    

    
    
    
    #url_video li a {
    
        display: block;
    
        color: white;
    
        text-align: center;
    
        padding: 14px 10px;
    
        text-decoration: none;
    
    }
    
    
    
    @media (max-width:578px) {
    
        .vi {
    
            margin-top: 20px;
    
            position: relative;
    
            min-height: 1px;
    
            padding-right: 15px;
    
            padding-left: 15px;
    
            float: right;
    
            width: 50%;
    
        }
    
        #url_video li {
    
            margin-bottom: 10px;
    
            width: 100%;
    
        }
    
    }
    
    
    
    .title {
    
        background-color: #333;
    
        padding: 4px 0px 0px 4px;
    
        border-radius: 5px;
    
    }
    
    
    
    .title h4 {
    
        color: white;
    
    }
    
    
    
  #url_video li[num="0"]{
background-color:#4c2121;

}

</style>