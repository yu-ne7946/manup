/**배너 베가스 */

$('.full-banner').vegas({
    delay: 4000,
    timer: false,
    shuffle: false,
    cover:true,
    autoplay: true,
    loop:true,
    transition: 'fade',
    valign: 'center',
    transitionDuration: 2000,
     slides: [
        { src:'../img/mb_back.jpg',
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
    var gap = $(window, document, "html, body").scrollTop();
    if(gap > 150){
        if(!$(".header").hasClass("gnb_color")){
            $(".header").css({"top":"-60px"}).addClass("gnb_color");
            $(".header").stop().animate({"top":"0px"},500);
            $(".fa-bars").css({"color":"#4c6b7c"});
        }
    }
    else{
        $(".fa-bars").css({"color":"#fff"});
        $(".header").css({"top":"-60px"}).removeClass("gnb_color");
        $(".header").stop().animate({"top":"0px"},500);
    }
});
var gnbSub = 0;
$(".fa-bars").click(function () {
    gnbSub++;
    if(gnbSub % 2 != 0){
        $(".header").css({"border-bottom":"none"})
    }else{
        $(".header").css({"border-bottom":"1px solid rgba(255,255,255, .2)"});
    };
    $(".gnb_sub").stop().slideToggle(100);
});




/*banner text */
 var interval;
 var n = 0;
var depth=3;
//  $("#pro > h2").eq(0).css({"z-index":2});
  banFade();
  interval = setInterval(banFade,5000);

  function banFade(){
   $(".pro_txt").eq(n).animate({"opacity":1,"top": "-40%"},1500).delay(2000)

   $(".pro_txt").eq(n).animate({"opacity":0,"top": "-60%"},1500);
    if(n==6) {  n=-1; 
        $(".pro_txt").animate({"top":"-23%"},100);
   }
     n++;

};


/**************************************/
/***********music ************/
/**************************************/

var audio = document.getElementById('audio');
$("#play").click(function(){
    audio.load();
    if(audio.paused) {
        audio.play();
        $("#play").css("color","#d91023");
    }
    else {
        audio.pause();
        $("#play").css("color","#333");
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

/***********************************/
/******banner scroll ************/
/****************************************/
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


/********************************/
/*************syno languae*************/
/********************************/

var synoN=0;
$(".syno_lang").click(function(){
    synoN++;
    if(synoN %2 !=0){
        $(".syno_eng").fadeOut(300);
        $(".syno_ko").fadeIn(300);
        $(".syno_lang").text("English");
    }else{
        $(".syno_ko").fadeOut(300);
        $(".syno_eng").fadeIn(300);
        $(".syno_lang").text("Korean");
    }
})


/********************************/
/*************Cast language*************/
/********************************/
/* $(".cast_lang").click(function(){
    $(".cast_eng").hide();
    $(".cast_ko").show();

    if($(".cast_eng").css({"display":"none"})){
        $(".cast_lang").text("English");

    }
})
 */
var castN=0;
$(".cast_lang").click(function(){
    castN++;
    if(castN % 2 !=0){
        $(".cast_eng").fadeOut(300);
        $(".cast_ko").fadeIn(300);
        $(".cast_lang").text("English");
    }else{
        $(".cast_ko").fadeOut(300);
        $(".cast_eng").fadeIn(300);
        $(".cast_lang").text("Korean");
    }
})