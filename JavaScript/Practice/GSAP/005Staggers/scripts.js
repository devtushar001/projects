// gsap.to('.box', {
//     y: 100,
//     stagger: 0.1 // 0.1 seconds between when each ".box" element starts animating
// });

gsap.set(".box", {
    borderRadius: 0,

})

gsap.to(".box", {
    borderRadius: 100,
    duration: 1,
    y: -100,
    ease: "power1",
    yoyo: -1,
    repeat: -1,
    stagger: {
        amount: 4,
        each: 0.5,
        from: 0,
        
    }
});

