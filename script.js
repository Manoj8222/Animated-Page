var tl = gsap.timeline()

tl.from("#nav",{
    opacity:0,
    delay:0.4,
    
})
tl.from("#nav .h1,#nav-part2 h3,#nav h4",{
    y:-100,
    duration:0.5,
    opacity:0,
    stagger:0.2
})
gsap.from("#right img",{
    opacity:0,
    scale:2,
    duration:0.5,
    delay:2.2
})
tl.from("#left h1",{
    x:-700,
    opacity:0,
    scale:2,
})
tl.from("#left hr",{
    y:200,
    opacity:0
})
tl.from("#left-1 h3",{
    y:200,
    opacity:0,
    scale:0,
    stagger:0.3 
})

gsap.from("#page2-left,#page2-right img",{
    scale:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2-left,#page2-right img",
        scroller:"body", 
        // markers:true,
        start:"top 100%"
    }
})
