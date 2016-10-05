var wins = 0;
	var wordOptions = ['slater', 'kelly', 'zack', 'screech', 'jessie', 'mr.belding'];
	var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	var guesses = 12;
	var wrongLetters = [];
	document.querySelector("#totalWins").innerHTML = wins;
	var characterName = [];

	for (var i = 0; i < randomWord.length; i++) {
		if (randomWord[i] === " ") {
			characterName.push("&nbsp;");
		}
		else  {
			characterName.push("_");
		}
	}

	console.log(randomWord);
	console.log(characterName);

	characterNameHTML = characterName.join(" ");

	document.querySelector("#characterName").innerHTML = characterNameHTML;
	document.querySelector("#guessesLeft").innerHTML = guesses;

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		if (randomWord.indexOf(userGuess) >= 0) {
			console.log("Right");
			for (var i = 0; i < randomWord.length; i++) {
				if (randomWord[i] === userGuess) {
					characterName[i] = userGuess;
				}
			}
			characterNameHTML = characterName.join(" ");
			document.querySelector("#characterName").innerHTML = characterNameHTML.toUpperCase();		
		}
		else if (wrongLetters.indexOf(userGuess) >= 0) {
			console.log("Guessed Already!");
		}
		else {
			guesses--;
			document.querySelector("#guessesLeft").innerHTML = guesses;

			wrongLetters.push(userGuess);
			wrongLettersHTML = wrongLetters.join(" ");
			document.querySelector("#wrongLetters").innerHTML = wrongLettersHTML.toUpperCase();

			console.log("Wrong");
			console.log(wrongLetters);
		}
	}