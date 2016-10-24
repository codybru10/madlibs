$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    debugger;

    var blanks = ["name", "verbPresent", "person1", "noun", "verbPast", "person2", "verbPresentTwo", "animal"];

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();
  });
});
