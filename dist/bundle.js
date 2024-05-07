(()=>{"use strict";gsap.registerPlugin(ScrollTrigger),document.querySelector(".nav-container");var e=document.documentElement;getComputedStyle(e),document.querySelectorAll(".left-social-links ul li a"),document.querySelector(".right-mail-link a"),document.querySelector(".nav-links");var t=document.querySelector(".follow_cursor");document.querySelector(".workbtn"),document.getElementById("scroll_mouse");const o=document.querySelector("#l_time");var n,r,a=document.querySelector("#Sun"),i=document.querySelector("#Moon");document.querySelectorAll(".scroller"),document.querySelectorAll(".about_heading"),gsap.registerPlugin(ScrollTrigger),r=(n=new Date).toLocaleTimeString("en-US"),o.innerText=r,document.getElementById("year").innerText=n.getFullYear(),window.addEventListener("load",(function(){console.log("first",this.window),window.scrollTo({top:0,behavior:"smooth"})}));var c=gsap.timeline();d();const l=e=>{document.querySelectorAll(`.${e}`).forEach((e=>{let t=document.createElement("span"),o=document.createElement("span");t.classList.add("parent"),o.classList.add("child"),o.textContent=e.textContent,t.appendChild(o),e.innerHTML="",e.appendChild(t)}))};function d(){var e="light";if(localStorage.getItem("theme")){if("dark"==localStorage.getItem("theme"))e="dark",document.querySelector("body").classList.add("theme-dark"),document.querySelector("body").classList.remove("theme-light"),document.getElementById("mainLogo").src="../images/logo_2.svg",document.getElementById("juice").src="../images/juice.png",document.getElementById("lightMode").classList.add("hidden"),document.getElementById("darkMode").classList.remove("hidden"),a.style.display="none",i.style.display="inline",console.log("1");else if("light"==localStorage.getItem("theme"))return console.log("Light theme incoming!!!"),document.querySelector("body").classList.add("theme-light"),document.querySelector("body").classList.remove("theme-dark"),document.getElementById("mainLogo").src="../images/logo.svg",document.getElementById("juice").src="../images/Juice_invert.png",a.style.display="inline",i.style.display="none",document.getElementById("lightMode").classList.remove("hidden"),document.getElementById("darkMode").classList.add("hidden"),console.log("2"),!1}else"light"==e?(document.querySelector("body").classList.add("theme-light"),document.querySelector("body").classList.remove("theme-dark"),document.getElementById("mainLogo").src="../images/logo.svg",document.getElementById("juice").src="../images/Juice_invert.png",a.style.display="inline",i.style.display="none",document.getElementById("lightMode").classList.remove("hidden"),document.getElementById("darkMode").classList.add("hidden"),console.log("3")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(e="dark",document.querySelector("body").classList.add("theme-dark"),document.querySelector("body").classList.remove("theme-light"),document.getElementById("mainLogo").src="../images/logo_2.svg",document.getElementById("juice").src="../images/juice.png",a.style.display="none",i.style.display="inline",document.getElementById("lightMode").classList.remove("hidden"),document.getElementById("darkMode").classList.add("hidden"),console.log("4"))}l("reveal"),l("reveal1"),l("reveal2"),c.from(".reveal .child",{y:100,ease:Circ.easeInOut,duration:.75}).to(".reveal .child",{y:-100,ease:Circ.easeInOut,duration:.75}).from(".reveal1 .child",{y:100,ease:Circ.easeInOut,duration:.75}).to(".reveal1 .child",{y:-100,ease:Circ.easeInOut,duration:.75}).from(".reveal2 .child",{y:100,ease:Circ.easeInOut,duration:.75}).to(".reveal2 .child",{y:-100,ease:Circ.easeInOut,duration:.75}).to("#mainloader",{height:0,ease:Circ.easeInOut,duration:1}).to("#brownpage",{top:0,height:"100%",ease:Circ.easeInOut,duration:1,delay:-1}).to("#brownpage",{height:0,ease:Circ.easeInOut,duration:2,delay:-.5}).to(".nav-container",{opacity:"1",duration:.2},"-=0.3").to(".follow_cursor",{display:"block"}).to(".hero-div",{opacity:"1",duration:.8},"-=0.1").to(".first_hero",{opacity:"1",duration:.5},"-=0.2").to(".left-social-links",{opacity:"1",duration:.5}).to(".right-bar",{opacity:"1",duration:.5},"-=0.5").to("body",{onComplete:function(){document.querySelector("body").classList.remove("overflow_class")}},"-=0.5"),gsap.set(t,{xPercent:-50,yPercent:-50}),window.addEventListener("mousemove",(e=>{const{clientX:o,clientY:n}=e;Math.round(o/window.innerWidth*100),Math.round(n/window.innerHeight*100),gsap.to(t,{x:o,y:n})})),i.addEventListener("click",(()=>{localStorage.setItem("theme","light"),d()})),a.addEventListener("click",(()=>{localStorage.setItem("theme","dark"),d()})),gsap.timeline({scrollTrigger:{trigger:".about_section",start:"-150px center",end:"200px center",scrub:!0}}).to(".Scroll_heading",{opacity:"0",top:"3%"}).to(".about_section",{boxShadow:"none"},"-=0.3").to(".about_heading h1 ",{top:"0px",opacity:"1"}).to(".about_heading span ",{top:"0px",opacity:"1"},"-=0.3").to(".about_section .intro .para p",{top:"0px",stagger:.1}),gsap.to(".about_section",{scrollTrigger:{trigger:".about_section",start:"-250px center",end:"200px center",scrub:!0},width:"100%",borderRadius:"0px",transform:"TranslateY(0%)",duration:1}),gsap.to(".about_section .whatcanIdo",{scrollTrigger:{trigger:".about_section",start:"top center",end:"bottom bottom",scrub:!0},opacity:"1"}),document.querySelector(".contact_section .button").addEventListener("mouseover",(()=>{document.querySelector(".button__icon__bg").style.transform="scale(1)",document.querySelector(".button__icon svg").style.opacity="1"})),document.querySelector(".contact_section .button").addEventListener("mouseleave",(()=>{document.querySelector(".button__icon__bg").style.transform="scale(0.2)",document.querySelector(".button__icon svg").style.opacity="0"})),new hoverEffect({parent:document.querySelector(".my-div"),intensity:.3,image1:"../images/at.png",image2:"../images/main_home_black.png",displacementImage:"../images/main_home_white.png"})()})();