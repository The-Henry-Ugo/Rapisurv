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
new Glider(document.querySelector(".glider"), {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    draggable: true,
    rewind :true,
    // dots: ".dots",
    responsive: [
      {
        // If Screen Size More than 768px
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          duration: 0.5,
          arrows: {
            prev: ".glider-prev",
            next: ".glider-next"
          }
        }
      },
      {
        // If Screen Size More than 768px
        breakpoint: 500,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          duration: 0.5,
          arrows: {
            prev: ".glider-prev",
            next: ".glider-next"
          }
        }
      },
      {
        // If Screen Size More than 768px
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          duration: 0.5,
          arrows: {
            prev: ".glider-prev",
            next: ".glider-next"
          }
        }
      },
      {
        // If Screen Size More than 768px
        breakpoint: 220,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          duration: 0.5,
          arrows: {
            prev: ".glider-prev",
            next: ".glider-next"
          }
        }
      },
      {
        // If Screen Size More than 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          duration: 0.5,
          arrows: {
            prev: ".glider-prev",
            next: ".glider-next"
          }
        }
      }
    ]
  });

  $(document).ready(function(){
  
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

  function changeColor(color) {
    document.querySelector(".monthly").style.background = color;
    document.querySelector(".oneyear").style.background = "#ffffff";
    document.querySelector(".twoyears").style.background = "#ffffff";
    document.querySelector(".monthly").style.color = "#ffffff";
    document.querySelector(".oneyear").style.color = "#000000";
    document.querySelector(".twoyears").style.color = "#000000";
  }
  function changeColor2(color2) {
    document.querySelector(".monthly").style.background = "#ffffff";
    document.querySelector(".oneyear").style.background = color2;
    document.querySelector(".twoyears").style.background = "#ffffff";
    document.querySelector(".monthly").style.color = "#000000";
    document.querySelector(".oneyear").style.color = "#ffffff";
    document.querySelector(".twoyears").style.color = "#000000";
  }
  function changeColor3(color3) {
    document.querySelector(".monthly").style.background = "#ffffff";
    document.querySelector(".oneyear").style.background = "#ffffff";
    document.querySelector(".twoyears").style.background = color3;
    document.querySelector(".monthly").style.color = "#000000";
    document.querySelector(".oneyear").style.color = "#000000";
    document.querySelector(".twoyears").style.color = "#ffffff";
  }
  
  // Dollar Monthly, Yearly & Bi-Annual tabs logic
  function dollarmonthly() {
    changeColor('#10b981');
    document.querySelector(".pricing").style.display = "flex";
    document.querySelector(".pricing-oneyear").style.display = "none";
    document.querySelector(".pricing-twoyears").style.display = "none";
    document.querySelector(".monthly-dollar-table2").style.display = "table-row";
    document.querySelector(".yearly-dollar-table2").style.display = "none";
    document.querySelector(".twoyears-dollar-table2").style.display = "none";
  }
  
  function dollaroneyear() {
    changeColor2('#10b981');
    document.querySelector(".pricing").style.display = "none";
    document.querySelector(".pricing-oneyear").style.display = "flex";
    document.querySelector(".pricing-twoyears").style.display = "none";
    document.querySelector(".monthly-dollar-table2").style.display = "none";
    document.querySelector(".yearly-dollar-table2").style.display = "table-row";
    document.querySelector(".twoyears-dollar-table2").style.display = "none";
  }
  
  function dollartwoyears() {
    changeColor3('#10b981');
    document.querySelector(".pricing").style.display = "none";
    document.querySelector(".pricing-oneyear").style.display = "none";
    document.querySelector(".pricing-twoyears").style.display = "flex";
    document.querySelector(".monthly-dollar-table2").style.display = "none";
    document.querySelector(".yearly-dollar-table2").style.display = "none";
    document.querySelector(".twoyears-dollar-table2").style.display = "table-row";
  }
  
  // Naira Monthly & Yearly tabs logic

  function changeColorNaira(color) {
    document.querySelector(".naira-monthly-tab").style.background = color;
    document.querySelector(".naira-oneyear-tab").style.background = "#ffffff";
    document.querySelector(".naira-monthly-tab").style.color = "#ffffff";
    document.querySelector(".naira-oneyear-tab").style.color = "#000000";
  }
  function changeColorNaira2(color2) {
    document.querySelector(".naira-monthly-tab").style.background = "#ffffff";
    document.querySelector(".naira-oneyear-tab").style.background = color2;
    document.querySelector(".naira-monthly-tab").style.color = "#000000";
    document.querySelector(".naira-oneyear-tab").style.color = "#ffffff";
  }
  
  function nairamonthly() {
    changeColorNaira('#10b981');
    document.querySelector(".naira-monthly").style.display = "flex";
    document.querySelector(".naira-oneyear").style.display = "none";
    document.querySelector(".monthly-naira-table2").style.display = "table-row";
    document.querySelector(".yearly-naira-table2").style.display = "none";
  }
  
  function nairaoneyear() {
    changeColorNaira2('#10b981');
    document.querySelector(".naira-monthly").style.display = "none";
    document.querySelector(".naira-oneyear").style.display = "flex";
    document.querySelector(".monthly-naira-table2").style.display = "none";
    document.querySelector(".yearly-naira-table2").style.display = "table-row";
  }

