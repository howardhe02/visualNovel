/*
Title:Who's going to be my date?
Description:This is the second scene to the game, makises path 2-2b.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;
	$("#btnNext").click(function(event) {
		if(scene=="2-2b"){
			$(".btnChoose").show();
			if(optionDialoguePlaying==false){
				dialogueLength=makiseSpeech.festivalMakise.length;
				updateDialogue("Makise",makiseSpeech.festivalMakise[dialogueNumber]);
				dialogueNumber++;

				if(dialogueNumber==4){
					optionDialoguePlaying=true;
					$("#cntOptions").fadeIn();
					$("#option1").html("How about riddles?");
					$("#option2").html("I don't know");
					$("#option3").html("I'm hungry");
				}
			}

			/*first choice*/
			if(dialogueNumber==4){
				if(optionValue=="option1"){
					optionDialogueNumber=optionDialogue("Makise",makiseSpeech.festivalMakiseOption1,optionDialogueNumber);

					if(optionDialogueNumber>makiseSpeech.festivalMakiseOption1.length-1){
						optionDialoguePlaying=false;
						optionValue=null;
					}
				}

				else if(optionValue=="option2"){
					optionDialogueNumber=optionDialogue("Makise",makiseSpeech.festivalMakiseOption2,optionDialogueNumber);

					if(optionDialogueNumber>makiseSpeech.festivalMakiseOption2.length-1){
						optionDialoguePlaying=false;
						optionValue=null;
					}
				}

				else if(optionValue=="option3"){
					optionDialogueNumber=optionDialogue("Makise",makiseSpeech.festivalMakiseOption3,optionDialogueNumber);

					if(optionDialogueNumber>makiseSpeech.festivalMakiseOption3.length-1){
						optionDialoguePlaying=false;
						optionValue=null;

					}
				}
			}

			if(dialogueNumber==dialogueLength+1){
				if(girlNames.length==1){
					scene="2-3";
					$(".btnChoose").css("background-color", "lightpink");
					$("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
					dialogueNumber=0;
					$("#cntMakise").hide();
				}
				else{
					scene="2-1";
					$(".cntCharacterText2").html(playerName);
					$("#speechText").html("...I survived Makise!");
					textAnimation();
					//I have to hide the one you already clicked on because you don't want to visit the same girl twice
					//reshow hidden option boxes
					$(".btnChoose").css("background-color", "lightpink");
					// $("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
					dialogueNumber=0;
					$("#cntMakise").hide();
					hideGirl(playerChoices);
				}
			}
		}
	});
});
