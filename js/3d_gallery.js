$(function() {
  $(".point li")
    .on("click", function() {
      console.log(this);
      console.log($(this));
      console.log($(this)
        .index());
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
      var rotateY = ($(this)
        .index() * (-90));
      $(".perspective_div ul")
        .css({
          "transform": "rotateY(" + rotateY + "deg)"
        });
    });
});