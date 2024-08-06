const menuContainer = document.getElementById("mobile");
const mobileToggleBtn = document.getElementById("mobile-toggle");
const dropDownMenu = document.querySelectorAll(".dropdown");
const openIcon = document.getElementById("open");
const closeIcon = document.getElementById("close");

  openIcon.style.display = 'block'
  closeIcon.style.display = 'none'

// Toggle SideNav
function mobileToggle() {
  if (menuContainer.style.display == "block") {
    menuContainer.style.display = "none";
    openIcon.style.display = 'block'
    closeIcon.style.display = 'none'

  } else {
    menuContainer.style.display = "block";
    openIcon.style.display = 'none'
    closeIcon.style.display = 'block'
  }
}

// Event Lisners
mobileToggleBtn.addEventListener("click", mobileToggle); // Toggle Menu on mobile

// toggleMegaMenu
document.addEventListener("DOMContentLoaded", function () {
  dropDownMenu.forEach((element) => {
    element.addEventListener("click", () => {
      let megaMenuParent = element.querySelector(".mega-menu");
      megaMenuParent.classList.toggle("hide");
    });
  });
});


window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let slideIndex = 0;

// Auto slide every 3 seconds
const autoSlideInterval = setInterval(nextSlide, 5000);

// Event listeners for buttons

if(prevBtn){
prevBtn.addEventListener("click", prevSlide);
}
if(nextBtn){
nextBtn.addEventListener("click", nextSlide);
}
// Previous slide function
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slider.children.length - 1;
  }
  updateSliderPosition();
}

// Next slide function
function nextSlide() {
  slideIndex++;
  if (slider && slider.children && slideIndex >= slider.children.length) {
    slideIndex = 0;
  }
  updateSliderPosition();
}

// Function to update slider position
function updateSliderPosition() {
	if (slider){
 	 slider.style.transform = `translateX(-${slideIndex * 100}%)`;
	}
}

// Pause auto slide on button hover

if(prevBtn){
prevBtn.addEventListener("mouseenter", pauseAutoSlide);
prevBtn.addEventListener("mouseleave", resumeAutoSlide);
}
if(nextBtn){
nextBtn.addEventListener("mouseenter", pauseAutoSlide);
nextBtn.addEventListener("mouseleave", resumeAutoSlide);
}
// Pause auto slide function
function pauseAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Resume auto slide function
function resumeAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 5000);
}

// Accordian Script Start =========>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// <==============Accordian Script End

// hover tab view Script

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}
let val = {
  currentTarget: {
    className: "sideHove-tab",
  },
};
window.onload = function () {
  // openCity("null", 'Front-end-mb');
};
// openCity("event", 'Front-end')
function closeTag(evt) {
  // Remove the "active" class when you hover out of the tab
  evt.currentTarget.classList.remove("active");
}

function openMobTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentmb");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("sideHove-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // console.log(cityName)
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it

const fem = document.getElementById("Front-end-mb");

if (fem){
document.getElementById("Front-end-mb").style.display = "flex";
document.getElementById("Front-end-mb").click();
}

// function handleMenuIcon(id1, id2) {
//   document.getElementById(id1).style.display = "none";
//   document.getElementById(id2).style.display = "block";
// }

// function handleOpenIcon() {
//   document.getElementById(menuContainer).style.display = "none";
// }


// function handleCloseIcon() {
//   document.getElementById(menuContainer).style.display = "block";
// }