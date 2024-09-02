var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "0% 90%",
    end:"50% 50%",
    scrub:true,
     markers:true,
}})
tl.to("#fanta",{
    top:"128%",
    left:"4%"
},'orange')
tl.to("#orange-cut",{
    top:"160%",
    left:"28%"
},'orange')
tl.to("#orange",{
    width:"20%",
    top:"160%",
    left:"80%"
},'orange')
tl.to("#leaf",{
    top:"120%",
    rotate:"150deg",
    left:"79%"
},'orange')
tl.to("#leaf2",{
    width:"8%",
    top:"110%",
    rotate:"180deg",
    left:"75%"
},'orange')
var tl22 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start: "0% 90%",
    end:"50% 50%",
    scrub:true,
     markers:true,
}})
tl22.from(".lemon",{
    rotate:"-360deg",
    left:"-60%",
     
})
