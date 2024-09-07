/*
Title:Who's going to be my date?
Description:This is the second scene to the game, hiyoris path 2-2c.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;
	$("#btnNext").click(function(event) {
		if(scene=="2-2c"){
			$(".btnChoose").show();
			if(optionDialoguePlaying==false){
				dialogueLength=hiyorispeech.festivalHiyori.length;
				updateDialogue("Hiyori",hiyorispeech.festivalHiyori[dialogueNumber]);
				dialogueNumber++;

				if(dialogueNumber==8){
					optionDialoguePlaying=true;
					$("#cntOptions").fadeIn();
					$("#option1").html("There's a fun looking game over there!");
					$("#option2").html("What you want to do, Hiyori.");
					$("#option3").html("Let's try out the food!");
				}
			}

			/*first choice*/
			if(dialogueNumber==8){
				if(optionValue=="option1"){
					optionDialogueNumber=optionDialogue(playerName,hiyorispeech.festivalHiyoriOption1,optionDialogueNumber);

					if(optionDialogueNumber>hiyorispeech.festivalHiyoriOption1.length){
						optionDialoguePlaying=false;
						optionValue=null;
						$("#cntGuessingGame").fadeIn();
					}
				}

				else if(optionValue=="option2"){
					optionDialogueNumber=optionDialogue(playerName,hiyorispeech.festivalHiyoriOption2,optionDialogueNumber);

					if(optionDialogueNumber>hiyorispeech.festivalHiyoriOption2.length){
						optionDialoguePlaying=false;
						optionValue=null;
						$("#cntGuessingGame").fadeIn();
					}
				}

				else if(optionValue=="option3"){
					optionDialogueNumber=optionDialogue(playerName,hiyorispeech.festivalHiyoriOption3,optionDialogueNumber);

					if(optionDialogueNumber>hiyorispeech.festivalHiyoriOption3.length){
						optionDialoguePlaying=false;
						optionValue=null;
						$("#cntGuessingGame").fadeIn();
					}
				}
			}

			if(dialogueNumber==dialogueLength+1){
			hiyoriAffection=updateAffection("hiyori",(6*playerMiniGameScore),hiyoriAffection);

				if(girlNames.length==1){
					scene="2-3";
					$(".btnChoose").css("background-color", "lightpink");
					// $("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
					dialogueNumber=0;
					$("#cntHiyori").hide();
				}
				else{
					scene="2-1";
					$(".cntCharacterText2").html(playerName);
					$("#speechText").html("...Kawaii!");
					textAnimation();
					//I have to hide the one you already clicked on because you don't want to visit the same girl twice
					//reshow hidden option boxes
					$(".btnChoose").css("background-color", "lightpink");
					// $("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
					dialogueNumber=0;
					$("#cntHiyori").hide();
					hideGirl();
				}
			}
		}
	});
});
