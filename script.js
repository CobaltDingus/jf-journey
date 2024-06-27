window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

gsap.registerPlugin(ScrollTrigger)

let headTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home-div',
        toggleActions: 'play pause resume reverse',
        start: 'top',
        end: '100%',
        pin: true,
        markers: true,
        scrub: true,
    }
})

// headTl.fromTo(
//     ['.head-img'],
//     {
//         scale: 1
//     },
//     {
//         scale: 15,
//         autoAlpha: 0
//     } 
// )

let projectBubbles = gsap.utils.toArray('.project-link')

let projectsTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects-div',
        toggleActions: 'play pause resume reverse',
        start: 'top',
        // pin: true,
        markers: true,
        // scrub: true,
        snap: true
    }
})

for (let bubble of projectBubbles) {
    projectsTl.from(
        bubble,
        {
            opacity: 0,
            duration: 0.5
        }
    )
}