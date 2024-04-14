const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: .1,
    y: 10,
    duration: 2,
    opacity: 0
});

Shery.textAnimate("h1" , {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anime2", {
    y: 50,
    stagger: .3,
    opacity: 0,
    duration: 2,
})

/*Shery.imageEffect("#imgntext", {
    style: 3,
    debug: false,
})

Shery.imageEffect("#susimagewrapper", {
    style: 3,
    debug: true
})*/

gsap.from("#imgntext img", {
    opacity: 0,
    duration: 2,
    ease: Expo,
})

/*Shery.imageEffect("#bimg img", {
    style: 3,
    debug: true,
    gooey: true,
})*/

document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to("#future video", {
        opacity: 1,
        duration: 1,
    })
})

document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
    gsap.to("#future video", {
        opacity: 0,
        duration: 1,
    })
})