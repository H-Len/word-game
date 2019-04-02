$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentences = $("input#input1").val();
    var letters = sentences.split("");
    // console.log(letters);
    // if (incrementNum === ' ' || incrementNum < 0 || incrementNum > ceilingNum || (isNaN(incrementNum)) || ceilingNum === ' ' || ceilingNum < 0 || ceilingNum > ceilingNum || (isNaN(ceilingNum)) ) {
    // alert("Please try again!");
    // }

    newArray = [];
    letters.forEach(function(letter){
      // var userInput = $("input1#");
      if (letter === 'a' || letter ===  'e' || letter === 'i' || letter === 'o' ||letter ===  'u') {
        letter = "-";
        newArray.push(letter);
      } else {
        newArray.push(letter);
      }
      console.log(newArray);
    })
    //
    // for (var index = 0; index <= ceilingNum; index += incrementNum) {
    //   console.log(index);
    // }
    event.preventDefault();
  });
});
