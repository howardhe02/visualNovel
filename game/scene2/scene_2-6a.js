/*
Title:Who's going to be my date?
Description: We need a break pls.... longer than 20 hours of work...scene 2-6a
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;
	let accepted=null;

	$("#btnNext").click(function(event) {
		if(scene=="2-6a"){
			if(accepted==null){
				accepted=checkIfYouAreNotALonerLOL(aquaAffection);
			}

			if(accepted){
				optionDialogueNumber=optionDialogue("Aqua",aquaspeech.datingWin,optionDialogueNumber);
				/*Here the player is sucsessfull and fades in a winner screen*/
				if(optionDialogueNumber==aquaspeech.datingWin.length+1){
					$("#gameScreen").fadeOut(1000);
					$("#gameScreenSuccess").fadeIn(1000);
				}
			}

			else{
				optionDialogueNumber=optionDialogue("Aqua",aquaspeech.datingFail,optionDialogueNumber);
				/*Here the player failed and fades in a loser screen*/
				if(optionDialogueNumber==aquaspeech.datingFail.length+1){
					$("#gameScreen").fadeOut(1000);
					$("#gameScreenFail").fadeIn(1000);
				}
			}
		}
	});
});
