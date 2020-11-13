/*
Title:Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/1/11
Description:This is the second scene to the, aqua's path 2-2a.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;
	$("#btnNext").click(function(event) {
		if(scene=="2-2a"){
			$(".btnChoose").show();

			if(optionDialoguePlaying==false){
				dialogueLength=aquaspeech.festivalAqua.length;
				updateDialogue("Aqua",aquaspeech.festivalAqua[dialogueNumber]);
				dialogueNumber++;

				if(dialogueNumber==5){
					optionDialoguePlaying=true;
					$("#cntOptions").fadeIn();
					$("#option1").html("Let's go play that matching game!");
					$("#option2").html("Whatever you want to do");
					$("#option3").html("I'm hungry, let's go eat");
				}
			}

			/*first choice*/
			if(dialogueNumber==5){
				if(optionValue=="option1"){
					optionDialogueNumber=optionDialogue("Aqua",aquaspeech.festivalAquaOption1,optionDialogueNumber);

					if(optionDialogueNumber>aquaspeech.festivalAquaOption1.length){
						optionDialoguePlaying=false;
						optionValue=null;
						$("#gameScreenCardMatchGame").fadeIn();
					}
				}

				else if(optionValue=="option2"){
					optionDialogueNumber=optionDialogue("Aqua",aquaspeech.festivalAquaOption2,optionDialogueNumber);

					if(optionDialogueNumber>aquaspeech.festivalAquaOption2.length){
						optionDialoguePlaying=false;
						optionValue=null;
						$("#gameScreenCardMatchGame").fadeIn();	
					}
				}

				else if(optionValue=="option3"){
					optionDialogueNumber=optionDialogue("Aqua",aquaspeech.festivalAquaOption3,optionDialogueNumber);

					if(optionDialogueNumber>aquaspeech.festivalAquaOption3.length){
						optionDialoguePlaying=false;
						optionValue=null;
						$("#gameScreenCardMatchGame").fadeIn();
					}
				}
			}

			/*Here it gets complicated...
			it first checks if the next scene is ready in the if statemet
			Then it checks if the player has checked on the 3 girls.
			If they have not, then the code sends the player back to a screen with the remaining options
			*/
			if(dialogueNumber==dialogueLength+1){
				aquaAffection=updateAffection("aqua",(2*playerMiniGameScore),aquaAffection);

				if(girlNames.length==1){
					scene="2-3";
					$(".btnChoose").css("background-color", "lightpink");
					$("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
					dialogueNumber=0;
					$("#cntAqua").hide();
				}
				else{
					scene="2-1";
					$(".cntCharacterText2").html(playerName);
					$("#speechText").html("...I'm back here now.");
					textAnimation();				
					//I have to hide the one you already clicked on because you don't want to visit the same girl twice
					//reshow hidden option boxes
					$(".btnChoose").css("background-color", "lightpink");
					$("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
					dialogueNumber=0;
					$("#cntAqua").hide();
					hideGirl();
				}
			}
		}
	});
});
