let headController = new ScrollMagic.Controller()

let headScene = new ScrollMagic.Scene({
                    triggerElement: ".filler",
                    triggerHook: 0.9
                })
                .setTween([".head-image", ".main-nav", ".head-message"], 1, {scale: 10, display: 'none'}) // trigger a TweenMax.to tween
                // .addIndicators({name: "trigger div"})
                .addTo(headController)

let projectsController = new ScrollMagic.Controller()

let whiteScene = new ScrollMagic.Scene({
                    triggerElement: ".trigger",
                    triggerHook: 0
                })
                .setTween(".home-div", 1, {
                    // backgroundColor: 'gray',
                    // backgroundImage: 'url("https://i.natgeofe.com/n/e484088d-3334-4ab6-9b75-623f7b8505c9/1086.jpg")',
                    backgroundImage: "radial-gradient(white 15%, black 80%)"
                })
                .addTo(projectsController)

let projectElements = document.getElementsByClassName("project-link");
for (let i = 0; i < projectElements.length; i++) {
    new ScrollMagic.Scene({
                        triggerElement: ".trigger",
                        triggerHook: 0,
                        reverse: true
                    })
                    .setTween(projectElements[i], 1, {visibility: 'visible', delay: 1 + (0.5 * i)}) // add class toggle
                    // .addIndicators({name: "projects-div" })
                    .addTo(projectsController);
}



let mainController = new ScrollMagic.Controller()

let mainScene = new ScrollMagic.Scene({
                    triggerElement: ".home-div",
                    triggerHook: 0
                })
                .setPin(".home-div")
                .addTo(mainController);

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
                
                