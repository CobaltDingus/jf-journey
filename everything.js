initEverything()

function initEverything() {

    hljs.highlightAll();

let burgerMenu = document.querySelector('.burger-menu')
burgerMenu.addEventListener('click', toggleDropdown)

let dropdownMenu = document.querySelector('.dropdown')

function toggleDropdown() {
    if (dropdownMenu.classList.contains('visible')) {
        dropdownMenu.classList = "dropdown"
    } else {
        dropdownMenu.classList = "dropdown visible"
    }
}

let headController = new ScrollMagic.Controller()

let headScene = new ScrollMagic.Scene({
                    triggerElement: ".filler",
                    triggerHook: 0.9,
                })
                .setTween([".head-image", ".main-nav", ".head-message"], 1, {scale: 10, display: 'none'}) // trigger a TweenMax.to tween
                // .addIndicators({name: "filler div"})
                .addTo(headController)

let projectsController = new ScrollMagic.Controller()

let whiteScene = new ScrollMagic.Scene({
                    triggerElement: ".trigger",
                    triggerHook: 0
                })
                .setTween(".home-div", 1, {
                    backgroundImage: "radial-gradient(white 15%, black 80%)"
                })
                // .addIndicators({name: "trigger div"})
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

for (let i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
            triggerElement: slides[i],
            offset: -60
        })
        .setPin(slides[i], {pushFollowers: false})
        // .addIndicators()
        .addTo(projectPageController);
}

let parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
let parallaxSections = document.querySelectorAll(".parallaxParent")
let parallaxSectionsDiv = document.querySelectorAll(".parallaxParent > div")

for (let i = 0; i < parallaxSections.length; i++ ) {
    new ScrollMagic.Scene({
            triggerElement: parallaxSections[i]
        })
        .setTween(parallaxSectionsDiv[i], {y: "80%", ease: Linear.easeNone})
        .addTo(parallaxController);
}
                    
} // init EVERYTHING