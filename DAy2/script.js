

// gsap.to("#box",{
//     x:200,
//     duration:4,
//     delay:2,
//     scale:2
// })


// gsap.to(".heading",{
//     color:"red",
//     duration:3,
//     delay:1,
//     y:100
// })


// gsap.from("nav",{
//     y:-100,
//     duration:1.2,
//     delay:0.4
// })


// gsap.fromTo(".box",
//     {x : 100}, // from
//     { x:1 , y : 100 , duration:2} //to 
// )



gsap.from("nav",{
    y:-100,
    duration:0.5,
    delay:0.4,
    opacity:0
})

gsap.from(".box",{
    y:300,
    opacity:0,
    duration:1,
    delay:0.9
})
