$(document).ready(function() {
  // Toggle functionality for news article
  $("#articleTitle").click(function() {
    $("#articleContent").toggle();
  });

  // Paragraph events
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

  // Stop mouseleave events when clicking on #stop
  $("#stop").click(function() {
    $("*").unbind("mouseleave");
  });
});
