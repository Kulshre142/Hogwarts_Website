// --------------Scripts for navbar-responsive---------------------
let menuOpen = false

function showElement(query) {
  document.querySelector(query).style.visibility = "visible";
  document.querySelector(query).style.display = "block";
}
function hideElement(query) {
  document.querySelector(query).style.visibility = "collapse";
  document.querySelector(query).style.display = "none";
}
function openMenu() {
  showElement(".nav-container ul");
  showElement(".nav-container .close");
  menuOpen = true;
}
function closeMenu() {
  hideElement(".nav-container ul");
  hideElement(".nav-container .close");
  menuOpen = false;
}
// document.querySelector(".hamburger").addEventListener("click", openMenu)
// document.querySelector(".close").addEventListener("click", closeMenu);


function toggleHam(e) {
  const ul = document.querySelector(".nav-container ul")
  const a = document.querySelectorAll(".nav-container ul li a");
  const hamburger = document.querySelector(".hamburger");
  if (!menuOpen && hamburger.contains(e.target)) {
    console.log("Opening Menu")
    openMenu()
  }
  else if (menuOpen && !ul.contains(e.target)) {
    console.log("Closing Menu")
    closeMenu()
  }
  else{
    return null
  }
}
window.addEventListener("click",toggleHam)

document.querySelectorAll('.nav-container ul li a').forEach((a) => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 768)
      console.log("Closing Menu for small device")
      closeMenu()
  })
})


// ---------------------------------------------Scripts for Main-Caroussel----------------------------------

var imageDivs = document
  .querySelector(".caroussel-container")
  .querySelectorAll(".image img");
imageDivs.forEach((imageDiv) => {
  imageDiv.width = window.innerWidth;
});

let moved = false;
const windowWidth = window.innerWidth;
function slide() {
  if (!moved) {
    ele = document.querySelector(".caroussel");
    left = ele.style.left;
    left = left.replace("px", "");
    newLeft = Number(left) - windowWidth;
    if (newLeft == -4 * windowWidth) {
      newLeft = 0;
    }
    // console.log(newLeft);
    ele.style.left = `${newLeft}px`;
    // colorRoundButton(newLeft.toFixed(2));
  } else {
    moved = false;
  }
}
window.onload = (e) => {
  setInterval(slide, 3000);
};

// -----------------------------------------------------Scripts for Gallery-----------------------------------------------------

// Function to show selected image on the showcase
function show(e) {
  const id = e.target.id;
  console.log(id.includes("img"));
  if (id.includes("img")) {
    const src = e.target.src;
    console.log(src);
    document.querySelector("#showcase-img").setAttribute("src", src);
  }
}

const showcase = document
  .querySelector("#showcase-div")
  .addEventListener("click", show);

function moveRight() {
  let ele = document.querySelector(".gallery .image-container");
  let width = getComputedStyle(ele).width.replace("px", "");
  let margin = getComputedStyle(
    document.querySelector(".gallery .images img")
  ).marginRight.replace("px", "");
  left = ele.scrollLeft;
  let newLeft = left + 104 + 2 * Number(margin);
  console.log(newLeft, ele.scrollWidth - width);
  ele.scrollLeft = `${newLeft}`;
  console.log(ele.scrollLeft);
  if (newLeft > ele.scrollWidth - width) {
    ele.scrollLeft = 0;
  }
}

function moveLeft() {
  let ele = document.querySelector(".gallery .image-container");
  let width = getComputedStyle(ele).width.replace("px", "");
  let margin = getComputedStyle(
    document.querySelector(".gallery .images img")
  ).marginRight.replace("px", "");
  left = ele.scrollLeft;
  let newLeft = left - 104 - 2 * Number(margin);
  ele.scrollLeft = `${newLeft}`;
  if (newLeft < 0) {
    ele.scrollLeft = ele.scrollWidth;
  }
}

document.querySelector(".nav-left").addEventListener("click", moveLeft);
document.querySelector(".nav-right").addEventListener("click", moveRight);
