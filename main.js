function countWords(str) {
  var matches = str.match(/[\w\d\â€™\'-]+/gi);
  $("#output").val(matches.length);
}

$("#submit").on("click", function() {
  countWords($("#input").val());
});
