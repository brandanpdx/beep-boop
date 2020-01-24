// Back-end logic
function beepboop(num) {
  var userNumber = parseInt($("input#numberinputfield").val());
  var numArray = []

  for (var number = 0; number <= userNumber; number ++) {

    numArray.push(number);
    console.log(numArray);
  }
}



// Front-end logic
$(document).ready(function(){
  $(".numberinputform").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#numberinputfield").val());

    if (isNaN(userNumber)) {
      alert("Please enter numbers only!")
    }

    beepboop(userNumber);

    $("#result").append(userNumber);
  })


})