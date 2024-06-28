    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: 0,
        }
    });

    var slides = document.querySelectorAll("section");

    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i],
                offset: -60
            })
            .setPin(slides[i], {pushFollowers: false})
            .addIndicators()
            .addTo(controller);
    }