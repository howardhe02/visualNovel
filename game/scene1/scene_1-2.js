/*
Title:Who's going to be my date?
Description:This is the first scene to the game 1-2.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;

	$("#btnNext").click(function(event) {
		if(scene=="1-2"){
			if(optionDialoguePlaying==false){
				dialogueLength=hiyorispeech.hallway.length;
				updateDialogue("Hiyori",hiyorispeech.hallway[dialogueNumber]);
				dialogueNumber++;

				//this is where the first player choice is shown,any simmilar blocks do the same
				if(dialogueNumber==4){
					optionDialoguePlaying=true;
					$("#cntOptions").fadeIn();
					$("#option1").html("I'm going to the festival, wanna come?");
					$("#option2").html("Nothing much, just gonna watch anime at home");
					$("#option3").html("Why do you care?");
				}
			}

			/*Here the code checks wich option is selected and plays dialogue accordingly*/
			else if(optionValue=="option1"){
				optionDialogueNumber=optionDialogue("Hiyori",hiyorispeech.hallwayOption1,optionDialogueNumber);

				if(optionDialogueNumber>hiyorispeech.hallwayOption1.length-1){
					optionDialoguePlaying=false;
					optionValue=null;
					hiyoriAffection=updateAffection("hiyori",20,hiyoriAffection);
				}
			}

			else if(optionValue=="option2"){
				optionDialogueNumber=optionDialogue("Hiyori",hiyorispeech.hallwayOption2,optionDialogueNumber);	
				
				if(optionDialogueNumber>hiyorispeech.hallwayOption2.length-1){
					optionDialoguePlaying=false;
					optionValue=null;
					obtainedItem("Goblin Slayer DVD","items/goblinSlayer.png");
				}
			}

			else if(optionValue=="option3"){
				optionDialogueNumber=optionDialogue("Hiyori",hiyorispeech.hallwayOption3,optionDialogueNumber);	
			
				if(optionDialogueNumber>hiyorispeech.hallwayOption3.length-1){
					hiyoriAffection=updateAffection("hiyori",-10,hiyoriAffection);
					optionDialoguePlaying=false;
					optionValue=null;
				}
			}
			
			if(dialogueNumber==dialogueLength+1){
				scene="1-3";
				$(".btnChoose").css("background-color", "lightpink");
				// $("#gameScreen").fadeOut(1000).fadeIn(1000);
				$("#gameScreen").css("background-image", "url(images/backgroundClassroom.jpg)");
				dialogueNumber=0;
				$("#cntHiyori").hide();
				$("#cntMakise").show();
			}
		}
	});
});