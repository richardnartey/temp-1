// sticky header
window.onscroll = function() {stickyFunction()};

var header = document.getElementById("main-nav");
var sticky = header.offsetTop;
var backtotop = document.getElementById("backtotop");

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    backtotop.style.display = "block"
  } else {
    header.classList.remove("sticky");
  }
}


// header search close
var headerSeachClose = document.getElementById("headerSearchClosed");
var searchContainer = document.getElementById("searchContainer");
var searchNav = document.querySelector(".search-nav");

headerSeachClose.addEventListener("click", () => {
  searchContainer.style.opacity = "0";
})

searchNav.addEventListener("click", () => {
  searchContainer.style.opacity = "1";
  searchContainer.style.transform = "translateY(0)";
  searchContainer.style.pointerEvents = "all";
});

// signin modal
var signinClose = document.getElementById("signinClose");
var signinContainer = document.getElementById("signinContainer");
var headerUser = document.querySelector(".header-user");

headerUser.addEventListener("click", (event) => {
  signinContainer.style.display = "block";
})

signinClose.addEventListener("click", (event) => {
    event.preventDefault();
    signinContainer.style.display = "none";
})

// register modal
var registerContainer = document.getElementById("registerContainer");
var registerClose = document.getElementById("registerClose");
var signup = document.querySelector(".sign-up")
var signin = document.querySelector(".sign-in")
var signup2 = document.querySelector(".sign-up-2")

registerClose.addEventListener("click", () => {
    registerContainer.style.display = "none";
})

signup.addEventListener("click", () => {
  signinContainer.style.display = "none";
  registerContainer.style.display = "block";
})

signin.addEventListener("click", () => {
  signinContainer.style.display = "block";
  registerContainer.style.display = "none";
})

signup2.addEventListener("click", () =>{
  registerContainer.style.display = "block";
})


// mobile device navigation
const primaryNav = document.querySelector(".site-nav");
const NavToggle = document.getElementById("mobileToggle");

NavToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

   if (visibility === "false"){
       primaryNav.setAttribute("data-visible", true);
       NavToggle.setAttribute("aria-expanded", true);
   } else if(visibility === "true"){
       primaryNav.setAttribute("data-visible", false);
       NavToggle.setAttribute("aria-expanded", false);
   }
}); 