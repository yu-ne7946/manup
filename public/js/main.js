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

/**music control */
// $("#audio_control").click(function(){
//     Audio.pause();
// })

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