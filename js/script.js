// Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2022").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$('#team_slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrow: true,
  autoplay: true,
  prevArrow: '<i class="fas fa-chevron-left prev"></i>',
  nextArrow: '<i class="fas fa-chevron-right next"></i>',
});


$(document).ready(function() {
  // grab the initial top offset of the navigation 
     var stickyNavTop = $('.nav').offset().top;
     
     // our function that decides weather the navigation bar should have "fixed" css position or not.
     var stickyNav = function(){
      var scrollTop = $(window).scrollTop(); // our current vertical position from the top
           
      // if we've scrolled more than the navigation, change its position to fixed to stick to top,
      // otherwise change it back to relative
      if (scrollTop > stickyNavTop) { 
          $('.nav').addClass('sticky');
      } else {
          $('.nav').removeClass('sticky'); 
      }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });
});


