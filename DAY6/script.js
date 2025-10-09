

// feather scroll 
const scroll = new FeatherScroll({
  smooth: true, // Enable smooth scrolling
  duration: 1.2, // Scroll duration (seconds)
  easing: (t) => 1 - Math.pow(1 - t, 3), // Easing function
  direction: 'vertical', // 'vertical' | 'horizontal'
  gestureDirection: 'both', // Mouse/touch gesture control
  mouseSensitivity: 1, // Sensitivity for wheel scrolling
  touchSensitivity: 2, // Sensitivity for touch scrolling
  infinite: false // Infinite scrolling
});



// page 

let page1timeLine = gsap.timeline()

page1timeLine.to(".loader div span",{
    color:'gray',
    duration:2,
    repeat:-1
})

page1timeLine.to(".loader div span",{
    display:"none",
    oncomplete:()=>{
        gsap.to(".loader",{
             opacity:0,
            duration:0.1,
            display:"none"
        })
    }
})

document.addEventListener("DOMContentLoaded",()=>{
    page1timeLine.play()
})


page1timeLine.from(".bg-img-container",{
   width:200,
   opacity:0,
   duration:1.2,
   delay:1,
   rotate:"45deg"
})

page1timeLine.from(".center-container",{
    height:0,
    duration:1
})

gsap.from(".navbar",{
     y:-100,
     duration:0.5,
     opacity:0
})




// page 2 animation 

gsap.from(".text-container p",{
    y:20,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        // markers:true,
        trigger:".page2",
        start:"30% 70%",
        end:"50% 50%",
        scrub:true
    }

})

// cards animation 
let movediv = document.querySelector(".overlay-div1")
document.querySelector(".card-img-container img").addEventListener("mouseenter",(e)=>{
    movediv.style.display = "flex"
      gsap.to(".overlay-div1",{
        x:e.x/1.3,
        y:e.y/2,
        duration:0.5,
      })
})

document.querySelector(".card-img-container img").addEventListener("mouseleave",(e)=>{
    movediv.style.display = "none"
})




// naviagtion animation 

let navTimeline = gsap.timeline()

navTimeline.to(".navigation-page",{
    top:0,
    duration:0.5,
    opacity:1,
    display:"flex"
})

navTimeline.from(".navigation-name",{
    y:20,
    duration:0.3,
    opacity:0,
    stagger:0.1
})

navTimeline.pause()

let isNavbarOpen = 0 

document.querySelector(".menubtn").addEventListener("click",()=>{
     if(isNavbarOpen == 0){
        navTimeline.play()
        isNavbarOpen = 1
     }else{
        navTimeline.reverse()
        isNavbarOpen = 0
     }
})



// loader animation 

 
