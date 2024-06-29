barba.hooks.enter((data) => {
    console.log('e');
    // window.scrollTo(0, 0);
  });

  barba.hooks.after(() => {
    const bottomDOM = document.getElementsByTagName("body")[0]
    const newScript = document.createElement("script")
    const oldScript = document.querySelector(".main-script")
    newScript.src = "./everything.js"
    newScript.className = "main-script"
    oldScript.remove()
    bottomDOM.appendChild(newScript)
    })

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
        duration: 2,
        opacity: 0,
        // scaleY: 0,
        // transformOrigin: "top",
        ease: "power4.inOut",
        delay: 3,
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
    sync: false,
    transitions: [
        {
            async leave(data) {
                window.scrollTo(0, 0);
                const done = this.async()

                PageTransition()
                await delay(2000)
                done()
            },
        }
    ]
})
                
               