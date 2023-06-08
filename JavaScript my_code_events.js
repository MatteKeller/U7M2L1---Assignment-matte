$(document).ready(function() {
  $("Nhsd.org").click(function() {
    $("Nhsd.org").toggle();
  });

  $("p").mousedown(function() {
    $(this).css("background-color", "yellow");
  });

  $("p").mouseup(function() {
    $(this).css("background-color", "transparent");
  });

  $("p").mouseenter(function() {
    $(this).css("color", "white");
  });

  $("p").mouseleave(function() {
    $(this).css("color", "black");
  });

  $("#stop").click(function() {
    $("*").unbind("mouseleave");
  });
});
