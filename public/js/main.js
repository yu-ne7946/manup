/**배너 베가스 */

$('.full-banner').vegas({
    delay: 4000,
    timer: false,
    shuffle: false,
    autoplay: true,
    loop:true,
    transition: 'fade',
    valign: 'center',
    transitionDuration: 2000,
     slides: [
        { src:'../img/divider6.jpg',
            video: {
                src: '../media/man2.mp4',
                loop: true,
                mute: true
            }
        }],
    animation: 'kenburns',
    animationDuration:"auto",
    overlay: '../css/overlays/06.png',
});



/**scroll */
$(window).scroll(function(){
    var gap = $(window).scrollTop();
    if(gap > 150){
        if(!$(".header").hasClass("gnb_color")){
            $(".header").css({"top":"-60px"}).addClass("gnb_color");
            $(".header").stop().animate({"top":"0px"},500);
        }
    }
    else{
        $(".header").css({"top":"-60px"}).removeClass("gnb_color");
        $(".header").stop().animate({"top":"0px"},500);
    }
});
$(".fa-bars").click(function () {
    $(".gnb_sub").stop().slideToggle(100);
});




/**banner text */
 var interval;
 var n = 0;
var depth=3;
//  $("#pro > h2").eq(0).css({"z-index":2});
  banFade();
  interval = setInterval(banFade,5000);

//   function sleep(t){
//       return new Promise(resolve => setTimeout(resolve,t));
//   }

 function banFade(){
   $("#pro > h2").eq(n).animate({"opacity":1,"top": 0},1500).delay(2000)

   $("#pro > h2").eq(n).animate({"opacity":0,"top": "-40%"},1500);
    if(n==6) {  n=-1; 
        $("#pro >h2").animate({"top":"40%"},100);
   }
     n++;

};



/***********music ************/
// var x = document.getElementById("audio");
// function audioLoop() { 
// x.loop = true;
// x.load();} 

var audio = document.getElementById('audio');
$("#play").click(function(){
    if(audio.paused) {
        audio.play();
        $("#play").css("color","#d91023");
    }
    else {
        audio.pause();
        $("#play").css("color","#fff");
    }
}).trigger("click");

/* function play() {
    var audio = document.getElementById('audio');
    // audio.loop = true;
    if (audio.paused) {
        audio.play();
        
        $("#play").css("color","#d91023");
        
        // $('#play').removeClass('glyphicon-play-circle')
        // $('#play').addClass('glyphicon-pause')
    }else{
        audio.pause();
        audio.currentTime = 0
        $("#play").css("color","#fff");
        // $('#play').addClass('glyphicon-play-circle')
        // $('#play').removeClass('glyphicon-pause')
    }
} */

/******banner scroll ************/
var pages =[]
var now = 0;
$(window).resize(function(){
    $(".page").each(function(i){
        pages[i] =$(this).position().top;
    });
    // console.log(pages[1],pages[2],pages[3],pages[4],pages[5]);
}).trigger("resize");

$(".gnb").children("li").click(function(){
    now = $(this).index();
    console.log(pages[now]);
    $("html, body").stop().animate({"scrollTop":pages[now]+"px"},300);
}); 

$(".gnb_sub").children("li").click(function(){
    now = $(this).index();
    $("html, body").stop().animate({"scrollTop":pages[now]+"px"}, 300, function(){
        $(".gnb_sub").stop().slideUp(100);
    });
});