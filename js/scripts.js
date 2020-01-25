// Front-end logic:
$(document).ready(function(){
  $(".numberinputform").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#numberinputfield").val());
    if (isNaN(userNumber)) {
      alert("Please enter numbers only!")
    }
    $(".resultspane").show();
    $("#result").append("<p>"+beepboop(userNumber)+"</p>");
  })

// Back-end logic:
function beepboop(num) {
  //Create array that stops at user's input
  var arr = [];
  for (var index = 0; index <= num; index ++) {
    arr.push(index);
  }
  //Loop through the array and replace 1,2,3's 
  for (var i = 0; i <= num; i ++) {
    var string = i.toString();
    if (string.includes("3")) {
      arr[i] = "I'm sorry, Dave. I'm afraid I can't do that";
    } else if (string.includes("2")) {
      arr[i] = "BOOP!";
    } else if (string.includes("1")) {
      arr[i] = "BEEP!";
    }
  }
  var finalString = arr.join(", "); 
  return finalString;
  }
})
