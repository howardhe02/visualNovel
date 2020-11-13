/*
Title:Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/1/11
Description:This is the first scene to the game 1-1.
*/

$(document).ready(function($) {
	/*this is the basic code of our project. The 'scene=="1-1"' is the lock on what scene is to be played*/
	/*From future documenter... This is hell to do....*/
	/*If anyone is reading this it has been 20 hours of work and it gets really messed up*/
	/*DO NOT MAKE A DIALOGUE GAME YOU HAVE BEEN WARNED*/
	$("#btnNext").click(function(event) {
		if(scene=="1-1"){
			/*Here the dialogue length is set so that each scene is only as long as the dialogue length for that scene*/
			dialogueLength=aquaspeech.school.length;
			/*Here the dialogue is updated and increased*/
			updateDialogue("Aqua",aquaspeech.school[dialogueNumber]);
			dialogueNumber++;

			//this code checks if the scenes dialogue is done...
			//the plus one is there because it makes it work... dunno why
			//if the scene is done, it switches the lock onto the next scene
			if(dialogueNumber==dialogueLength+1){
				scene="1-2";
				$("#gameScreen").fadeOut().fadeIn();
				$("#gameScreen").css("background-image", "url(images/backgroundHallway.jpg)");
				dialogueNumber=0;
				$("#cntAqua").hide();
				$("#cntHiyori").show();
			}
		}
	});	
});