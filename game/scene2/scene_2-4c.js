/*
Title:Who's going to be my date?
Description:This is the scene to the game 2-4c. Hiyori's path.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;

	$("#btnNext").click(function(event) {
		if(scene=="2-4c"){
			if(optionDialoguePlaying==false){
				dialogueLength=hiyorispeech.eating.length;
				updateDialogue("Hiyori",hiyorispeech.eating[dialogueNumber]);
				dialogueNumber++;
			}

			if(dialogueNumber==dialogueLength+1){
				scene="2-5";
				$("#cntHiyori").hide();
				hiyoriAffection=updateAffection("hiyori",25,hiyoriAffection);
				$(".btnChoose").css("background-color", "lightpink");
				$("#black").fadeIn().fadeOut(5000);
				dialogueNumber=0;
			}
		}
	});
});