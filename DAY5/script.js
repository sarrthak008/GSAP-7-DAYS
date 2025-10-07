
const scroll = new FeatherScroll({
  smooth: true, // Enable smooth scrolling
  duration: 5, // Scroll duration (seconds)
  easing: (t) => 1 - Math.pow(1 - t, 3), // Easing function
  direction: 'vertical', // 'vertical' | 'horizontal'
  gestureDirection: 'both', // Mouse/touch gesture control
  mouseSensitivity: 1, // Sensitivity for wheel scrolling
  touchSensitivity: 2, // Sensitivity for touch scrolling
  infinite: false // Infinite scrolling
});



gsap.from(".para",{
    y:100,
    duration: 10,
    opacity:0,
    scrollTrigger:{
        trigger:".page2",
        markers:0,
        start:"20% 50%",
        end:"30% 10%",
        scrub:true,
        scrub:1
    }
})


gsap.from(".img",{
    y:100,
    duration:5,
    opacity:0,
    scrollTrigger:{
        trigger:".page2",
        // markers:true,
        start:"30% 60%",
        end:"55% 10%",
        scrub:true

    }
})