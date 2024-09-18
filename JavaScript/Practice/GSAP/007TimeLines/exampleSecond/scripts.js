let tl = gsap.timeline({
    default: {
        duration: 1,
    },
})
.to("h1", {
    y: -100,
    color: "white",
})
.to(".box1", {
    x: -100,
    backgroundColor: "cyan",
})
.to(".box2", {
    y: 100,
    backgroundColor: "purple",
})
.to(".box3", {
    x: 100,
    backgroundColor: "crimson"
})
