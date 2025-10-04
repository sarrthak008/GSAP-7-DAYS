
// let tl = gsap.timeline();

// gsap.from(".box",{
//     x:-200,
//     y:-100,
//     duration:1,
//     opacity:0,
//     stagger:0.3,
//     repeat:-1
// })


// gsap.from(".green-box", {
//     y: 100,
//     duration: 2,
//     opacity: 0,
//     stagger: {
//         grid: [6, 18],
//         from: "random",
//         amount: 1.5
//     },
//     repeat: -1
// })

console.log(gsap)

gsap.from(".text",{
    y:-100,
    duration: 2,
    opacity:0,
    repeat:-1,
    stagger:{
        grid:[1,7],
        amount:2,
        from:"random"
    },
})