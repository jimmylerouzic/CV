//Default active on home


$('#s1').addClass("active");


/*
Smooth scrolling
*/
$("#s1").click(function() {
     $('html, body').animate({
         scrollTop:        $("#1").offset().top-65
     }, 1000);
  return false;
 });

$("#s2").click(function() {
     $('html, body').animate({
         scrollTop:        $("#2").offset().top-100
     }, 1000);
  return false;
 });

$("#s3").click(function() {
     $('html, body').animate({
         scrollTop:        $("#3").offset().top-100
     }, 1000);
  return false;
 });

$("#s4").click(function() {
     $('html, body').animate({
         scrollTop:        $("#4").offset().top-100
     }, 1000);
  return false;
 });

$("#s5").click(function() {
     $('html, body').animate({
         scrollTop:        $("#5").offset().top-100
     }, 1000);
  return false;
 });

$("#s6").click(function() {
     $('html, body').animate({
         scrollTop:        $("#6").offset().top-100
     }, 1000);
  return false;
 });

$("#toTop").click(function() {
     $('html, body').animate({
         scrollTop:        $("#1").offset().top-65
     }, 1000);
  return false;
 });
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
$('#2').waypoint(function() {

  $(".nav-container ul li").children().removeClass("active");
  $("#s2").addClass("active");

}, { offset: 101 });


$('#3').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s3").addClass("active");
}, { offset: 101 });

$('#4').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s4").addClass("active");
}, { offset: 101 });

$('#5').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s5").addClass("active");
}, { offset: 101 });

$('#6').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s6").addClass("active");
}, { offset: 101 });

$('#1').waypoint(function() {
  $(".nav-container ul li").children().removeClass("active");
  $("#s1").addClass("active");
}, { offset: 0 });

$('#2').waypoint(function() {
  $(".to-top").addClass("visible");
}, { offset: 100 });

$('#1').waypoint(function(event, direction) {
  $(".to-top").removeClass("visible");
}, { offset: 30 });
