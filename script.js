let headController = new ScrollMagic.Controller()

let headScene = new ScrollMagic.Scene({
                    triggerElement: ".filler",
                    triggerHook: 0.9
                })
                .setTween([".head-img", ".main-nav"], 1, {scale: 10, autoAlpha: 0}) // trigger a TweenMax.to tween
                .addIndicators({name: "trigger div"}) // add indicators (requires plugin)
                .addTo(headController);

let projectsController = new ScrollMagic.Controller()

let projectElements = document.getElementsByClassName("project-link");
for (let i = 0; i < projectElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: ".filler",
                        triggerHook: 0
                    })
                    .setTween(projectElements[i], {autoAlpha: 1, delay: 0.5 * i}) // add class toggle
                    .addIndicators({name: "projects-div" }) // add indicators (requires plugin)
                    .addTo(projectsController);
}

let whiteScene = new ScrollMagic.Scene({
    triggerElement: ".filler",
    triggerHook: 0
})
.setTween(".home-div", 1, {backgroundColor: 'white'})
.addTo(projectsController)

let mainController = new ScrollMagic.Controller()

let mainScene = new ScrollMagic.Scene({
                    triggerElement: ".home-div",
                    triggerHook: 0
                })
                .setPin(".home-div")
                .addTo(mainController);

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

// // gsap.registerPlugin(ScrollTrigger)

// let headTl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.home-div',
//         toggleActions: 'play pause resume reverse',
//         start: 'top',
//         end: '100%',
//         pin: true,
//         markers: true,
//         scrub: true,
//     }
// })

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

// let projectBubbles = gsap.utils.toArray('.project-link')

// let projectsTl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.projects-div',
//         toggleActions: 'play pause resume reverse',
//         start: 'top',
//         // pin: true,
//         markers: true,
//         // scrub: true,
//         snap: true
//     }
// })

// for (let bubble of projectBubbles) {
//     projectsTl.from(
//         bubble,
//         {
//             opacity: 0,
//             duration: 0.5
//         }
//     )
// }