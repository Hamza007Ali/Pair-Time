// Create the array with the text you want to write
var txt2write = new Array(
  "An innovative <span>marketplace</span> for pair",
  "problem-solving. Get unstuck, or",
  "monetize your knowledge by helping",
  "others."
);

// Variables
var speed = 60; // You can set the speed here. + is slower
var index = 0;
text_pos = 0;
var str_length = txt2write[0].length;
var contents, row;

// Function
function type_text() {
  // Init the content with blank
  contents = "";
  row = Math.max(0, index - 9);
  while (row < index) {
    // Each sentence will end with a <br />
    contents += txt2write[row++] + "\r<br />";
  }

  // Write the text
  $("div.writeit").html(
    contents +
      txt2write[index].substring(0, text_pos) +
      "<span class='after'>_</span>"
  );

  if (text_pos++ == str_length) {
    text_pos = 0;
    index++;
    if (index != txt2write.length) {
      str_length = txt2write[index].length;
      setTimeout("type_text()", 800);
    }
  } else {
    setTimeout("type_text()", speed);
  }
}

type_text();

// vars
("use strict");
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30;
window.onload = (function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });

  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  });

  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });

  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;

    touchPosDiff = touchStartPos - touchEndPos;

    console.log(touchPosDiff);
    console.log(touchStartPos);
    console.log(touchEndPos);

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }
  });
})

// hamburger javascript...
let navWrapper = document.querySelector('.nav-wrapper'),
navToogler =  document.querySelector('.nav-toogler')

navToogler.addEventListener('click', function (event) {
navWrapper.classList.toggle('active')
})