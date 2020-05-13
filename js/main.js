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
        if ($(".try-button:hover").length == 0 && $(".checkboxes:hover").length == 0 && $(".contact-form:hover").length == 0) {
            var eye1 = $(".eye1");
            var eye2 = $(".eye2");

            var x = (eye1.offset().left) + (eye2.width() / 2);
            var y = (eye1.offset().top) + (eye2.height() / 2);
            var rad = Math.atan2(event.pageX - x, event.pageY - y);
            var rot = (rad * (180 / Math.PI) * -1) - 180;
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
        }



    });



    $(".try-button").hover(function () {
        rot = 0;
        $(".eye1").addClass("love-eye1");
        $(".eye1").removeClass("eye");
        $(".eye1").removeClass("eye1");
        $(".eye2").addClass("love-eye2");
        $(".eye2").removeClass("eye");
        $(".eye2").removeClass("eye2");
        $(".love-eye1").css({
            'transform': 'rotate(' + rot + 'deg)'
        });
        $(".love-eye2").css({
            'transform': 'rotate(' + rot + 'deg)'
        });
    }, function () {
        $(".love-eye1").addClass("eye");
        $(".love-eye1").addClass("eye1");
        $(".love-eye1").removeClass("love-eye1");
        $(".love-eye2").addClass("eye");
        $(".love-eye2").addClass("eye2");
        $(".love-eye2").removeClass("love-eye2");
    }
    );

    $(".checkboxes").hover(function () {
        rot = 0;
        $(".eye1").addClass("love-eye1");
        $(".eye1").removeClass("eye");
        $(".eye1").removeClass("eye1");
        $(".eye2").addClass("love-eye2");
        $(".eye2").removeClass("eye");
        $(".eye2").removeClass("eye2");
        $(".love-eye1").css({
            'transform': 'rotate(' + rot + 'deg)'
        });
        $(".love-eye2").css({
            'transform': 'rotate(' + rot + 'deg)'
        });
    }, function () {
        $(".love-eye1").addClass("eye");
        $(".love-eye1").addClass("eye1");
        $(".love-eye1").removeClass("love-eye1");
        $(".love-eye2").addClass("eye");
        $(".love-eye2").addClass("eye2");
        $(".love-eye2").removeClass("love-eye2");
    }
    );

    $(".contact-form").hover(function () {
        rot = 0;
        $(".eye1").addClass("love-eye1");
        $(".eye1").removeClass("eye");
        $(".eye1").removeClass("eye1");
        $(".eye2").addClass("love-eye2");
        $(".eye2").removeClass("eye");
        $(".eye2").removeClass("eye2");
        $(".love-eye1").css({
            'transform': 'rotate(' + rot + 'deg)'
        });
        $(".love-eye2").css({
            'transform': 'rotate(' + rot + 'deg)'
        });
    }, function () {
        $(".love-eye1").addClass("eye");
        $(".love-eye1").addClass("eye1");
        $(".love-eye1").removeClass("love-eye1");
        $(".love-eye2").addClass("eye");
        $(".love-eye2").addClass("eye2");
        $(".love-eye2").removeClass("love-eye2");
    }
    )

    $("#talk").click(function () {
        var wechat_check = $('#box1').is(":checked");
        var web_check = $('#box2').is(":checked");
        var ios_check = $('#box3').is(":checked");
        var andriod_check = $('#box4').is(":checked");
        var on_off = [wechat_check, web_check, ios_check, andriod_check];
        var strs = ["Wechat mini program", "Website", "IOS application", "Andriod application"];
        var i;
        var newstr = [];
        for (i = 0; i < 4; i++) {
            if (on_off[i] == true) {
                newstr.push(strs[i]);
            }
        }
        if (newstr.length == 0) {
            var msg = "Hello!"
        }
        if (newstr.length == 1) {
            var msg = "Hello! I want to ask for a " + newstr[0] + " development project.";
        }

        if (newstr.length > 1) {
            var msg = "Hello! I want to ask for ";
            for (var k = 0; k < newstr.length; k++) {
                msg += newstr[k];

                if (k != newstr.length - 1) {
                    msg += " and ";
                }
            }
            msg += " development projects."
        }
        $("#your-msg").html(msg);
    })

});

$(window).bind("scroll", function () {
    if ($(this).scrollTop() + 100 >= $('#home').position().top) {
        $(".home-link").addClass("home-active");
        $(".service-link").removeClass("service-active");
        $(".about-link").removeClass("about-active");
        $(".contact-link").removeClass("contact-active");

    }
    if ($(this).scrollTop() + 100 >= $('#service').position().top) {
        $(".home-link").removeClass("home-active");
        $(".service-link").addClass("service-active");
        $(".about-link").removeClass("about-active");
        $(".contact-link").removeClass("contact-active");
    }
    if ($(this).scrollTop() + 100 >= $('#about').position().top) {
        $(".home-link").removeClass("home-active");
        $(".service-link").removeClass("service-active");
        $(".about-link").addClass("about-active");
        $(".contact-link").removeClass("contact-active");
    }
    if ($(this).scrollTop() + 100 >= $('#contact').position().top) {
        $(".home-link").removeClass("home-active");
        $(".service-link").removeClass("service-active");
        $(".about-link").removeClass("about-active");
        $(".contact-link").addClass("contact-active");
    }

});