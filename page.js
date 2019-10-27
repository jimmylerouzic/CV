//Default active on home


<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> gh-pages
=======
>>>>>>> 2146d410434b45fb69b5e15e379ccbebf41b8986


/*
Smooth scrolling
*/
$("#s1").click(function() {
     $('html, body').animate({
         scrollTop:        $("#1").offset().top-0
     }, 1000);
  return false;
 });

$("#s2").click(function() {
     $('html, body').animate({
         scrollTop:        $("#2").offset().top-0
     }, 1000);
  return false;
 });

$("#s3").click(function() {
     $('html, body').animate({
         scrollTop:        $("#3").offset().top-0
     }, 1000);
  return false;
 });

$("#s4").click(function() {
     $('html, body').animate({
         scrollTop:        $("#4").offset().top-0
     }, 1000);
  return false;
 });

$("#s5").click(function() {
     $('html, body').animate({
         scrollTop:        $("#5").offset().top-0
     }, 1000);
  return false;
 });

$("#s6").click(function() {
     $('html, body').animate({
         scrollTop:        $("#6").offset().top-0
     }, 1000);
  return false;
 });

$("#toTop").click(function() {
     $('html, body').animate({
         scrollTop:        $("#1").offset().top-0
     }, 1000);
  return false;
 });

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = "";
        document.body.appendChild(css);
    };

/*$('#2').waypoint(function(event, direction) {

  $(".nav-container ul li").children().removeClass("active");
  $("#s2").addClass("active");

  if (direction === 'down') {
    offset = 90;
  }
  else {
    offset = 20;
  }
});*/


/*
Using jquery waypoints to change active on scroll
*/
// $('#2').waypoint(function() {

//   $(".nav-container ul li").children().removeClass("active");
//   $("#s2").addClass("active");

// }, { offset: 101 });


// $('#3').waypoint(function() {
//   $(".nav-container ul li").children().removeClass("active");
//   $("#s3").addClass("active");
// }, { offset: 101 });

// $('#4').waypoint(function() {
//   $(".nav-container ul li").children().removeClass("active");
//   $("#s4").addClass("active");
// }, { offset: 101 });

// $('#5').waypoint(function() {
//   $(".nav-container ul li").children().removeClass("active");
//   $("#s5").addClass("active");
// }, { offset: 101 });

// $('#6').waypoint(function() {
//   $(".nav-container ul li").children().removeClass("active");
//   $("#s6").addClass("active");
// }, { offset: 101 });

// $('#1').waypoint(function() {
//   $(".nav-container ul li").children().removeClass("active");
//   $("#s1").addClass("active");
// }, { offset: 0 });

// $('#2').waypoint(function() {
//   $(".to-top").addClass("visible");
// }, { offset: 100 });

// $('#1').waypoint(function(event, direction) {
//   $(".to-top").removeClass("visible");
// }, { offset: 30 });
