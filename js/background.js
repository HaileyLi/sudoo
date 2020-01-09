/*var FollowX = 0,
  FollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 30;
function moveBG() {
  x += (FollowX - (1 / 4) * x) * friction;
  y += (FollowY - y) * friction;

  translate = "translate(" + x + "px, " + y + "px)";

  $(".d-home").css({
    "-webkit-transform": translate,
    "-moz-transform": translate,
    transform: translate
  });

  window.requestAnimationFrame(moveBG);
}

$(window).on("mousemove click", function(e) {
  var MouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var MouseY = Math.max(
    -100,
    Math.min(100, $(window).height() / 2 - e.clientY)
  );
  FollowX = (20 * MouseX) / 100;
  Followy = (20 * MouseY) / 100;
});

moveBG();
*/

$(document).scroll(function() {
  if (window.innerWidth >= 800) {
    var scroll_p = $(this).scrollTop();
    $(".d-home").css({
      "background-position-y": -scroll_p / 5
    });
  }
});

/*
var FollowX = 0,
  FollowY = 0,
  x = 0,
  y = 0,
  y2 = 0,
  y3 = 0,
  x2 = 0,
  x3 = 0,
  x4 = 0;
friction = 1 / 50;
function moveBG() {
  x += (FollowX - x) * friction;
  y += (FollowY - y) * friction;

  x2 += (FollowX - 2 * x2) * friction;
  x3 += (FollowX - 1.5 * x3) * friction;

  y2 += (FollowY - 2 * y) * friction;
  y3 += (FollowY - 1.5 * y) * friction;

  translate = "translate(" + x + "px, " + y + "px)";
  translate2 = "translate(" + x2 + "px, " + y2 + "px)";
  translate3 = "translate(" + x3 + "px, " + y3 + "px)";

  $(".star-bg").css({
    "-webkit-transform": translate,
    "-moz-transform": translate,
    transform: translate
  });
  $(".as-bg").css({
    "-webkit-transform": translate2,
    "-moz-transform": translate2,
    transform: translate2
  });
  $(".plane-bg").css({
    "-webkit-transform": translate3,
    "-moz-transform": translate3,
    transform: translate3
  });

  window.requestAnimationFrame(moveBG);
}

$(window).on("mousemove click", function(e) {
  var MouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var MouseY = Math.max(
    -100,
    Math.min(100, $(window).height() / 2 - e.clientY)
  );
  FollowX = (20 * MouseX) / 100;
  FollowY = (10 * MouseY) / 100;
});

moveBG();
*/
