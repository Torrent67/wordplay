
var input1;
var input2 = [];

  $(document).ready(function() {
    $("form#add").submit(function(event) {

      input1 = $("input#wordPlay").val();

      var array1 = input1.split(" ");
    console.log(array1);

      event.preventDefault();

      array1.forEach(function(letter) {
        if (letter.length > 3) {
          input2.push(letter);
        }

console.log(input2);
    });

      input2 = [];
   });

    });
