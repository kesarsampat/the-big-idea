
//nav bar
// var dropBtn = $('.dropbtn');
// var dropdownContent = $('.dropdown-content');
// var dropdownTitle = $('.drop-link');

var blmDropBtn = $('.blm-dropbtn');
var blmDropdownContent = $('.blm-dropdown-content');
var blmDropdownTitle = $('.blm-drop-link');

//if hovering over dropdown items, title in nav bar also changes color 
$(function() {
  blmDropdownContent.hover(function() {
    blmDropBtn.css('background-color', '#98c1d9');
    blmDropdownTitle.css('color', '#293241');
  }, function() {
    //on mouseout, reset background color
    blmDropBtn.css('background-color', '');
    blmDropdownTitle.css('color', '');
  })
});

//below two functions both just make sure that when hovering over the title in the navbar, the dropdown items display 
$(function() {
  blmDropBtn.hover(function() {
    blmDropdownContent.css('display', 'block');
  }, function() {
    blmDropdownContent.css('display', '');
  })
});

$(function() {
  blmDropdownContent.hover(function() {
    blmDropdownContent.css('display', 'block');
  }, function() {
    blmDropdownContent.css('display', '');
  })
});

var covidDropBtn = $('.covid-dropbtn');
var covidDropdownContent = $('.covid-dropdown-content');
var covidDropdownTitle = $('.covid-drop-link');

//if hovering over dropdown items, title in nav bar also changes color 
$(function() {
  covidDropdownContent.hover(function() {
    covidDropBtn.css('background-color', '#98c1d9');
    covidDropdownTitle.css('color', '#293241');
  }, function() {
    //on mouseout, reset background color
    covidDropBtn.css('background-color', '');
    covidDropdownTitle.css('color', '');
  })
});

//below two functions both just make sure that when hovering over the title in the navbar, the dropdown items display 
$(function() {
  covidDropBtn.hover(function() {
    covidDropdownContent.css('display', 'block');
  }, function() {
    covidDropdownContent.css('display', '');
  })
});

$(function() {
  covidDropdownContent.hover(function() {
    covidDropdownContent.css('display', 'block');
  }, function() {
    covidDropdownContent.css('display', '');
  })
});


var fakeDropBtn = $('.fake-dropbtn');
var fakeDropdownContent = $('.fake-dropdown-content');
var fakeDropdownTitle = $('.fake-drop-link');

//if hovering over dropdown items, title in nav bar also changes color 
$(function() {
  fakeDropdownContent.hover(function() {
    fakeDropBtn.css('background-color', '#98c1d9');
    fakeDropdownTitle.css('color', '#293241');
  }, function() {
    //on mouseout, reset background color
    fakeDropBtn.css('background-color', '');
    fakeDropdownTitle.css('color', '');
  })
});

//below two functions both just make sure that when hovering over the title in the navbar, the dropdown items display 
$(function() {
  fakeDropBtn.hover(function() {
    fakeDropdownContent.css('display', 'block');
  }, function() {
    fakeDropdownContent.css('display', '');
  })
});

$(function() {
  fakeDropdownContent.hover(function() {
    fakeDropdownContent.css('display', 'block');
  }, function() {
    fakeDropdownContent.css('display', '');
  })
});


var calDropBtn = $('.cal-dropbtn');
var calDropdownContent = $('.cal-dropdown-content');
var calDropdownTitle = $('.cal-drop-link');

//if hovering over dropdown items, title in nav bar also changes color 
$(function() {
  calDropdownContent.hover(function() {
    calDropBtn.css('background-color', '#98c1d9');
    calDropdownTitle.css('color', '#293241');
  }, function() {
    //on mouseout, reset background color
    calDropBtn.css('background-color', '');
    calDropdownTitle.css('color', '');
  })
});

//below two functions both just make sure that when hovering over the title in the navbar, the dropdown items display 
$(function() {
  calDropBtn.hover(function() {
    calDropdownContent.css('display', 'block');
  }, function() {
    calDropdownContent.css('display', '');
  })
});

$(function() {
  calDropdownContent.hover(function() {
    calDropdownContent.css('display', 'block');
  }, function() {
    calDropdownContent.css('display', '');
  })
});


//photo gallery

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}



// back to top button
//Get the button:
mybutton = document.getElementById("home-scroll-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
