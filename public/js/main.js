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
$("#audio_control").click(function(){
    Audio.pause();
})