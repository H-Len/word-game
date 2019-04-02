$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentences = $("input#input1").val();
    var letters = sentences.split("");
    console.log(letters);
    // if (incrementNum === ' ' || incrementNum < 0 || incrementNum > ceilingNum || (isNaN(incrementNum)) || ceilingNum === ' ' || ceilingNum < 0 || ceilingNum > ceilingNum || (isNaN(ceilingNum)) ) {
    // alert("Please try again!");
    // }
    // sentences.forEach(function(letter){
    //   var userInput = $("input1#");
    //   if (letter === 'a' || 'e' || 'i' || 'o' || 'u') {
    //     letter = "-";
    //   }
    //   console.log(userInput);
    // })
    //
    // for (var index = 0; index <= ceilingNum; index += incrementNum) {
    //   console.log(index);
    // }
    event.preventDefault();
  });
});
