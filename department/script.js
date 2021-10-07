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

// -----------------------------------------------------Scripts for Gallery-----------------------------------------------------

// Function to show selected image on the showcase

// ----------------------------------------------Scripts for Video Gallery------------------------------------------------------
let videoPlaying = false
let videoEnded = false

function setInitialStateOfVideos() {
  document
    .querySelectorAll(`.video-projects .video .play-btn`)
    .forEach((btn) => {
      btn.classList.add("show");
      btn.classList.remove("hide");
    });

  const otherVideos = document.querySelectorAll(`.video-projects .video video`);
  otherVideos.forEach((video) => {
    video.removeAttribute("controls");
    video.pause();
  });
}

function videoControlDisplay(e) {
  setInitialStateOfVideos();
  e.target.parentNode.classList.add("hide");
  e.target.parentNode.classList.remove("show");
  const className = e.target.parentNode.classList[1];
  const video = document.querySelector(`.video-projects .${className} video`);
  console.log(video);
  video.setAttribute("controls", "");
  video.play();
  clearInterval(autoslide)
  focusVideo = Number(className.replace("video", ""))
  document
    .querySelector(`.video-projects .video-container .video${focusVideo}`)
    .scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  let videos = document.querySelectorAll(`.video-projects .video`);
  videos.forEach((video) => {
    video.style.transform = "scale(0.9)";
  });
  document.querySelector(
    `.video-projects .video-container .video${focusVideo}`
  ).style.transform = "scale(1)";
  videoPlaying = true
    video.addEventListener("ended", (event) => {
      console.log(e.target.parentNode.classList);
      e.target.parentNode.classList.add("show");
      e.target.parentNode.classList.remove("hide");
      video.removeAttribute("controls");
      videoEnded = true;
      videoPlaying = false
      return
    });
}

let playBtns = document.querySelectorAll(".video-projects .video .play-btn");
playBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => videoControlDisplay(e));
});

let focusVideo = 1;
let prevScroll = 0;

function autoslide() {

  if (!videoPlaying) {
    setInitialStateOfVideos();
  }
  let currentScroll = document.querySelector(
    ".video-projects .slide-container"
  ).scrollLeft;

  if (currentScroll === prevScroll && !videoPlaying) {
    let videos = document.querySelectorAll(`.video-projects .video`);
    videos.forEach((video) => {
      video.style.transform = "scale(0.9)";
      video.classList.remove("focus");
    });

    if (focusVideo === 7) {
      focusVideo = 1;
    }
    console.log(focusVideo)
    document.querySelector(
      `.video-projects .video-container .video${focusVideo}`
    ).style.transform = "scale(1)";

    document.querySelector(
      `.video-projects .video-container .video${focusVideo}`
    ).classList.add("focus");

    document
      .querySelector(`.video-projects .video-container .video${focusVideo}`)
      .scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    prevScroll = document.querySelector(
      ".video-projects .slide-container"
    ).scrollLeft;

    focusVideo += 1;
  } else {
    prevScroll = document.querySelector(
      ".video-projects .slide-container"
    ).scrollLeft;
  }
}
setInterval(() => {
  isInViewport(document.querySelector(`.video-projects .slide-container`)) ? autoslide() : "";
}, 3000);


function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
}


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


