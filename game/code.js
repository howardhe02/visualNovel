/*
Title:Who's going to be my date?
Description: The general code for the game
*/

$(document).ready(function($) {
	/*Hide all not in use pages after loading them*/
	$("#gameScreenSuccess").hide();
	$("#gameScreenFail").hide();
	$("#cntGuessingGame").hide();
	$("#gameScreenCardMatchGame").hide();
	$("#affectionNotifiction").hide();
	$("#gameScreen").hide();
	$("#cntHiyori").hide();
	$("#cntMakise").hide();
	$("#cntSettings").hide();
	$("#settingsIconOn").hide();
	$("#cntOptions").hide();
	$("#characterSounds").hide();
	$(".itemNotifications").hide();
	$("#black").hide();
	$("#titleMusic").hide();
	$("#unmuteAll").hide();
	$("#SFXOff").hide();
	/*This button is used to mute every song in the game.
	This is a shortcut button (displayed beside the settings button), for the toggle music buttons in the settings page.*/
	$("#muteAll").click(function(event){
		toggleMusicOff("casualMusic");
		$("#muteAll").hide();
		$("#unmuteAll").show();
	});
	/*This button is used to unmute every song in the game.
	This is a shortcut button (displayed beside the settings button), for the toggle music buttons in the settings page.*/
	$("#unmuteAll").click(function(event){
		toggleMusicOn("casualMusic");
		$("#unmuteAll").hide();
		$("#muteAll").show();
	});
	/*This button is used to unmute every song in the game.
	This can be accessed in the settings page*/
	$("#btnMusicOn").click(function(event){

		toggleMusicOn("casualMusic");
		$("#unmuteAll").hide();
		$("#muteAll").show();

	});
	/*This button is used to mute every song in the game.
	This can be accessed in the settings page*/
	$("#btnMusicOff").click(function(event){

		toggleMusicOff("casualMusic");
		$("#muteAll").hide();
		$("#unmuteAll").show();

	});
	/*This button is used to access the settings screen for the game.
	When clicked, this button will hide and reveal the settingIconOn button which indicates that the page is opened.*/
	$("#settingsIcon").click(function(event){

		$("#settingsIcon").hide();
		$("#settingsIconOn").show();
		$("#cntSettings").fadeIn();

	});
	/*This button is used to show that the settings page is opened and is revealed when the settingsIcon is clicked.
	If this button is clicked, it will close the settings page.*/
	$("#settingsIconOn").click(function(event){

		$("#settingsIconOn").hide();
		$("#settingsIcon").show();
		$("#cntSettings").fadeOut();

	});
	/*This button is used to set the game music volume to low because the arguement for the toggleMusicVolume function sets the music to low volume.*/
	$("#btnLow").click(function(event){

		toggleMusicVolume(0.2);

	});
	/*This button is used to set the game music volume to medium because the arguement for the toggleMusicVolume function sets the music to medium volume.*/
	$("#btnMedium").click(function(event){

		toggleMusicVolume(0.7);

	});
	/*This button is used to set the game music volume to high because the arguement for the toggleMusicVolume function sets the music to high volume.*/
	$("#btnHigh").click(function(event){

		toggleMusicVolume(1);

	});
	/*When clicked, this button makes the game screen/page go into fullscreen in Google Chrome.*/
	$("#btnFullscreen").click(function(event){
		var elem = document.getElementById("gameScreen");
		elem.webkitRequestFullscreen(); 
	});
	/*When clicked, this button makes the game screen/page return to windowed if in fullscreen.*/
	$("#btnWindowed").click(function(event){
		document.webkitExitFullscreen(); 
	});
	/*When clicked, this button reloads the page therefore restarting the game for the player*/
	$("#btnReset").click(function(event){

		location.reload(true);

	});
	/*This button makes it so that the soundeffect that players during textAnimation is muted.*/
	$("#btnSFXOff").click(function(event){

		$("#SFXOff").html("<audio id='characterSounds' controls muted src='../audio/textSounds.mp3'></audio>");

	});
	/*This button makes it so that the soundeffect that players during textAnimation is unmuted.*/
	$("#btnSFXOn").click(function(event){

		$("#SFXOff").html("<audio id='characterSounds' controls src='../audio/textSounds.mp3'></audio>");

	});

	/*This is the first next btn. So simple and organized*/
	$("#btnNext").click(function(event) {
		if(scene=="1-0"){
			updateDialogue("Aqua",aquaspeech.neighbourhood[dialogueNumber]);
			dialogueNumber++;

			if(dialogueNumber==(dialogueLength+1)){
				scene="1-1";
				// $("#gameScreen").fadeOut().fadeIn();
				$("#gameScreen").css("background-image", "url(images/backgroundSchool.jpg)");
				dialogueNumber=0;
			}
		}
	});
});
