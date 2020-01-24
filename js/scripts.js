// Front-end logic
$(document).ready(function(){
  $(".numberinputform").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#numberinputfield").val());

    if (isNaN(userNumber)) {
      alert("Please enter numbers only!")
    }

    $("#result").append("<li>" + beepboop(userNumber) + "</li>");
  })
})

// Back-end logic
function beepboop(num) {
  var numbers = [];
  for (var index = 0; index <= num; index ++) {
    numbers.push(index);
  }
  for (var i = 0; i <= num; i ++) {
    if (i.toString().includes("3")) {
      numbers[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (i.toString().includes("2")) {
      numbers[i] = "Boop!";
    } else if (i.toString().includes("1")) {
      numbers[i] = "Beep!";
    }
  }
  return numbers;
}

