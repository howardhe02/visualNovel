/*
Title:Loli Harem Paradise
By:Howard,Sajeiv,Kowan
Date Started:2019/1/11
Description:This is the functions that are used for the code in the game.
*/

/*this function take the character, and speech and updates it accordingly.
The character is put in the smalelr box and the speech is put in the bigger speech box*/
function updateDialogue(character,speech){
	$(".cntCharacterText2").html(character);
	$("#speechText").html(speech);
	textAnimation();
	txtSFX();
}
/*This function turns off all the music in the allMusic array so that it mutes every single song that we added to the game*/
function toggleMusicOff(songName)
{
	for(let x=0;x<allMusic.length;x++)
	{
		if(document.getElementById(allMusic[x]).muted==false)
			{
			   document.getElementById(allMusic[x]).muted=true;
			}

	}
}
/*This function turns on all the muted songs in the allMusic array. This function is used to unmute every song after the toggleMusicOff function is used*/
function toggleMusicOn()
{
	for(let x=0;x<allMusic.length;x++)
	{
		if(document.getElementById(allMusic[x]).muted==true)
			{
			   document.getElementById(allMusic[x]).muted=false;
			}
	}
}
/*This function changes the volume of every single song in the game based on the arguement that matches the parameter. In the settings page, there
is a low, medium, and high volume option which all have different arguements to change the volume of every song accordingly based on which button is 
clicked. */
function toggleMusicVolume(number)
{
	for(let x=0;x<allMusic.length;x++)
	{
		document.getElementById(allMusic[x]).volume=number;
	}
}
/*This function adds an animation which makes the dialogue of every character in the game, fade in letter by letter using the setTimeout function.  */
function textAnimation()
{
	let speechValue = $("#speechText").html();
	$("#speechText").hide();
	for (let x = 0; x < speechValue.length; x++) {
		setTimeout(function () {
			$("#speechText").show(speechValue.charAt(x));
		}, 100);
		//hide(speechText).subStr(speechText.charAt(x+1));
	}
}
/*This function goes together with the textAnimation function. While the textAnimation function makes the character dialogue fade in letter by letter, the txtSFX 
makes a cool soundeffect to go with the animation. The mp3 file for the soundeffect is timed using(setTimeout) so that it ends once the textAnimation function 
ends as well*/
function txtSFX()
{	
		document.getElementById("characterSounds").currentTime=3;
		document.getElementById("characterSounds").play();
		setTimeout(function () {
			document.getElementById("characterSounds").pause();
		}, 500);
}

/*This option below helps simplify the text selection process. The character is the character speeking,
the option family is the option that the text is in, and optionDialogueNumber is the number the line is on.
Scene choice is an optional parameter that gives more specific lines of dialogue*/
function optionDialogue(character,optionFamily,optionDialogueNumber,sceneChoiceNumber){
	if(sceneChoiceNumber==undefined){
		updateDialogue(character,optionFamily[optionDialogueNumber]);
	}

	else{
		updateDialogue(character,optionFamily[sceneChoiceNumber][optionDialogueNumber]);
	}

	$("#cntOptions").fadeOut(1000);
	optionDialogueNumber++;
	return optionDialogueNumber;
}

/*This option updates the inventory, adding items to it. The imgPath is the images path reative to this file
 and the itemObtained is what the items name will be displayed as in the notification*/
function obtainedItem(itemObtained,imgPath){
	//put item in inventory
	for(let x=0;x<25;x++){
		let boxNum=("itemCnt"+x);
		let boxValue=$("#"+boxNum).attr("value");
		/*there is no ../ because it is relative to the html file and not the code file*/
		if(boxValue=="empty"){
			document.getElementById(boxNum).setAttribute("value","full");
			$("#itemCnt"+x).html("<img class='item' src='"+imgPath+"'>");
			break;
		}
	}

	inventoryItems.push(itemObtained);
	$(".itemObtainedText").html(itemObtained);
	$(".itemNotifications").show().fadeOut(5000);
}

/*This function returns a characters affection number. It also updates the affection bar
in the affection menu by either ,making the cover larger or smaller*/
function updateAffection(character,changedBy,currentValue){
	
	let reverse=100;
	let returnAffection=currentValue;
	returnAffection+=changedBy;
	reverse-=returnAffection;

	$("#affectionNotifiction").show().fadeOut(5000);

	if(character=="aqua"){
		$("#cntAffectionAquaBarHider").css('width', reverse+"%");
	}

	else if(character=="hiyori"){
		$("#cntAffectionHiyoriBarHider").css('width', reverse+"%");
	}

	else if(character=="makise"){
		$("#cntAffectionMakiseBarHider").css('width', reverse+"%");
	}

	if(reverse<=0){
		return 0;
	}

	else{
		return returnAffection;
	}
}
/*When you are at the carnival, you can choose to visit the girls based on their prefered order,their character option will disappear so that you cant visit the same one after
talking to them. After you talk to them, it will take you back to your original place where you can choose to visit a girl.Except now you can not visit the same girl 
twice. This function will hide the character option that you recently clicked on.*/
function hideGirl(){
	let arrayLength=girlNames.length;
	if(arrayLength==3){
		$("#option3").hide();
		if(playerChoices=="Aqua"){
			girlNames.splice(0,1);
		}
		if(playerChoices=="Makise"){
			girlNames.splice(1,1);
		}
		if(playerChoices=="Hiyori"){
			girlNames.splice(2,1);
		}
		$("#option1").html(girlNames[0]);
		$("#option2").html(girlNames[1]);
	}

	else if(arrayLength==2){
		$("#option2").hide();
		$("#option3").hide();
		if(playerChoices=="Aqua"){
			girlNames.splice(0,1);
			$("#option1").html(girlNames[0]);
		}
		if(playerChoices=="Makise"){
			if(girlNames[0]=="Makise"){
				girlNames.splice(0,1);
				$("#option1").html(girlNames[0]);
			}
			else if(girlNames[1]=="Makise"){
				girlNames.splice(1,1);
				$("#option1").html(girlNames[0]);			
			}
		}
		if(playerChoices=="Hiyori"){
			girlNames.splice(1,1);
			$("#option1").html(girlNames[0]);
		}
	}
}

/*This function is used to check if the player is sucsessful in dating a girl*/
function checkIfYouAreNotALonerLOL(characterAffectionLevel){
	let randoNumber=Math.round(Math.random()*100);

	if(randoNumber<=characterAffectionLevel){
		return true;
	}

	else{
		return false;
	}
}