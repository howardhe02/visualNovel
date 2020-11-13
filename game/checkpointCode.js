/*
Title:Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/1/11
Description:This is the checkpoint code for ease of acess.
*/

$(document).ready(function($) {
	/*Hide all not in use pages after loading them*/
	dialogueNumber=0;
	scene="2-3";
	$("#gameScreenSuccess").hide();
	$("#gameScreenFail").hide();
	$("#gameScreen").css("background-image", "url(images/backgroundFestival.jpg)");
	$("#cntAqua").hide();
	$("#cntHiyori").hide();
	$("#cntMakise").hide();
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

	$("#muteAll").click(function(event){
		toggleMusicOff("casualMusic");
		$("#muteAll").hide();
		$("#unmuteAll").show();
	});

	$("#unmuteAll").click(function(event){
		toggleMusicOn("casualMusic");
		$("#unmuteAll").hide();
		$("#muteAll").show();
	});

	$("#settingsIcon").click(function(event){

		$("#settingsIcon").hide();
		$("#settingsIconOn").show();
		$("#cntSettings").fadeIn();

	});
	$("#settingsIconOn").click(function(event){

		$("#settingsIconOn").hide();
		$("#settingsIcon").show();
		$("#cntSettings").fadeOut();

	});
	$("#btnLow").click(function(event){

		toggleMusicVolume(0.2);

	});
	$("#btnMedium").click(function(event){

		toggleMusicVolume(0.7);

	});
	$("#btnHigh").click(function(event){

		toggleMusicVolume(1);

	});
	$("#btnFullscreen").click(function(event){ 
		var elem = document.getElementById("gameScreen");
		elem.webkitRequestFullscreen(); 
	});
	$("#btnWindowed").click(function(event){
		document.webkitExitFullscreen(); 
	});

	$("#btnReset").click(function(event){

		location.reload(true);

	});
	$("#btnSFXOff").click(function(event){

		$("#SFXOff").html("meow");

	});
		$("#btnSFXOn").click(function(event){

		$("meow").html("<audio id=\"characterSounds\"" +" controls"+ " src=\"../audio/textSounds.mp3\"></audio>");

	});
});
