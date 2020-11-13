/*
Title: Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/8/11
Description: The code for the guessing game.
*/
"use strict";
$(document).ready(function($){
	//local variables
	let lives=20;
	let wonRounds=0;
	let guessNumber=8;
	let guessNumber2=25;
	let guessNumber3=49;
	let guessNumber4=364;
	let guessNumber5=500;
	
	//this hides stuff
	$("#round2").hide();
	$("#round3").hide();
	$("#round4").hide();
	$("#round5").hide();
	$("#cntHint2").hide();
	$("#cntHint3").hide();
	$("#cntHint4").hide();
	$("#cntHint5").hide();
	$("#cntLoser").hide();
	$("#question2").hide();
	$("#question3").hide();
	$("#question4").hide();
	$("#question5").hide();
	$("#youWin").hide();
	//Round 1
	$("#btnGuess").click(function(event){

		if ($("#txtGuess").val()==guessNumber) 
		{
			wonRounds++;
			$("#round1").fadeOut();
			$("#cntHint").fadeOut();
			$("#round2").fadeIn();
			$("#cntHint2").fadeIn();
			$("#question2").fadeIn();
			$("#question1").hide();
			$('#questionStatement').html("Guess the number of triangles in the picture:");
		}

		else if ($("#txtGuess").val()>=guessNumber-5 && $("#txtGuess").val()<=guessNumber+5) 
		{
			$("#cntHint").html("HOT! HOT! YOUR ANSWER WAS VERY CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else if ($("#txtGuess").val()>=guessNumber-10 && $("#txtGuess").val()<=guessNumber+10) 
		{
			$("#cntHint").html("WARM!YOUR ANSWER WAS SOMEWHAT CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else if ($("#txtGuess").val()<=guessNumber-20 && $("#txtGuess").val()>=guessNumber+10) 
		{
			$("#cntHint").html("YOUR ANSWER WAS COLD!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else
		{
			$("#cntHint").html("NOT EVEN CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
	});
	//Round 2
	$("#btnGuess2").click(function(event){

		if ($("#txtGuess2").val()==guessNumber2) 
		{
			$("#cntHint2").html("YOU GOT IT RIGHT WOW ONII CHAN");
			wonRounds++;
			$("#round2").fadeOut();
			$("#cntHint2").fadeOut();
			$("#round3").fadeIn();
			$("#cntHint3").fadeIn();
			$('#question2').hide();
			$('#question3').fadeIn();
			$('#questionStatement').html("Guess the number of monkeys in the picture:");

		}

		else if ($("#txtGuess2").val()>=guessNumber2-5 && $("#txtGuess2").val()<=guessNumber2+5) 
		{
			$("#cntHint2").html("HOT! HOT! YOUR ANSWER WAS VERY CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else if ($("#txtGuess2").val()>=guessNumber2-10 && $("#txtGuess2").val()<=guessNumber2+10) 
		{
			$("#cntHint2").html("WARM! YOUR ANSWER WAS SOMEWHAT CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else if ($("#txtGuess2").val()<=guessNumber2-20 && $("#txtGuess2").val()>=guessNumber2+10) 
		{
			$("#cntHint2").html("YOUR ANSWER WAS COLD!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else
		{
			$("#cntHint2").html("NOT EVEN CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
	});
	//Round 3
	$("#btnGuess3").click(function(event){


		if ($("#txtGuess3").val()==guessNumber3) 
		{
			$("#cntHint3").html("YOU GOT IT RIGHT WOW ONII CHAN");
			wonRounds++;
			$("#round3").fadeOut();
			$("#cntHint3").fadeOut();
			$("#round4").fadeIn();
			$("#cntHint4").fadeIn();
			$("#question3").hide();
			$("#question4").fadeIn();
			$('#questionStatement').html("How many days are in 52 weeks?");

		}

		else if ($("#txtGuess3").val()>=guessNumber3-5 && $("#txtGuess3").val()<=guessNumber3+5) 
		{
			$("#cntHint3").html("HOT! HOT! YOUR ANSWER WAS VERY CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else if ($("#txtGuess3").val()>=guessNumber3-10 && $("#txtGuess3").val()<=guessNumber3+10) 
		{
			$("#cntHint3").html("WARM!YOUR ANSWER WAS SOMEWHAT CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else if ($("#txtGuess3").val()<=guessNumber3-20 && $("#txtGuess3").val()>=guessNumber3+10) 
		{
			$("#cntHint3").html("YOUR ANSWER WAS COLD!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else
		{
			$("#cntHint3").html("NOT EVEN CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}

	});
		//Round 4
		$("#btnGuess4").click(function(event){


		if ($("#txtGuess4").val()==guessNumber4) 
		{
			$("#cntHint4").html("YOU GOT IT RIGHT WOW ONII CHAN");
			wonRounds++;
			$("#round4").fadeOut();
			$("#cntHint4").fadeOut();
			$("#round5").fadeIn();
			$("#cntHint5").fadeIn();
			$("#question4").hide();
			$("#question5").fadeIn();
			$('#questionStatement').html("How many Canadian cents is 267.22 Indian Rupees?");
		}

		else if ($("#txtGuess4").val()>=guessNumber4-5 && $("#txtGuess4").val()<=guessNumber4+5) 
		{
			$("#cntHint4").html("HOT! HOT! YOUR ANSWER WAS VERY CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else if ($("#txtGuess4").val()>=guessNumber4-10 && $("#txtGuess4").val()<=guessNumber4+10) 
		{
			$("#cntHint4").html("WARM!YOUR ANSWER WAS SOMEWHAT CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else if ($("#txtGuess4").val()<=guessNumber4-20 && $("#txtGuess4").val()>=guessNumber4+10) 
		{
			$("#cntHint4").html("YOUR ANSWER WAS COLD!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else
		{
			$("#cntHint4").html("NOT EVEN CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}

	});
		//Round 5
		$("#btnGuess5").click(function(event){


		if ($("#txtGuess5").val()==guessNumber5) 
		{
			$("#cntHint5").html("YOU GOT IT RIGHT WOW ONII CHAN");
			wonRounds++;
			$("#question5").hide();
			$("#youWin").fadeIn();
			$('#questionStatement').html("YOU WIN!");
			//transition page into winning scene!!!
		
		}

		else if ($("#txtGuess5").val()>=guessNumber5-5 && $("#txtGuess5").val()<=guessNumber5+5) 
		{
			$("#cntHint5").html("HOT! HOT! YOUR ANSWER WAS VERY CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else if ($("#txtGuess5").val()>=guessNumber5-10 && $("#txtGuess5").val()<=guessNumber5+10) 
		{
			$("#cntHint5").html("WARM!YOUR ANSWER WAS SOMEWHAT CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else if ($("#txtGuess5").val()<=guessNumber5-20 && $("#txtGuess5").val()>=guessNumber5+10) 
		{
			$("#cntHint5").html("YOUR ANSWER WAS COLD!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
		else
		{
			$("#cntHint5").html("NOT EVEN CLOSE!");
			playerLoss(lives);
			lives=lives-1;
			$("#cntLives").html("Lives: "+lives);
		}
	});

	$("#sajeivsQuitButtonForHisGame").click(function(event) {
		if(wonRounds>5){
			wonRounds=5;
		}
		playerMiniGameScore=wonRounds;
		$("#cntGuessingGame").fadeOut();
	});
});

function playerLoss(livesRemaining)
{
	if(livesRemaining==1)
	{
		$("#cntGameSajeivGame").fadeOut();
		$("#cntLoser").fadeIn();
		//Include an if statement with the different story paths that will load based on the "wonRounds" variable!
		//If wonRounds=0 do this || or if wonRounds=3 do this
	}
}