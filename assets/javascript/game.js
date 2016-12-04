
    // creates array with uppercase letters A through Z
    var alphabet = [];

    for (var c = 65; c < 91; c++)
      {
        alphabet.push(String.fromCharCode(c));
      }

      console.log(alphabet);

  	var wins = 0;
  	var losses = 0;
  	var guessesleft = 9;
  	var randomletter;
  	function getRandom(){
  		var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  	 	console.log(randomLetter);
  	 };


  	
  	document.onkeyup = function(event) {
  	 	answer = getRandom();
  		
  	 	var guess = event.key;
  	 	var capGuess = guess.toUpperCase();
  	 	
  	 	if (capGuess === answer)
  	 		{
  	 			wins++;
  	 			alert("You win!!!!");
  	 			var replay = confirm("Do you want to play again?");
  	 			if (replay == true)
  	 			{
  	 				guessesleft = 9;
  	 				var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  	 	console.log(randomLetter);
  	 			}
  	 			
  	 		}

  	 	if (capGuess != randomLetter)
  	 		{
  	 			guessesleft--;
  	 		}

  	 	var inject = 
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses: " + guessesleft + "</p>";
        document.querySelector("#psy").innerHTML = inject;  
	      

	      var logDiv = document.getElementById("log");
	      var soFar = document.createElement("p");

	      soFar.innerHTML = (capGuess + ", ");
	      logDiv.appendChild(soFar);
	      soFar.setAttribute("class", "liner");
	}




  	
		
		