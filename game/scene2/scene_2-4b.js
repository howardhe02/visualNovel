/*
Title:Who's going to be my date?
Description:This is the scene to the game 2-4b. Makise's path.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;

	$("#btnNext").click(function(event) {
		if(scene=="2-4b"){
			if(optionDialoguePlaying==false){
				dialogueLength=makiseSpeech.eating.length;
				updateDialogue("Makise",makiseSpeech.eating[dialogueNumber]);
				dialogueNumber++;
			}

			if(dialogueNumber==dialogueLength+1){
				scene="2-5";
				$("#cntMakise").hide();
				makiseAffection=updateAffection("makise",25,makiseAffection);
				$(".btnChoose").css("background-color", "lightpink");
				$("#black").fadeIn().fadeOut(5000);
				dialogueNumber=0;
			}
		}
	});
});