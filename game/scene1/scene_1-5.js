/*
Title:Who's going to be my date?
Description:This is the first scene to the game 1-5.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;

	$("#btnNext").click(function(event) {
		if(scene=="1-5"){
			console.log(dialogueNumber);
			if(optionDialoguePlaying==false){
				dialogueLength=playerSpeech.room.length;
				updateDialogue(playerName,playerSpeech.room[dialogueNumber]);
				dialogueNumber++;

				if(dialogueNumber==5){
					optionDialoguePlaying=true;
					$("#cntOptions").fadeIn();
					$("#option1").html("Water Bottle");
					$("#option2").html("Dr. Pepper");
					$("#option3").html("Sakura Flower");
				}
			}

			/*first choice*/
			if(dialogueNumber==5){
				if(optionValue=="option1"){
					optionDialogueNumber=optionDialogue(playerName,playerSpeech.roomOption1,optionDialogueNumber);

					if(optionDialogueNumber>playerSpeech.roomOption1.length-1){
						optionDialoguePlaying=false;
						optionValue=null;
						obtainedItem("Water Bottle","items/waterBottle.png");
					}
				}

				else if(optionValue=="option2"){
					optionDialogueNumber=optionDialogue(playerName,playerSpeech.roomOption2,optionDialogueNumber);

					if(optionDialogueNumber>playerSpeech.roomOption2.length-1){
						optionDialoguePlaying=false;
						optionValue=null;
						obtainedItem("Dr.Pepper","items/drPepper.png");
					}
				}

				else if(optionValue=="option3"){
					optionDialogueNumber=optionDialogue(playerName,playerSpeech.roomOption3,optionDialogueNumber);

					if(optionDialogueNumber>playerSpeech.roomOption3.length-1){
						optionDialoguePlaying=false;
						optionValue=null;
						obtainedItem("Sakura Flower","items/sakura.png");

					}
				}
			}

			if(dialogueNumber==dialogueLength+1){
				scene="2-1";
				//reshow hidden option boxes
				$("#option3").show();
				$(".btnChoose").css("background-color", "lightpink");
				// $("#gameScreen").fadeOut(1000).fadeIn(1000);
				$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
				dialogueNumber=0;
			}
		}
	});
});
