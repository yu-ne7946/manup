$('.banner').vegas({
    // delay: 4000,
    timer: false,
    shuffle: false,
    autoplay: true,
    loop:true,
    transition: 'fade',
    valign: 'center',
    // transitionDuration: 2000,
     slides: [
        { src:'../img/divider6.jpg',
            video: {
                src: '../media/lake.mp4',
                loop: true,
                mute: true
            }
        }]
    })