// // creating arrays for words//

var bears = ["B", "E", "A", "R", "S"];
var packers = ["P", "A", "C", "K", "E", "R", "S"];
var five = [" ", " ", " ", " ", " "];





var newbears = new Array(bears.length);

for (var i = 0, n = bears.length; i < n; i++)
{
   bears[i] = "sghsgh";
}

function printNewbears(){
  for (var i = 0; i < newbears.length; i++){
  var letter = document.getElementById("letter");
  var buchstabe = document.createTextNode(newbears[i]);
  letter.appendChild(buchstabe);
  }
}