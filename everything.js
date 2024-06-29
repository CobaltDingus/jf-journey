initEverything()

function initEverything() {
let headController = new ScrollMagic.Controller()

let headScene = new ScrollMagic.Scene({
                    triggerElement: ".filler",
                    triggerHook: 0.9,
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
    let target = projectElements[i]
    let projectTl = new TimelineMax()

    projectTl.from(target, 0.25, {visibility: 'hidden'})
    projectTl.to(target, 0.25, {visibility: 'visible', delay: 1 + (0.5 * i)})
    new ScrollMagic.Scene({
                        triggerElement: ".trigger",
                        triggerHook: 0,
                    })
                    .setTween(projectTl) // add class toggle
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


// ============================= PROJECT PAGE =============================
let projectPageController = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: 0,
    }
});

let slides = document.querySelectorAll(".wipe,.overview");

for (let i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
            triggerElement: slides[i],
            offset: -60
        })
        .setPin(slides[i], {pushFollowers: false})
        // .addIndicators()
        .addTo(projectPageController);
}

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
					// .addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
					// .addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
					// .addIndicators()
                    .addTo(controller);
                    
} // init EVERYTHING
