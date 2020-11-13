/*
Title:Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/1/11
Description: i want to watch anime all day long and watch hentai but theres too much work and I have no sleep because im too lazy pls scene 2-6
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;
	let accepted=null;

	$("#btnNext").click(function(event) {
		if(scene=="2-6c"){
			if(accepted==null){
				accepted=checkIfYouAreNotALonerLOL(hiyoriAffection);
			}
			console.log(accepted);
			if(accepted){
				optionDialogueNumber=optionDialogue("Hiyori",hiyorispeech.datingWin,optionDialogueNumber);
				/*Here the player is sucsessfull and fades in a winner screen*/

				if(optionDialogueNumber==hiyorispeech.datingWin.length+1){
					$("#gameScreen").fadeOut(1000);
					$("#gameScreenSuccess").fadeIn(1000);
				}
			}

			else{
				optionDialogueNumber=optionDialogue("Hiyori",hiyorispeech.datingFail,optionDialogueNumber);
				/*Here the player failed and fades in a loser screen*/

				if(optionDialogueNumber==hiyorispeech.datingFail.length+1){
					$("#gameScreen").fadeOut(1000);
					$("#gameScreenFail").fadeIn(1000);
				}
			}
		}
	});
});
