/*
Title: Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/8/11
Description: The code for the matching game.
*/
$(document).ready(function($) {
	let firstGuess=null;
	let firstGuessId=null;
	let secondGuess=null;
	let secondGuessId=null;
	let nextRound=false;
	let roundPairs=0;
	let pairs=0;
	let lives=3;
	let lost=false;
	let clickedNext=1;
	let playerHighScore=0;
	let hidden=false;
	let highScores= [
		[
			10,
			99999999999,
			5
		],

		[
			"Makise",
			"Aqua",
			"Hiyori"
		]

	]

	for(let x=0;x<8;x++){
		$("#gameTable").prepend("<div value='' class='cardBoxes' id='cardBox"+x+"'></div>");
	}

	$("#cntHighScores").hide();

	resetCards(1);

	$("#nextButtonCardMatchGame").click(function(event) {
		/* Act on the event */
		if(clickedNext==0){
			clickedNext++;
			resetCards(1);
			roundPairs=0;
			$("#gameTableHider").show();

			if(lost){
				$("#cardMatchingGamelives").html("Lives Left: "+lives);
				$("#correctPairs").html("Pairs: "+pairs);
				$("#nextButtonCardMatchGame").html("NEXT!");
			}
		}

		else{
			resetCards(2);
			clickedNext=0;
			$("#gameTableHider").hide();
		}
	});

	$(".cardBoxes").click(function(event) {
		//for some reason this if statememnt is needed to lock the cards... Dunno why tho
		//when the code changes the calss to 'none'.. this code block still runs, so this if statement makes sure the class is not none
		let cardClass=$(this).prop('class');

		if(cardClass!="none"){
			if(firstGuess==null || nextRound){
				//reset last round cards
				nextRound=false;
				if(secondGuess!=firstGuess){
					$("#cardCover"+firstGuessId).fadeIn();
					$("#cardCover"+secondGuessId).fadeIn();
					lives=lives-1;
					$("#cardMatchingGamelives").html("Lives Left: "+lives);
				}

				firstGuess=null;
				secondGuess=null;

				firstGuess=$(this).attr("value");
				firstGuessId=$(this).attr("id");
				$("#cardCover"+firstGuessId).fadeOut();
			}

			else if(secondGuess==null){
				secondGuess=$(this).attr("value");
				secondGuessId=$(this).attr("id");
				$("#cardCover"+secondGuessId).fadeOut();
				nextRound=true;

				if(secondGuessId==firstGuessId){
					firstGuess='asdadsaddgfeqw';
					lives+=1;
					$("#cardCover"+firstGuessId).fadeIn();				
				}

				if(secondGuess==firstGuess){
					$("#"+secondGuessId).css('background-color', 'green');
					$("#"+firstGuessId).css('background-color', 'green');
					//make cards unclickable
					$("#"+secondGuessId).prop('class', 'none');
					$("#"+firstGuessId).prop('class', 'none');
					//add pairs
					pairs++;
					roundPairs++;
					$("#correctPairs").html("Pairs: "+pairs);

					if(playerHighScore<pairs){
						playerHighScore=pairs;
					}
				}

				if(roundPairs==4){
					$("#nextButtonCardMatchGame").show();
				}

				if(secondGuess!=firstGuess && lives==0){
					lost=true;
					$("#nextButtonCardMatchGame").html("OUT OF LIVES! RETRY!");
					lives=3;
					pairs=0;
					$("#gameTableHider").show();
					$("#nextButtonCardMatchGame").show();
				}
			}
		}
	});

	/*this quits the game and sets the playerMiniGameScore to player high score.
	playerMiniGameScore is used to calculate an affection increase*/
	$("#btnQuit").click(function(event) {
		playerMiniGameScore=playerHighScore;
		$("#gameScreenCardMatchGame").fadeOut();
	});

	$("#btnHighScores").click(function(event) {
		cardGameHighScores();
	});

	/*This function uses bubble sorting to align names and their respective scores*/
	function cardGameHighScores(){
		if(hidden==false){
			$("#btnHighScores").css({
				'background-color' : 'white',
				'color' : 'black'
			});

			highScores[0].push(pairs);
			highScores[1].push(playerName);
			hidden=true;

			/*BUBBLE SORTING BE LIKE...for scores*/
			for(let x=1;x<3;x++){
				for(let y=0;y<3;y++){
					if(highScores[0][y]<highScores[0][y+1]){
						let temp=highScores[0][y+1];
						highScores[0][y+1]=highScores[0][y];
						highScores[0][y]=temp;
						//swap names
						temp=highScores[1][y+1];
						highScores[1][y+1]=highScores[1][y];
						highScores[1][y]=temp;
					}
				}
			}

			highScores[0].pop();
			highScores[1].pop();

			$("#firstPlaceScore").html(highScores[1][0]+": "+highScores[0][0]);
			$("#secondPlaceScore").html(highScores[1][1]+": "+highScores[0][1]);
			$("#thirdPlaceScore").html(highScores[1][2]+": "+highScores[0][2]);

			$("#cntHighScores").show();
		}

		else if(hidden==true){
			hidden=false;
			$("#cntHighScores").hide();
			$("#btnHighScores").css({
				'background-color' : 'black',
				'color' : 'white'
			});
		}
	}

	function resetCards(part){
	if(part==1){
		//reset card classes
		for(let x=0;x<8;x++){
			$("#cardBox"+x).prop('class', 'cardBoxes').css('background-color', 'white');

		}

		//this is all the posibilities for the card words
		let matches=[
			[
				"Cow",
				"Horse",
				"Fish",
				"Dog"
			],

			[
				"s45",
				"s98",
				"s40",
				"s88"
			],

			[
				"Nier",
				"FFXV",
				"Beseria",
				"Zestria"
			],

			[
				"Sajeiv",
				"Howard",
				"Kowan",
				"Kirnic"
			],

			[
				"Kirby",
				"Snake",
				"Mario",
				"Luigi"
			],

			[
				"Fish",
				"Cat",
				"Dog",
				"Monkey"
			],

			[
				"Konosuba",
				"Steins Gate",
				"Noragami",
				"Mankitsu",
			]
		]

		//this allows ease of reset by cycling through the array
		let cards=[
			"cardBox0",
			"cardBox1",
			"cardBox2",
			"cardBox3",
			"cardBox4",
			"cardBox5",
			"cardBox6",
			"cardBox7",
		]

		let category=Math.round(Math.random()*(matches.length-1));

		for(let x=0;x<4;x++){
			let word=Math.round(Math.random()*(matches[category].length-1));
			let temp=Math.round(Math.random()*(cards.length-1));
			//first matching card
			$("#"+cards[temp]).html("<div class='cardMatchItems' style='position:absolute;'>"+matches[category][word]+"</div>");
			$("#"+cards[temp]).attr('value', matches[category][word]);
			cards.splice(temp,1);

			//second matching card
			temp=Math.round(Math.random()*(cards.length-1));
			$("#"+cards[temp]).html("<div class='cardMatchItems' style='position:absolute;'>"+matches[category][word]+"</div>");
			$("#"+cards[temp]).attr('value', matches[category][word]);
			cards.splice(temp,1);

			matches[category].splice(word,1);
			}
		}

		else if(part==2){
			for(let x=0;x<8;x++){
				$("#cardBox"+x).append("<img class='cardCover' id='cardCovercardBox"+x+"' src='minigames/cardMatchGame/images/cardMatchGameImgs/card55.JPG'>");
			}

			$("#nextButtonCardMatchGame").hide();
			$(".cardCover").show();
		}
	}
});