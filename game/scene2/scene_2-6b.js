/*
Title:Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/1/11
Description: This is seriously getting long and tedious 2-6b.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;
	let accepted=null;

	$("#btnNext").click(function(event) {
		if(scene=="2-6b"){
			if(accepted==null){
				accepted=checkIfYouAreNotALonerLOL(makiseAffection);
			}

			if(accepted){
				optionDialogueNumber=optionDialogue("Makise",makiseSpeech.datingWin,optionDialogueNumber);
				/*Here the player is sucsessfull and fades in a winner screen*/

				if(optionDialogueNumber==makiseSpeech.datingWin.length+1){
					$("#gameScreen").fadeOut(1000);
					$("#gameScreenSuccess").fadeIn(1000);
				}
			}

			else{
				optionDialogueNumber=optionDialogue("Makise",makiseSpeech.datingFail,optionDialogueNumber);
				/*Here the player failed and fades in a loser screen*/

				if(optionDialogueNumber==makiseSpeech.datingFail.length+1){
					$("#gameScreen").fadeOut(1000);
					$("#gameScreenFail").fadeIn(1000);
				}
			}
		}
	});
});