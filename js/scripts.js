// Front-end logic
$(document).ready(function(){
  $(".numberinputform").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#numberinputfield").val());

    if (isNaN(userNumber)) {
      alert("Please enter numbers only!")
    }

    $("ul#result").append("<li>" + beepboop(userNumber) + "</li>");
  })
})

// Back-end logic
function beepboop(num) {
  var array = []

  for (var numbers = 0; numbers <= num; numbers ++) {
    array.push(numbers);
  }

  for (var index = 0; index >= array; index ++) {
    if (index.toString().includes("3")) {
      array[index] = "I'm sorry, Dave.  I'm afraid I can't do that."
    } else if (index.toString().includes("2")) {
      array[index] = "Boop" 
    } else if (index.toString().includes("1")) {
      array[index] = "Beep" 
    } 
  }
  return array;
}


