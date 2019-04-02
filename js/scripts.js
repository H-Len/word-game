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
      if (letter === 'a' || 'e' || 'i' || 'o' || 'u') {
        letter = "-";
        newArray.push(letter[1]);
      } else {
        newArray.push(letter[1]);
      }
      console.log(letter);
    })
    //
    // for (var index = 0; index <= ceilingNum; index += incrementNum) {
    //   console.log(index);
    // }
    event.preventDefault();
  });
});
