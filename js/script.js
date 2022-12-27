//get ip, city, state & country
$.ajax({
  url: "https://geolocation-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function (location) {
    $("#country").html(location.country_name);
    let getCountry = location.country_name;

    if (getCountry == "United States") {
      document.querySelector(".dollarcomp").style.display = "block";
      document.querySelector(".nairacomp").style.display = "none";
      document.querySelector(".cediscomp").style.display = "none";
      document.querySelector(".tab-btns").style.display = "none";
      document.querySelector("#comparison_table_naira").style.display = "none";
      document.querySelector("#comparison_table_dollar").style.display =
        "block";
      document.querySelector("#comparison_table_cedis").style.display = "none";
    } else if (getCountry == "Nigeria") {
      document.querySelector(".dollarcomp").style.display = "none";
      document.querySelector(".nairacomp").style.display = "block";
      document.querySelector(".tab-btns").style.display = "inline-block";
      document.querySelector(".cediscomp").style.display = "none";
      document.querySelector("#comparison_table_naira").style.display = "block";
      document.querySelector("#comparison_table_dollar").style.display = "none";
      document.querySelector("#comparison_table_cedis").style.display = "none";
    } else if (getCountry == "Ghana") {
      document.querySelector(".dollarcomp").style.display = "none";
      document.querySelector(".nairacomp").style.display = "none";
      document.querySelector(".tab-btns").style.display = "none";
      document.querySelector(".cediscomp").style.display = "block";
      document.querySelector("#comparison_table_naira").style.display = "none";
      document.querySelector("#comparison_table_dollar").style.display = "none";
      document.querySelector("#comparison_table_cedis").style.display = "block";
    } else {
      document.querySelector(".dollarcomp").style.display = "block";
      document.querySelector(".nairacomp").style.display = "none";
      document.querySelector(".cediscomp").style.display = "none";
      document.querySelector(".tab-btns").style.display = "none";
      document.querySelector("#comparison_table_naira").style.display = "none";
      document.querySelector("#comparison_table_dollar").style.display =
        "block";
      document.querySelector("#comparison_table_cedis").style.display = "none";
    }
  },
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

$(".play-bg").on("click", function () {
  $(".video-popup").fadeIn("slow");
  var srchref = "https://www.youtube.com/embed/bZzEZZVlfXA?autoplay=0";
  $("#iframe").attr("src", srchref);
  return false;
});

$(".popup-bg").on("click", function () {
  $(".video-popup").slideUp("slow");
  return false;
});

$(".close-btn").on("click", function () {
  $(".video-popup").fadeOut("slow");
  $("#iframe").attr("src", "");
  return false;
});

$(document).ready(function () {
  //First name validation
  document.querySelector("#finm").addEventListener("blur", (event) => {
    let err = document.querySelector(".error-message");
    err.innerText = "";
    try {
      //if field empty
      if (event.target.validity.valueMissing)
        throw event.target.validationMessage;
      else if (event.target.validity.patternMismatch) {
        //event.target.setCustomValidity("Enter A valid name");
        throw "Please enter a valid name!";
      } else {
        event.target.style.borderBottomColor = "#10b981";
        err.innerText = "";
      }
    } catch (messg) {
      err.innerText = messg;
    }
  });

  //Last name validation
  document.querySelector("#lamn").addEventListener("blur", (event) => {
    let err = document.querySelector(".error-message");
    err.innerText = "";
    try {
      //if field empty
      if (event.target.validity.valueMissing)
        throw event.target.validationMessage;
      else if (event.target.validity.patternMismatch) {
        //event.target.setCustomValidity("Enter A valid name");
        throw "Please enter a valid name!";
      } else {
        event.target.style.borderBottomColor = "#10b981";
        err.innerText = "";
      }
    } catch (messg) {
      err.innerText = messg;
    }
  });

  //to validate email
  document.querySelector("#email").addEventListener("blur", (event) => {
    validateEmail(event);
  });

  //function for email and confirm email validation
  function validateEmail(event) {
    let error = event.target.nextElementSibling;
    error.innerText = "";
    try {
      if (event.target.validity.valueMissing)
        throw event.target.validationMessage;
      else if (
        !event.target.validity.valid ||
        event.target.value.slice(-4) != ".com"
      )
        throw "Please enter a valid email.";
      else event.target.style.borderBottom = "2px solid #10b981";
    } catch (messg) {
      error.innerText = messg;
    }
  }

  //adding to password field
  document
    .querySelector("#password")
    .addEventListener("blur", validatePassword);

  //password validation
  function validatePassword(event) {
    let error = event.target.parentElement.nextElementSibling;
    error.innerText = "";
    try {
      console.log(event.target.value);
      console.log();
      if (event.target.validity.valueMissing)
        throw event.target.validationMessage;
      else if (!/[0-9]{1,}/g.test(event.target.value)) {
        throw "There must be at least 1 digit.";
      } else if (
        event.target.value.length < 8 ||
        event.target.value.length > 15
      ) {
        throw "Password must be 8 to 15 charaters.";
      } else {
        // document.querySelector('[type="submit"]').removeAttribute('disabled');
        event.target.style.borderBottom = "2px solid #10b981";
      }
    } catch (messg) {
      // document.querySelector('[type="submit"]').setAttribute('disabled',"disabled");
      error.innerText = messg;
    }
    console.log(error);
  }

  //confirm password validation
  document
    .querySelector("#confirm-password")
    .addEventListener("blur", function (event) {
      try {
        var error = document.querySelectorAll(".error-message")[5];
        error.innerText = "";
        if (event.target.validity.valueMissing)
          throw event.target.validationMessage;
        else if (
          document.querySelector("#password").value != event.target.value
        ) {
          throw "Password doesn't match!";
        } else {
          // document.querySelector('[type="submit"]').removeAttribute('disabled');
          event.target.style.borderBottom = "2px solid #10b981";
        }
      } catch (messg) {
        // document.querySelector('[type="submit"]').setAttribute('disabled',"disabled");
        error.innerText = messg;
      }
    });
});

// Timeline Scroll Section
// --------------------------------------------------------------
var items = $(".timeline li"),
  timelineHeight = $(".timeline ul").height(),
  greyLine = $(".default-line"),
  lineToDraw = $(".draw-line");

// sets the height that the greyLine (.default-line) should be according to `.timeline ul` height

// run this function only if draw line exists on the page
if (lineToDraw.length) {
  $(window).on("scroll", function () {
    // Need to constantly get '.draw-line' height to compare against '.default-line'
    var redLineHeight = lineToDraw.height(),
      greyLineHeight = greyLine.height(),
      windowDistance = $(window).scrollTop(),
      windowHeight = $(window).height() / 2,
      timelineDistance = $(".timeline").offset().top;

    if (windowDistance >= timelineDistance - windowHeight) {
      line = windowDistance - timelineDistance + windowHeight;

      if (line <= greyLineHeight) {
        lineToDraw.css({
          height: line + 20 + "px",
        });
      }
    }

    // This takes care of adding the class in-view to the li:before items
    var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
    items.each(function (index) {
      var circlePosition = $(this).offset();

      if (bottom > circlePosition.top) {
        $(this).addClass("in-view");
      } else {
        $(this).removeClass("in-view");
      }
    });
  });
}

window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

$("ul").on("click", "li", function () {
  var pos = $(this).index() + 2;
  $("tr").find("td:not(:eq(0))").hide();
  $("td:nth-child(" + pos + ")").css("display", "table-row");
  $("tr").find("th:not(:eq(0))").hide();
  $("li").removeClass("active");
  $(this).addClass("active");
});

// Initialize the media query
var mediaQuery = window.matchMedia("(min-width: 1200px)");

// Add a listen event
mediaQuery.addListener(doSomething);

// Function to do something with the media query
function doSomething(mediaQuery) {
  if (mediaQuery.matches) {
    $(".sep").attr("colspan", 4);
  } else {
    $(".sep").attr("colspan", 2);
  }
}

// On load
doSomething(mediaQuery);

var header = $(".popup_header");
var ul_a = $(".popup_header ul li a");
var ul_ = $(".popup_header ul li");
var line = $("<div />").addClass("line");

line.appendTo(header);

var active = header.find(".active");
var pos = 0;
var wid = 0;

if (active.length) {
  pos = active.position().left;
  wid = active.width();
  line.css({
    left: pos,
    width: wid,
  });
}

header.find(ul_a).click(function (e) {
  e.preventDefault();
  if (!$(this).parent().hasClass("active") && !header.hasClass("animate")) {
    header.addClass("animate");

    var _this = $(this);

    header.find(ul_).removeClass("active");

    var position = _this.parent().position();
    var width = _this.parent().width();

    if (position.left >= pos) {
      line.animate({ width: position.left - pos + width }, 300, function () {
        line.animate(
          {
            width: width,
            left: position.left,
          },
          150,
          function () {
            header.removeClass("animate");
          }
        );
        _this.parent().addClass("active");
      });
    } else {
      line.animate(
        {
          left: position.left,
          width: pos - position.left + wid,
        },
        300,
        function () {
          line.animate(
            {
              width: width,
            },
            150,
            function () {
              header.removeClass("animate");
            }
          );
          _this.parent().addClass("active");
        }
      );
    }

    pos = position.left;
    wid = width;
  }
});

var viewdd = document.querySelector(".dd-input");

// body.addEventListener("click", function () {
//   if ((viewdd.style.display = "block")) {
//     viewdd.style.display = "none";
//   }
// });

body.addEventListener("click", function () {
  viewdd.prop("checked", false);
});

// Glider Configuration
// new Glider(document.querySelector(".glider"), {
//     slidesToShow: 1.5,
//     slidesToScroll: 1,
//     draggable: true,
//     rewind :true,
//     // dots: ".dots",
//     responsive: [
//       {
//         // If Screen Size More than 768px
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1.5,
//           slidesToScroll: 1,
//           duration: 0.5,
//           arrows: {
//             prev: ".glider-prev",
//             next: ".glider-next"
//           }
//         }
//       },
//       {
//         // If Screen Size More than 768px
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 1.2,
//           slidesToScroll: 1,
//           duration: 0.5,
//           arrows: {
//             prev: ".glider-prev",
//             next: ".glider-next"
//           }
//         }
//       },
//       {
//         // If Screen Size More than 768px
//         breakpoint: 320,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           duration: 0.5,
//           arrows: {
//             prev: ".glider-prev",
//             next: ".glider-next"
//           }
//         }
//       },
//       {
//         // If Screen Size More than 768px
//         breakpoint: 220,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           duration: 0.5,
//           arrows: {
//             prev: ".glider-prev",
//             next: ".glider-next"
//           }
//         }
//       },
//       {
//         // If Screen Size More than 1024px
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2.5,
//           slidesToScroll: 1,
//           duration: 0.5,
//           arrows: {
//             prev: ".glider-prev",
//             next: ".glider-next"
//           }
//         }
//       }
//     ]
//   });

$("#radioCompany").click(function () {
  document.querySelector(".fieldTab").style.display = "block";
  // document.querySelector(".member1").style.display = "none";
  // document.querySelector(".member2").style.display = "none";
  // document.querySelector(".member3").style.display = "none";
  // document.querySelector(".member4").style.display = "none";
  $("#orgn").attr("required", true);

  $("#addr").attr("required", true);

  $("#city").attr("required", true);

  $("#postalcode").attr("required", true);
});

$("#radioIndividual").click(function () {
  document.querySelector(".fieldTab").style.display = "none";
  $("#orgn").removeAttr("required");

  $("#addr").removeAttr("required");

  $("#city").removeAttr("required");

  $("#postalcode").removeAttr("required");
});

function changeFunc() {
  var members = document.getElementById("members");
  var selectedValue = members.options[members.selectedIndex].value;
  if (selectedValue === "1") {
    document.querySelector(".member1").style.display = "block";
    document.querySelector(".member2").style.display = "none";
    document.querySelector(".member3").style.display = "none";
    document.querySelector(".member4").style.display = "none";
  } else if (selectedValue === "2") {
    document.querySelector(".member1").style.display = "block";
    document.querySelector(".member2").style.display = "block";
    document.querySelector(".member3").style.display = "none";
    document.querySelector(".member4").style.display = "none";
  } else if (selectedValue === "3") {
    document.querySelector(".member1").style.display = "block";
    document.querySelector(".member2").style.display = "block";
    document.querySelector(".member3").style.display = "block";
    document.querySelector(".member4").style.display = "none";
  } else if (selectedValue === "4") {
    document.querySelector(".member1").style.display = "block";
    document.querySelector(".member2").style.display = "block";
    document.querySelector(".member3").style.display = "block";
    document.querySelector(".member4").style.display = "block";
  } else {
    document.querySelector(".member1").style.display = "none";
    document.querySelector(".member2").style.display = "none";
    document.querySelector(".member3").style.display = "none";
    document.querySelector(".member4").style.display = "none";
  }
}

// function checkMember(evt) {
//   if (evt.target.value === "1") {
//     document.querySelector(".member1").style.display = "block";
//   }
// }

// $('.memberOne').on('click',function(){
//   document.querySelector(".member1").style.display = "block";
//   document.querySelector(".member2").style.display = "none";
//   document.querySelector(".member3").style.display = "none";
//   document.querySelector(".member4").style.display = "none";
// });

function showInstall() {
  document.querySelector(".installment_plan").style.display = "block";
  document.querySelector("#installPay").style.display = "none";
  document.querySelector("#payNowButton").style.display = "none";
}

function hideInstall() {
  document.querySelector(".installment_plan").style.display = "none";
  document.querySelector("#installPay").style.display = "block";
  document.querySelector("#payNowButton").style.display = "block";
}

$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

if ($input >= 5) {
  document.querySelector(".plus").style.display = "none";
}
