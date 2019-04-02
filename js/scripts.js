$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentences = $("input#input1").val();
    var letters = sentences.split("");

    newArray = [];
    letters.forEach(function(letter){
      if (letter === 'a' || letter ===  'e' || letter === 'i' || letter === 'o' ||letter ===  'u') {
        letter = "-";
        newArray.push(letter);
      } else {
        newArray.push(letter);
      }
      // console.log(newArray);
      var combine = newArray.join('');
      console.log(combine);
    })
    event.preventDefault();
  });
});
