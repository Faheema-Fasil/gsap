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
var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    right:"-20%"
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')

