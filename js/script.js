$(function() {
  $('select').change(function() {
    if ($(this).val() == 1) {
      document.querySelector(".dollarcomp").style.display = "none"; 
      document.querySelector(".nairacomp").style.display = "block"; 
      document.querySelector("#comparison_table_naira").style.display = "block"; 
      document.querySelector("#comparison_table_dollar").style.display = "none"; 
      $('.sep').attr('colspan',5);
    }
    else if ($(this).val() == 2) {
      document.querySelector(".dollarcomp").style.display = "block"; 
      document.querySelector(".nairacomp").style.display = "none"; 
      document.querySelector("#comparison_table_naira").style.display = "none";
      document.querySelector("#comparison_table_dollar").style.display = "block";  
      $('.sep').attr('colspan',4);
    }
    })
 
 
  })

  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle Nav
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
      
      //Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  
        }
      });
      
      //burger animation
      burger.classList.toggle('toggle');
      
      
    });
    
    
    
    
  }
  
  navSlide();


$(document).ready(function(){

  //First name validation
document.querySelector('#finm').addEventListener('blur',(event)=>{
  let err = document.querySelector(".error-message");
  err.innerText = "";
  try{
      //if field empty
      if(event.target.validity.valueMissing)
          throw event.target.validationMessage;
      
      else if(event.target.validity.patternMismatch){
          //event.target.setCustomValidity("Enter A valid name");
          throw "Please enter a valid name!";
      }

      else{
          event.target.style.borderBottomColor = '#10b981';
          err.innerText = "";
      }
  }

  catch(messg){
      err.innerText = messg;
  }
  
});

  //Last name validation
  document.querySelector('#lamn').addEventListener('blur',(event)=>{
    let err = document.querySelector(".error-message");
    err.innerText = "";
    try{
        //if field empty
        if(event.target.validity.valueMissing)
            throw event.target.validationMessage;
        
        else if(event.target.validity.patternMismatch){
            //event.target.setCustomValidity("Enter A valid name");
            throw "Please enter a valid name!";
        }
  
        else{
            event.target.style.borderBottomColor = '#10b981';
            err.innerText = "";
        }
    }
  
    catch(messg){
        err.innerText = messg;
    }
    
  });


//to validate email
document.querySelector('#email').addEventListener('blur',(event)=>{
  validateEmail(event);
});


//function for email and confirm email validation
function validateEmail(event){
  let error = event.target.nextElementSibling;
  error.innerText = "";
  try{
      
      if(event.target.validity.valueMissing)
          throw event.target.validationMessage;

      else if(!event.target.validity.valid || event.target.value.slice(-4)!='.com')
          throw "Please enter a valid email.";

      else
          event.target.style.borderBottom = '2px solid #10b981';
       
  }

  
  catch(messg){
      error.innerText = messg;
  }

}


//adding to password field
document.querySelector("#password").addEventListener('blur',validatePassword);

//password validation
function validatePassword(event){
  let error = event.target.parentElement.nextElementSibling;
  error.innerText = "";
  try{
      console.log((event.target.value));
      console.log();
  if(event.target.validity.valueMissing)
      throw event.target.validationMessage;

  else if(!(/[0-9]{1,}/g).test(event.target.value)){
      throw "There must be at least 1 digit.";
  }

  else if(event.target.value.length<8 || event.target.value.length>15){
      
      throw "Password must be 8 to 15 charaters.";
  }

  else{
      // document.querySelector('[type="submit"]').removeAttribute('disabled');
      event.target.style.borderBottom = "2px solid #10b981";
  }

  }
  catch(messg){
      // document.querySelector('[type="submit"]').setAttribute('disabled',"disabled");
      error.innerText = messg;
  }
  console.log(error);
}


//confirm password validation
document.querySelector('#confirm-password').addEventListener('blur',function(event){
  try{
      var error = document.querySelectorAll('.error-message')[5];
      error.innerText = "";
      if(event.target.validity.valueMissing)
          throw event.target.validationMessage;

      else if(document.querySelector('#password').value != event.target.value){
          throw "Password doesn't match!";
      }

      else{
          // document.querySelector('[type="submit"]').removeAttribute('disabled');
          event.target.style.borderBottom = "2px solid #10b981";
      }
  }

  catch(messg){
      // document.querySelector('[type="submit"]').setAttribute('disabled',"disabled");
      error.innerText = messg;
  }
});

  $('.play-bg').on('click', function(){
    $('.video-popup').fadeIn('slow');
    var srchref='https://www.youtube.com/embed/bZzEZZVlfXA?autoplay=0';
    $("#iframe").attr('src', srchref);
    return false;
  });
  
  $('.popup-bg').on('click', function(){
    $('.video-popup').slideUp('slow');
    return false;
  });
  
   $('.close-btn').on('click', function(){
     $('.video-popup').fadeOut('slow');
     $("#iframe").attr('src', '');
      return false;
   });
  
});





    // Timeline Scroll Section
// --------------------------------------------------------------
var items = $(".timeline li"),
timelineHeight = $(".timeline ul").height(),
greyLine = $('.default-line'),
lineToDraw = $('.draw-line');

// sets the height that the greyLine (.default-line) should be according to `.timeline ul` height

// run this function only if draw line exists on the page
if(lineToDraw.length) {
  $(window).on('scroll', function () {

    // Need to constantly get '.draw-line' height to compare against '.default-line'
    var redLineHeight = lineToDraw.height(),
    greyLineHeight = greyLine.height(),
    windowDistance = $(window).scrollTop(),
    windowHeight = $(window).height() / 2,
    timelineDistance = $(".timeline").offset().top;

    if(windowDistance >= timelineDistance - windowHeight) {
      line = windowDistance - timelineDistance + windowHeight;

      if(line <= greyLineHeight) {
        lineToDraw.css({
          'height' : line + 20 + 'px'
        });
      }
    }

    // This takes care of adding the class in-view to the li:before items
    var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
    items.each(function(index){
      var circlePosition = $(this).offset();

      if(bottom > circlePosition.top) {				
        $(this).addClass('in-view');
      } else {
        $(this).removeClass('in-view');
      }
    });	
  });
}

window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded")  
});

$( "ul" ).on( "click", "li", function() {
  var pos = $(this).index()+2;
  $("tr").find('td:not(:eq(0))').hide();
  $('td:nth-child('+pos+')').css('display','table-row');
  $("tr").find('th:not(:eq(0))').hide();
  $('li').removeClass('active');
  $(this).addClass('active');
});

// Initialize the media query
  var mediaQuery = window.matchMedia('(min-width: 1200px)');
  
  // Add a listen event
  mediaQuery.addListener(doSomething);
  
  // Function to do something with the media query
  function doSomething(mediaQuery) {    
    if (mediaQuery.matches) {
      $('.sep').attr('colspan',4);
    } else {
      $('.sep').attr('colspan',2);
    }
  }
  
  // On load
  doSomething(mediaQuery);


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

$('#radioCompany').click(function(){
  document.querySelector(".fieldTab").style.display = "block";
  $("#orgn").attr('required', true);

  $("#addr").attr('required', true);

  $("#city").attr('required', true);

  $("#postalcode").attr('required', true);
});

$('#radioIndividual').click(function(){
  document.querySelector(".fieldTab").style.display = "none";
  $("#orgn").removeAttr('required');

  $("#addr").removeAttr('required');

  $("#city").removeAttr('required');

  $("#postalcode").removeAttr('required');
});

