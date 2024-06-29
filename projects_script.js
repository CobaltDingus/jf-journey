let projectPageController = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: 0,
    }
});

let slides = document.querySelectorAll("section");

for (let i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
            triggerElement: slides[i],
            offset: -60
        })
        .setPin(slides[i], {pushFollowers: false})
        .addIndicators()
        .addTo(projectPageController);
}

function PageTransition() {
    let tl = gsap.timeline()

    tl.to(".transition", {
        duration: 1,
        opacity: 1,
        // scaleY: 1,
        // transformOrigin: "bottom",
        // ease: "power4.inOut",
    })

    tl.to(".transition", {
        duration: 1,
        opacity: 0,
        // scaleY: 0,
        // transformOrigin: "top",
        // ease: "power4.inOut",
        delay: 2,
    })
}

function contentAnimation() {
    // let tl = gsap.timeline()

    // tl.to("", {
    //     top: 0,
    //     duration: 1,
    //     ease: "power3.inOut",
    //     delay: 0.75,
    // })
}

function delay(n) {
    n = n || 0;
    return new Promise((done) => {
        setTimeout(() => {
            done()
        }, n)
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async()

                PageTransition()
                await delay(2000)
                done()
            },

            async enter(data) {
                contentAnimation()
            },

            async once(data) {
                contentAnimation()
            }
        }
    ]
})
                    