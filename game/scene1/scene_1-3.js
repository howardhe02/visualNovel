/*
Title:Who's going to be my date?
Description:This is the first scene to the game 1-3.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;

	$("#btnNext").click(function(event) {
		if(scene=="1-3"){
			if(optionDialoguePlaying==false){
				dialogueLength=makiseSpeech.classroom.length;
				updateDialogue("Makise",makiseSpeech.classroom[dialogueNumber]);
				dialogueNumber++;

				if(dialogueNumber==6){
					obtainedItem("12/100 Test","items/testPaper.png");
				}



				if(dialogueNumber==13){
					optionDialoguePlaying=true;
					$("#cntOptions").fadeIn();
					$("#option1").html("Sure...");
					$("#option2").html("I'm good");
					$("#option3").html("No. Stupid idiot");
				}
			}

			else if(optionValue=="option1"){
				optionDialogueNumber=optionDialogue("Makise",makiseSpeech.classroomOption1,optionDialogueNumber);

				if(optionDialogueNumber==2){
					$("#black").fadeIn(2000).fadeOut(2000);
					makiseAffection=updateAffection("makise",10,makiseAffection);
				}

				if(optionDialogueNumber>makiseSpeech.classroomOption1.length-1){
					optionDialoguePlaying=false;
					optionValue=null;
				}
			}

			else if(optionValue=="option2"){
				optionDialogueNumber=optionDialogue("Makise",makiseSpeech.classroomOption2,optionDialogueNumber);
				
				if(optionDialogueNumber>makiseSpeech.classroomOption2.length-1){
					makiseAffection=updateAffection("makise",-10,makiseAffection);
					optionDialoguePlaying=false;
					optionValue=null;
				}
			}

			else if(optionValue=="option3"){
				optionDialogueNumber=optionDialogue("Makise",makiseSpeech.classroomOption3,optionDialogueNumber);
			
				if(optionDialogueNumber>makiseSpeech.classroomOption3.length-1){
					makiseAffection=updateAffection("makise",15,makiseAffection);
					optionDialoguePlaying=false;
					optionValue=null;
				}
			}
			if(dialogueNumber==dialogueLength+1){
				scene="1-4";
				$(".btnChoose").css("background-color", "lightpink");
				// $("#gameScreen").fadeOut().fadeIn();
				$("#gameScreen").css("background-image", "url(images/schoolFront.png)");
				dialogueNumber=0;
				$("#cntMakise").hide();
				$("#cntAqua").show();
			}
		}
	});
});