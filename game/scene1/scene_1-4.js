/*
Title:Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/1/11
Description:This is the first scene to the game 1-4.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;

	$("#btnNext").click(function(event) {
		if(scene=="1-4"){
			$(".btnChoose").css("background-color", "lightpink");
			if(optionDialoguePlaying==false){
				dialogueLength=aquaspeech.schoolFront.length;
				updateDialogue("Aqua",aquaspeech.schoolFront[dialogueNumber]);
				dialogueNumber++;

				if(dialogueNumber==3){
					optionDialoguePlaying=true;
					$("#cntOptions").fadeIn();
					$("#option1").html("Of course!");
					$("#option2").html("Not today");
					$("#option3").html("No. Why would I go with you?");
				}

				//here a second choice is presented to the player in the same scene
				else if(dialogueNumber==4){
					optionDialogueNumber=0;
					optionDialoguePlaying=true;
					$("#cntOptions").fadeIn();
					$("#option1").html("Sure");
					$("#option2").html("Not today");
					$("#option3").html("...");
				}
			}

			/*first choice*/
			if(dialogueNumber==3){
				if(optionValue=="option1"){
					optionDialogueNumber=optionDialogue("Aqua",aquaspeech.schoolFrontOption1,optionDialogueNumber,0);

					if(optionDialogueNumber>aquaspeech.schoolFrontOption1[0].length-1){
						aquaAffection=updateAffection("aqua",25,aquaAffection);

						optionDialoguePlaying=false;
						optionValue=null;
					}
				}

				else if(optionValue=="option2"){
					optionDialogueNumber=optionDialogue("Aqua",aquaspeech.schoolFrontOption2,optionDialogueNumber,0);

					if(optionDialogueNumber>aquaspeech.schoolFrontOption2[0].length-1){
						optionDialoguePlaying=false;
						optionValue=null;
					}
				}

				else if(optionValue=="option3"){
					optionDialogueNumber=optionDialogue("Aqua",aquaspeech.schoolFrontOption3,optionDialogueNumber,0);

					if(optionDialogueNumber>aquaspeech.schoolFrontOption3[0].length-1){
						optionDialoguePlaying=false;
						optionValue=null;
						aquaAffection=updateAffection("aqua",-15,aquaAffection);
					}
				}
			}

			/*2nd choice*/
			//this is the second option's choices
			else if(dialogueNumber==4){				
				if(optionValue=="option1"){
					optionDialogueNumber=optionDialogue("Aqua",aquaspeech.schoolFrontOption1,optionDialogueNumber,1);

					if(optionDialogueNumber>aquaspeech.schoolFrontOption1[1].length-1){
						optionDialoguePlaying=false;
						optionValue=null;
						aquaAffection=updateAffection("aqua",5,aquaAffection);
					}
				}

				else if(optionValue=="option2"){
					optionDialogueNumber=optionDialogue("Aqua",aquaspeech.schoolFrontOption2,optionDialogueNumber,1);

					if(optionDialogueNumber>aquaspeech.schoolFrontOption2[1].length-1){
						optionDialoguePlaying=false;
						optionValue=null;
					}
				}

				else if(optionValue=="option3"){
					optionDialogueNumber=optionDialogue("Aqua",aquaspeech.schoolFrontOption3,optionDialogueNumber,1);

					if(optionDialogueNumber>aquaspeech.schoolFrontOption3[1].length-1){
						optionDialoguePlaying=false;
						optionValue=null;
					}
				}
			}

			if(dialogueNumber==dialogueLength+1){
				scene="1-5";
				$(".btnChoose").css("background-color", "lightpink");
				$("#gameScreen").css("background-image", "url(images/backgroundRoom.jpg)");
				dialogueNumber=0;
				$("#cntAqua").hide();
				$("#gameScreen").fadeOut(1000).delay(100).fadeIn(1000);
			}
		}
	});
});
