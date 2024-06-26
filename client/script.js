console.log("js is working");

gsap.registerPlugin(ScrollTrigger)

gsap.from('.burger-menu', {
    scrollTrigger: '.burger-menu',
    x: -50
});

// document.addEventListener("scroll", (event) => {
//     console.log('e');
// });

ScrollTrigger.create({
    trigger: '.head-img',
    onUpdate: console.log('e'),
})

let headTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        start: "top",
        end: "100%",
        // endTrigger: ".transition",
        scrub: "true",
        pin: true,
        markers: true
      }
})

// function expand() {
    headTl.fromTo(
        ".head-img",
        {
            scale: 1
        },
        {
            scale: 1,
            // opacity: 0,
            // duration: 1
        } 
    )
// 

function PageTransition() {
    let tl = gsap.timeline()

    tl.to(".transition", {
        duration: 1,
        scaleY: 1,
        transformOrigin: "bottom",
        ease: "power4.inOut",
    })

    tl.to(".transition", {
        duration: 1,
        scaleY: 0,
        transformOrigin: "top",
        ease: "power4.inOut",
        delay: 0.2,
    })
}

function contentAnimation() {
    let tl = gsap.timeline()

    tl.to("", {
        top: 0,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.75,
    })
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
                await delay(1000)
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

