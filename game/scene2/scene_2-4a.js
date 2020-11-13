/*
Title:Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/1/11
Description:This is the scene to the game 2-4a. Aqua's path.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;

	$("#btnNext").click(function(event) {
		if(scene=="2-4a"){
			if(optionDialoguePlaying==false){
				dialogueLength=aquaspeech.eating.length;
				updateDialogue("Aqua",aquaspeech.eating[dialogueNumber]);
				dialogueNumber++;
			}

			if(dialogueNumber==dialogueLength+1){
				scene="2-5";
				$("#cntAqua").hide();
				aquaAffection=updateAffection("aqua",25,aquaAffection);
				$(".btnChoose").css("background-color", "lightpink");
				$("#black").fadeIn().fadeOut(5000);
				dialogueNumber=0;
			}
		}
	});
});