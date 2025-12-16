
var crsr = document.querySelector("#cursor");
var blur= document.querySelector("#cursor-blur");




document.addEventListener("mousemove", function(dets){
    

    blur.style.left = dets.x -250 +"px";
    blur.style.top = dets.y -250 +"px";
    
}) 

document.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        x:dets.x+30,
        y:dets.y,
        duration:1,
        ease:"back.out(1)",
    })
})


var h4all = document.querySelectorAll("#nav h4");

// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         crsr.style.scale = 2;
//         crsr.style.duration = 0.3;
//     });

// });

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(crsr, { scale: 4, duration: 0.3, border: "solid 0.5px white", backgroundColor:"transparent"  });
    });
    elem.addEventListener("mouseleave", function(){
        gsap.to(crsr, { scale: 1, duration: 0.3, border: "solid 1px #ADDC2E", backgroundColor:"#ADDC2E" });
    });
});



gsap.to("#nav", {
    height: "11vh" ,
    backgroundColor: "black",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:"true",
        start:"top -10%",
        end:'top -11%',
        scrub:"2",

    }
})

gsap.to("#main", {
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -100%",
        // markers:"true",  
        scrub:2,
    }
})


gsap.from("#aboutus img,#aboutus-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:"true",
        start:"top 60%",
        end:"top 80%",

    }
})

gsap.from(".card",{
    y:80,
    opacity:0,
    // scale:0.2,
    duration:1,
    scrub:4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 85%",
        // markers:true,
    }
})

gsap.to("#colon1",{
    y:50,
    x:50,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 85%",
        // markers:true,
        scrub:4,

    }

})

gsap.to("#colon2",{
    y:-50,
    x:-50,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 85%",
        // markers:true,
        scrub:4,

        
    }

})


gsap.from("#page4 h3",{
    y:40,
    scrollTrigger:{
        trigger:"#page4 h3",
        scroller:"body",
        start:"top 70%",
        end:"top 85%",
        // markers:true,
        scrub:3,
    }
    
})











