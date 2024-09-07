/*
Title:Who's going to be my date?
Description:This is the scene to the game 2-5.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;

	$("#btnNext").click(function(event) {
		if(scene=="2-5"){
			if(optionDialoguePlaying==false){
				dialogueLength=playerSpeech.endGame.length;
				updateDialogue(playerName,playerSpeech.endGame[dialogueNumber]);
				dialogueNumber++;

				if(dialogueNumber==10){
					optionDialoguePlaying=true;
					$("#cntOptions").fadeIn();
					$("#option1").html("Aqua");
					$("#option2").html("Makise");
					$("#option3").html("Hiyori");
				}
			}

			/*first choice*/
			if(dialogueNumber==10){
				if(optionValue=="option1"){
					optionDialogueNumber=optionDialogue(playerName,playerSpeech.endGameOption1,optionDialogueNumber);

					if(optionDialogueNumber>playerSpeech.endGameOption1.length-1){
						optionDialoguePlaying=false;
						optionValue="Aqua";
					}
				}

				else if(optionValue=="option2"){
					optionDialogueNumber=optionDialogue(playerName,playerSpeech.endGameOption2,optionDialogueNumber);

					if(optionDialogueNumber>playerSpeech.endGameOption2.length-1){
						optionDialoguePlaying=false;
						optionValue="Makise";
					}
				}

				else if(optionValue=="option3"){
					optionDialogueNumber=optionDialogue(playerName,playerSpeech.endGameOption3,optionDialogueNumber);

					if(optionDialogueNumber>playerSpeech.endGameOption3.length-1){
						optionDialoguePlaying=false;
						optionValue="Hiyori";
					}
				}
			}

			/*This does the same thing as previouysly stated,
			exept its for the last scene*/
			if(dialogueNumber==dialogueLength+1){
				if(optionValue=="Aqua"){
					scene="2-6a";

					$(".btnChoose").css("background-color", "lightpink");
					$("#black").fadeIn().fadeOut(5000);
					$("#gameScreen").css("background-image", "url(images/backgroundFireworks.jpg)");
					dialogueNumber=0;	
					$("#cntAqua").show();				
				}

				if(optionValue=="Makise"){
					scene="2-6b";

					$(".btnChoose").css("background-color", "lightpink");
					$("#black").fadeIn().fadeOut(5000);
					$("#gameScreen").css("background-image", "url(images/backgroundFireworks.jpg)");
					dialogueNumber=0;		
					$("#cntMakise").show();				
				}

				if(optionValue=="Hiyori"){
					scene="2-6c";

					$(".btnChoose").css("background-color", "lightpink");
					$("#black").fadeIn().fadeOut(5000);
					$("#gameScreen").css("background-image", "url(images/backgroundFireworks.jpg)");
					dialogueNumber=0;
					$("#cntHiyori").show();						
				}
			}
		}
	});
});
