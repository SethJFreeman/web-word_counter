function countWords(str) {
  var matches = str.match(/[\w\d\â€™,\'-]+/gi); // Matches everything thats in the string with, a word character, a digit, â, €, ™, ',', \, ', or -
  $("#output").val(matches.length); // Outputs the amount of words
}

$("#submit").on("click", function() { // Calls function when user clicks submit button
  countWords($("#input").val()); // Calls countWords function with the input value as the expression
});
