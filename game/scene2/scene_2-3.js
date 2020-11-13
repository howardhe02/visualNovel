/*
Title:Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/1/11
Description:This is the third scene to the game 2-3.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;
	optionDialoguePlaying=false;

	$("#btnNext").click(function(event) {
		if(scene=="2-3"){
			if(optionDialoguePlaying==false){
				dialogueLength=playerSpeech.festivalFood.length;
				updateDialogue(playerName,playerSpeech.festivalFood[dialogueNumber]);
				dialogueNumber++;

				if(dialogueNumber==dialogueLength){
					optionDialoguePlaying=true;
					$("#cntOptions").fadeIn();
					$("#option1").html("Aqua");
					$("#option2").html("Makise");
					$("#option3").html("Hiyori");
				}
			}

			/*first choice*/
			if(dialogueNumber==8){
				if(optionValue=="option1"){
					optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalFoodOption1,optionDialogueNumber);

					if(optionDialogueNumber>playerSpeech.festivalFoodOption1.length-1){
						optionDialoguePlaying=false;
						optionValue="Aqua";
					}
				}

				else if(optionValue=="option2"){
					optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalFoodOption2,optionDialogueNumber);

					if(optionDialogueNumber>playerSpeech.festivalFoodOption2.length-1){
						optionDialoguePlaying=false;
						optionValue="Makise";
					}
				}

				else if(optionValue=="option3"){
					optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalFoodOption3,optionDialogueNumber);

					if(optionDialogueNumber>playerSpeech.festivalFoodOption3.length-1){
						optionDialoguePlaying=false;
						optionValue="Hiyori";
					}
				}
			}

			/*This just checks which option the player chose and sends them to 
			the correct scene*/
			if(dialogueNumber==dialogueLength+1){
				if(optionValue=="Aqua"){
					scene="2-4a";

					$(".btnChoose").css("background-color", "lightpink");
					$("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
					dialogueNumber=0;	
					optionValue=null;
					$("#cntAqua").show();				
				}

				if(optionValue=="Makise"){
					scene="2-4b";

					$(".btnChoose").css("background-color", "lightpink");
					$("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
					dialogueNumber=0;	
					optionValue=null;	
					$("#cntMakise").show();				
				}

				if(optionValue=="Hiyori"){
					scene="2-4c";

					$(".btnChoose").css("background-color", "lightpink");
					$("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
					dialogueNumber=0;
					optionValue=null;
					$("#cntHiyori").show();						
				}
			}
		}
	});
});
