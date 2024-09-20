var xfy = gsap.timeline({
    defaults: {
        opacity: 0,
        ease: "linear",
        duration: 1,
    }
});

xfy.fromTo(".sidebar", {width: 0}, {
    opacity: 1,
    width: "30%",
});

xfy.fromTo(".main-img", { x: 0 }, { opacity: 1 });

xfy.fromTo(".content", {x: 0}, { opacity: 1 })

// const gsap = gsap.timeline({
//     defaults: {
//         opacity: 0,
//         ease: 'linear',
//         duration: 1,
//     }
// })
//animate ".box" from an opacity of 0 to an opacity of 0.5
// gsap.fromTo(".sidebar", { opacity: 0 }, { opacity: 0.5, duration: 1 });