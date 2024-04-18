// const { element } = require("prop-types");
import themes from "../variables.json";
gsap.registerPlugin(ScrollTrigger);
var menu = document.querySelector(".nav-container");
var root = document.documentElement;
const p1 = getComputedStyle(root);
var leftLink = document.querySelectorAll(".left-social-links ul li a");
var rightLink = document.querySelector(".right-mail-link a");
// console.log(p1.getPropertyValue())
// var textOnly = document.querySelector(".text_only");
// const myText = new SplitType(textOnly);
// var textOnlyChar = document.querySelectorAll(".text_only .line .word .char");
var menu_link = document.querySelector(".nav-links");
var cursor = document.querySelector(".follow_cursor");
var workBtn = document.querySelector(".workbtn");
const Scroll_more = document.getElementById("scroll_mouse");
const x = document.querySelector("#l_time");
var modeChangerSun = document.querySelector("#Sun");
var modeChangerMoon = document.querySelector("#Moon");
const scrollers = document.querySelectorAll(".scroller");
const about_heading = document.querySelectorAll(".about_heading");




gsap.registerPlugin(ScrollTrigger);
const getDateTime = () => {
  var date = new Date();
  var time = date.toLocaleTimeString("en-US");
  x.innerText = time;
  // console.log("date",date.getFullYear())
  document.getElementById("year").innerText= date.getFullYear()
};

getDateTime();

window.addEventListener("load", function () {
  // Scroll to the top of the page
  console.log("first",this.window)
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: smooth scrolling effect
  });
});

// if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
//   addAnimation();
// }

// function addAnimation() {
//   scrollers.forEach((item) => {
//     item.setAttribute("data-animated", true);

//     const scrollerInner = item.querySelector(".loop-container");
//     const scrollerContent = Array.from(scrollerInner.children);
//     scrollerInner.style.animationDuration =
//       scrollerInner.offsetWidth / 150 + "s";
//     scrollerContent.forEach((i) => {
//       const duplicatedItem = i.cloneNode(true);
//       duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//     });
//   });
// }
let currentScroll = 0;
let isScrollingDown = true;
var tl = gsap.timeline(
  // {
  // oncomplete: document.querySelector("body").classList.remove("overflow_class"),
// }
);
detectColorScheme();
// Moon button set to be hidden by default
// basic function to convert reveal class into sub elements
const revealToSpan = (classname) => {
  document.querySelectorAll(`.${classname}`).forEach((elem) => {
    let parent = document.createElement("span");
    let child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.textContent = elem.textContent;
    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
};

revealToSpan("reveal");
revealToSpan("reveal1");
revealToSpan("reveal2");
// timeline starts for starting loader and hero section
tl.from(".reveal .child", {
  y: 100,
  ease: Circ.easeInOut,
  duration: 0.75,
})
  .to(".reveal .child", {
    y: -100,
    ease: Circ.easeInOut,
    duration: 0.75,
  })
  .from(".reveal1 .child", {
    y: 100,
    ease: Circ.easeInOut,
    duration: 0.75,
  })
  .to(".reveal1 .child", {
    y: -100,
    ease: Circ.easeInOut,
    duration: 0.75,
  })
  .from(".reveal2 .child", {
    y: 100,
    ease: Circ.easeInOut,
    duration: 0.75,
  })
  .to(".reveal2 .child", {
    y: -100,
    ease: Circ.easeInOut,
    duration: 0.75,
  })
  .to("#mainloader", {
    height: 0,
    ease: Circ.easeInOut,
    duration: 1,
  })
  .to("#brownpage", {
    top: 0,
    height: "100%",
    ease: Circ.easeInOut,
    duration: 1,
    delay: -1,
  })
  .to("#brownpage", {
    height: 0,
    ease: Circ.easeInOut,
    duration: 2,
    delay: -0.5,
  })
  .to(".nav-container", { opacity: "1", duration: 0.2 }, "-=0.3")
  .to(".follow_cursor", {
    display: "block",
  })
  .to(".hero-div", { opacity: "1", duration: 0.8 }, "-=0.1")
  .to(".first_hero", { opacity: "1", duration: 0.5 }, "-=0.2")
  .to(".left-social-links", { opacity: "1", duration: 0.5 })
  .to(".right-bar", { opacity: "1", duration: 0.5 }, "-=0.5")
  .to("body", { onComplete: removeClass }, "-=0.5");

    function removeClass() {
      const mainLoader = document.querySelector("body");
      mainLoader.classList.remove("overflow_class");
    }

// Follow cursor
gsap.set(cursor, { xPercent: -50, yPercent: -50 });
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);
  gsap.to(cursor, { x: clientX, y: clientY });
});

// cursor remove on work button hover homepage
// workBtn.onmouseover = () => {
//   cursor.style.display = "none";
// };

// workBtn.onmouseleave = () => {
//   cursor.style.display = "block";
// };

//Mode changer button for Sun/Moon icon
modeChangerMoon.addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  detectColorScheme();
});

modeChangerSun.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  detectColorScheme();
});

function detectColorScheme() {
  var theme = "light"; //default to light
  //local storage is used to override OS theme settings
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      var theme = "dark";
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      document.getElementById("mainLogo").src = "../images/logo_2.svg";
      document.getElementById("juice").src = "../images/juice.png";
      document.getElementById("lightMode").classList.add("hidden");
      document.getElementById("darkMode").classList.remove("hidden");
      modeChangerSun.style.display = "none";
      modeChangerMoon.style.display = "inline";
      console.log("1");
      // helloTheme(theme);
    } else if (localStorage.getItem("theme") == "light") {
      console.log("Light theme incoming!!!");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      document.getElementById("mainLogo").src = "../images/logo.svg";
      document.getElementById("juice").src = "../images/Juice_invert.png";
      modeChangerSun.style.display = "inline";
      modeChangerMoon.style.display = "none";
      document.getElementById("lightMode").classList.remove("hidden");
      document.getElementById("darkMode").classList.add("hidden");
      // helloTheme(theme);
      console.log("2");
      return false;
    }
  } else if (theme == "light") {
    document.querySelector("body").classList.add("theme-light");
    document.querySelector("body").classList.remove("theme-dark");
    document.getElementById("mainLogo").src = "../images/logo.svg";
    document.getElementById("juice").src = "../images/Juice_invert.png";
    modeChangerSun.style.display = "inline";
    modeChangerMoon.style.display = "none";
    document.getElementById("lightMode").classList.remove("hidden");
    document.getElementById("darkMode").classList.add("hidden");
    console.log("3");
    // helloTheme(theme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    var theme = "dark";
    document.querySelector("body").classList.add("theme-dark");
    document.querySelector("body").classList.remove("theme-light");
    document.getElementById("mainLogo").src = "../images/logo_2.svg";
    document.getElementById("juice").src = "../images/juice.png";
    modeChangerSun.style.display = "none";
    modeChangerMoon.style.display = "inline";
    document.getElementById("lightMode").classList.remove("hidden");
    document.getElementById("darkMode").classList.add("hidden");
    console.log("4");
    // helloTheme(theme);
  }
}

var tl_about = gsap.timeline({
  scrollTrigger: {
    trigger: ".about_section",
    start: "-150px center",
    end: "200px center",
    scrub: true,
    // markers:true
  },
});
tl_about
  .to(".about_heading h1 ", {
    top: "0px",
    opacity: "1",
    // duration:"5s"
  })
  .to(
    ".about_heading span ",
    {
      top: "0px",
      opacity: "1",
    },
    "-=0.3"
  )
  .to(".about_section .intro .para p", {
    top: "0px",
    stagger: 0.1,
  });

gsap.to(".about_section", {
  scrollTrigger: {
    trigger: ".about_section",
    start: "-250px center",
    end: "200px center",
    scrub: true,
    // markers:true
  },
  width: "100%",
  borderRadius: "0px",
  transform: "TranslateY(0%)",
  duration: 1,
});

gsap.to(".about_section .whatcanIdo", {
  scrollTrigger: {
    trigger: ".about_section",
    start: "top center",
    end: "bottom bottom",
    scrub: true,
    // markers: true,
  },

  opacity: "1",
});

document
  .querySelector(".contact_section .button")
  .addEventListener("mouseover", () => {
    document.querySelector(".button__icon__bg").style.transform = "scale(1)";
    document.querySelector(".button__icon svg").style.opacity = "1";
  });
document
  .querySelector(".contact_section .button")
  .addEventListener("mouseleave", () => {
    document.querySelector(".button__icon__bg").style.transform = "scale(0.2)";
    document.querySelector(".button__icon svg").style.opacity = "0";
  });
