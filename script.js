var tl = gsap.timeline()
tl.from('.nav',{
    y:-50,
    stagger:.1,
    duration:.5,
    opacity:0,

})

tl.from('.nav h4',{
y:50,
duration:.5,

})
tl.from('.nav2 h4',{
    x:-1500,
    duration:.5,
stagger:.1    
})
tl.from('.center ',{
    opacity:0,
    duration:.5,
    
    x:-1050,
    })






gsap.from(".page2",{
    scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    
    start:'top 80%',
   },
   scale:.1,
   opacity:0,
   duration:1
})


gsap.from(".page3",{
    scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start:'end 10%',
   },
   scale:.2,
   opacity:0,
   duration:2,
   
   
})
gsap.from(".page4 .left",{

   x:+10,
   yoyo:true,
   repeat:-1,

   
   
})
gsap.from(".page4 .right",{
   
    x:-10,
    yoyo:true,
    repeat:-1,
})