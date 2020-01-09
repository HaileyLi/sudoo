// var valueElement = document.getElementById("value");

// var start = 0;
// var end = 100;
// var duration = 100; // In milliseconds (divide by 1000 to get seconds).
// var framerate = 50; // In milliseconds (divide by 1000 to get seconds).

// var toAdd = ((end - start) * framerate) / duration;

// var interval = setInterval(function() {
//   var currentValue = parseFloat(valueElement.innerHTML);

//   if (currentValue >= end) {
//     clearInterval(interval);
//     return;
//   }

//   valueElement.innerHTML =
//     !isNaN(currentValue) == true ? currentValue + toAdd : toAdd;
// }, framerate);
$(document).ready(function () {
    $("body").mousemove(function (event) {
        var eye1 = $(".eye1");
        var eye2 = $(".eye2");
        var x = (eye1.offset().left) + (eye2.width() / 2);
        var y = (eye1.offset().top) + (eye2.height() / 2);
        var rad = Math.atan2(event.pageX - x, event.pageY - y);
        var rot = (rad * (180 / Math.PI) * -1) + 180;
        eye1.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
        });
        eye2.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
        });
    });
});