// ----------------------------------------------Final Scripts-----------------------------------------------------

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



// ---------------------------------------------------Scripts for Review Cards-----------------------------------------------

function active(num) {
  const btns = document
    .querySelector(".round-buttons")
    .querySelectorAll(".round-btn");
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  console.log(document.querySelector(".round-buttons").querySelector(num));
  document
    .querySelector(".round-buttons")
    .querySelector(num)
    .classList.add("active");
}

document.querySelector(".round-buttons .one").addEventListener("click", () => {
  document.querySelector(".slide-div").style.left = "0px";
  active(".one");
});

document.querySelector(".round-buttons .two").addEventListener("click", () => {
  console.log(
    "Clicked two : ",
    getComputedStyle(document.querySelector(".reviews .cards-container")).width
  );
  document.querySelector(".slide-div").style.left = `-${
    getComputedStyle(document.querySelector(".reviews .cards-container")).width
  }`;
  active(".two");
});
document
  .querySelector(".round-buttons .three")
  .addEventListener("click", () => {
    console.log("Clicked three");
    document.querySelector(".slide-div").style.left = `-${
      2 *
      Number(
        getComputedStyle(
          document.querySelector(".reviews .cards-container")
        ).width.replace("px", "")
      )
    }px`;
    active(".three");
  });
document.querySelector(".four").addEventListener("click", () => {
  document.querySelector(".slide-div").style.left = `-${
    3 *
    Number(
      getComputedStyle(
        document.querySelector(".reviews .cards-container")
      ).width.replace("px", "")
    )
  }px`;
  active(".four");
});
document.querySelector(".five").addEventListener("click", () => {
  document.querySelector(".slide-div").style.left = `-${
    4 *
    Number(
      getComputedStyle(
        document.querySelector(".reviews .cards-container")
      ).width.replace("px", "")
    )
  }px`;
  active(".five");
});
document.querySelector(".six").addEventListener("click", () => {
  document.querySelector(".slide-div").style.left = `-${
    5 *
    Number(
      getComputedStyle(
        document.querySelector(".reviews .cards-container")
      ).width.replace("px", "")
    )
  }px`;
  active(".six");
});


