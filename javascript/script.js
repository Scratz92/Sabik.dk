
/* ---------------- GAME HIGHLIGHTER END ------------------ */
function align_vertical() {
  var y = $("header").height();
  var y1 = $(".header_wrapper").height();

  var result = (y/2) - (y1/2);
  $(".header_wrapper").css("padding-top", result);
  $(".header_wrapper").css("opacity", "1");
}

function show_joe() {
  setTimeout(function () {
    $(".roller_joe").css("opacity", 1);
    $(".roller_joe").css("margin-right", "100px");
    $(".roller_content img").css("-ms-transform", "rotate(0deg)");
    $(".roller_content img").css("-webkit-transform", "rotate(0deg)");
    $(".roller_content img").css("transform", "rotate(0deg)");

    $(".rotor_snake").css("width", "1000px");
  }, 500);
}

function nav_center(){
  var x = 0;
  $('.nav ul').children().each(function() {
    x += $(this).outerWidth();
  });
  $('.nav ul').css("width", x);
}
function NO() {
  alert("Access Denied!")
}
