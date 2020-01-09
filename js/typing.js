function autoType(elementClass, typingSpeed) {
  var TypeContent = $(elementClass);
  TypeContent.css({
    position: "relative",
    display: "inline-block"
  });
  TypeContent.prepend('<div class="cursor" style="right:0;"></div>');
  TypeContent = TypeContent.find(".text-js");
  var text = TypeContent.text()
    .trim()
    .split("");
  var amntOfChars = text.length;
  var newString = "";
  TypeContent.text("|");
  setTimeout(function() {
    TypeContent.css("opacity", 1);
    TypeContent.prev().removeAttr("style");
    TypeContent.text("");
    for (var i = 0; i < amntOfChars; i++) {
      (function(i, char) {
        setTimeout(function() {
          newString += char;
          TypeContent.text(newString);
        }, i * typingSpeed);
      })(i + 1, text[i]);
    }
  }, 1500);
}

$(document).ready(function() {
  autoType(".typing-js", 200);
});
