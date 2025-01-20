const crsr = document.querySelector(".cursor");
document.querySelector(".main")

document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x + 1 + "px";
  crsr.style.top = dets.y + 1 + "px";
})


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


const animationMoving = gsap.timeline({
  scrollTrigger:{
    trigger: ".leaf1 h1",
    scroller:".main",
    // markers:true,
    start:"top 32%",
    end:"top 0",
    scrub:2
  }
})
const  animationColor = gsap.timeline({
  scrollTrigger:{
    trigger:".leaf1 h1",
    scroller:".main",
    // markers:true,
    start:"top -118%",
    end:"top -120%",
    scrub:2
  }
})
const animationColor2 = gsap.timeline({
  scrollTrigger:{
    trigger:".leaf1 h1",
    scroller:".main",
    // markers:true,
    start:"top -358%",
    end:"top -360%",
    scrub:2
  }
})
const animationColor3 = gsap.timeline({
  scrollTrigger:{
    trigger:".leaf1 h1",
    scroller:".main",
    // markers:true,
    start:"top -788%",
    end:"top -790%",
    scrub:2
  }
})
const animationLeaf4Header = gsap.timeline({
  scrollTrigger:{
    trigger:".leaf4RightHeader",
    scroller:".main",
    // markers:true,
    start:"top 62%",
    end:"top 60%",
    scrub:2
  }
})
animationMoving.to(".leaf1 h1",{
  x:-90,
  duration:1,
},"anim")
animationMoving.to(".leaf1 h2",{
 x:100,
 duration:1,
},"anim")
animationMoving.to(".leaf1 p",{
  y:80,
  duration:1,
},"anim")
animationMoving.to(".leaf2 video",{
  width:"92%"
},"anim")
animationColor.to(".main",{
  backgroundColor:"#fff"
},"color")
animationColor2.to(".main",{
  backgroundColor:"#111"
},"color")
animationColor3.to(".main",{
  backgroundColor:"#EDBFFF"
},"color")
animationColor2.to(".navCircle",{
  backgroundColor:"#fff"
},"color")
animationColor.to(".navCircle",{
  backgroundColor:"#111"
},"color")
animationColor3.to(".navCircle",{
  backgroundColor:"#111"
},"color")
animationLeaf4Header.to(".leaf4RightHeader h1",{
  y:50,
  duration:2,
},"down")
animationLeaf4Header.to(".leaf4RightCircle ",{
  y:60,
  duration:2,
},"down")

const boxes = document.querySelectorAll(".box")
 boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    const att = elem.getAttribute("data-image")
    crsr.style.width = "400px"
    crsr.style.height = "300px"
    crsr.style.borderRadius = "0"
    crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
    const att = elem.getAttribute("data-image")
    crsr.style.width = "20px"
    crsr.style.height = "20px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = "none"
  })
})

var marqueeText = document.querySelector("#marqueeText")
var purple = document.querySelector("#purple")
var h4 = document.querySelectorAll("#navLinks h4")
h4.forEach(function(link){ 
  link.addEventListener("mouseenter",function(){
    let text = '';
    switch(link.id){
      case "homeLink":
        text = "Home Home Home Home "
        break;
        case "studioLink":
          text = "Studio Studio  Studio "
          break;
        case "workLink":
          text = "Work Work Work Work "
          break;
        case "contactLink":
          text = "Contact Contact Contact "
          break;
          default:
            text = '';
    }
    marqueeText.textContent = text;
    purple.style.display = "block"
    purple.style.opacity = "1"
  })
  navLinks.addEventListener("mouseleave",function(){
    purple.style.display = "none"
    purple.style.opacity = "0"
  })
})


