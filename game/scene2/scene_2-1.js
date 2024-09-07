/*
Title:Who's going to be my date?
Description:This is the first scene to the game 2-1.
*/

$(document).ready(function($) {
	let optionDialogueNumber=0;

	$("#btnNext").click(function(event) {
		if(scene=="2-1"){
			if(optionDialoguePlaying==false){
				dialogueLength=playerSpeech.festival.length;
				if(girlNames.length==3){
					updateDialogue(playerName,playerSpeech.festival[dialogueNumber]);
				}
				else{
					updateDialogue(playerName,playerSpeech.festivalBack[dialogueNumber]);
				}
				dialogueNumber++;

				if(dialogueNumber==4){
					if(girlNames.length==3){
						optionDialoguePlaying=true;
						$("#cntOptions").fadeIn();
						$("#option1").html("Aqua");
						$("#option2").html("Makise");
						$("#option3").html("Hiyori");						
					}
					else{
						optionDialoguePlaying=true;
						$("#cntOptions").fadeIn();
					}
				}
			}

			if(girlNames.length==3){
				/*first choice*/
				if(dialogueNumber==4){
					if(optionValue=="option1"){
						optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption1,0);

						if(optionDialogueNumber>playerSpeech.festivalOption1.length-1){
							optionDialoguePlaying=false;
							optionValue=null;
							playerChoices="Aqua";	
						}
					}

					else if(optionValue=="option2"){
						optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption2,0);

						if(optionDialogueNumber>playerSpeech.festivalOption2.length-1){
							optionDialoguePlaying=false;
							optionValue=null;
							playerChoices="Makise";
						}
					}

					else if(optionValue=="option3"){
						optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption3,0);
						if(optionDialogueNumber>playerSpeech.festivalOption3.length-1){
							optionDialoguePlaying=false;
							optionValue=null;
							playerChoices="Hiyori";
						}
					}
				}
			}

			if(dialogueNumber==4){
				if(girlNames.length==2){
					/*second choice*/
					if(dialogueNumber==4){
						let optionText1=$("#option1").html();
						let optionText2=$("#option2").html();

						if(optionText1=="Aqua"){
							if(optionValue=="option1"){
								optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption1,0);

								if(optionDialogueNumber>playerSpeech.festivalOption1.length-1){
									optionDialoguePlaying=false;
									optionValue=null;
									playerChoices="Aqua";
								}
							}						
						}


						else if(optionText1=="Makise"){
							if(optionValue=="option1"){
								optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption2,0);

								if(optionDialogueNumber>playerSpeech.festivalOption2.length-1){
									optionDialoguePlaying=false;
									optionValue=null;
									playerChoices="Makise";
								}
							}
						}

						else if(optionText1=="Hiyori"){
							if(optionValue=="option2"){
								optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption3,0);

								if(optionDialogueNumber>playerSpeech.festivalOption3.length-1){
									optionDialoguePlaying=false;
									optionValue=null;
									playerChoices="Hiyori";
								}
							}
						}
						//Optiontext 2
						if(optionText2=="Aqua"){
							if(optionValue=="option2"){
								optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption1,0);

								if(optionDialogueNumber>playerSpeech.festivalOption1.length-1){
									optionDialoguePlaying=false;
									optionValue=null;
									playerChoices="Aqua";
								}
							}						
						}


						else if(optionText2=="Makise"){
							if(optionValue=="option2"){
								optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption2,0);

								if(optionDialogueNumber>playerSpeech.festivalOption2.length-1){
									optionDialoguePlaying=false;
									optionValue=null;
									playerChoices="Makise";
								}
							}
						}

						else if(optionText2=="Hiyori"){
							if(optionValue=="option2"){
								optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption3,0);

								if(optionDialogueNumber>playerSpeech.festivalOption3.length-1){
									optionDialoguePlaying=false;
									optionValue=null;
									playerChoices="Hiyori";
								}
							}
						}
					}
				}
			}

			//last option
			if(girlNames.length==1){
				/*Third choice*/
				if(dialogueNumber==4){
					let optionText=$("#option1").html();
					if(optionText=="Aqua"){
						if(optionValue=="option1"){
							optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption1,0);

							if(optionDialogueNumber>playerSpeech.festivalOption1.length-1){
								optionDialoguePlaying=false;
								optionValue=null;
								playerChoices="Aqua";
							}
						}						
					}


					else if(optionText=="Makise"){
						if(optionValue=="option1"){
							optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption2,0);

							if(optionDialogueNumber>playerSpeech.festivalOption2.length-1){
								optionDialoguePlaying=false;
								optionValue=null;
								playerChoices="Makise";
							}
						}
					}
					else if(optionText=="Hiyori"){
						if(optionValue=="option1"){
							optionDialogueNumber=optionDialogue(playerName,playerSpeech.festivalOption3,0);

							if(optionDialogueNumber>playerSpeech.festivalOption3.length-1){
								optionDialoguePlaying=false;
								optionValue=null;
								playerChoices="Hiyori";
							}
						}
					}
				}
			}


			if(dialogueNumber==dialogueLength+1){
				if(playerChoices=="Aqua"){
					scene="2-2a";
					//reshow hidden option boxes
					$(".btnChoose").show();
					$(".btnChoose").css("background-color", "lightpink");
					// $("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestivalAqua.jpg)");
					dialogueNumber=0;
					$("#cntAqua").show();					
				}
				if(playerChoices=="Makise"){
					scene="2-2b";
					//reshow hidden option boxes
					$(".btnChoose").show();
					$(".btnChoose").css("background-color", "lightpink");
					// $("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestivalMakise.jpg)");
					dialogueNumber=0;
					$("#cntMakise").show();	
					
				}
				if(playerChoices=="Hiyori"){
					scene="2-2c";
					//reshow hidden option boxes
					$(".btnChoose").show();
					$(".btnChoose").css("background-color", "lightpink");
					// $("#gameScreen").fadeOut(1000).fadeIn(1000);
					$("#gameScreen").css("background-image", "url(images/backgroundFestivalHiyori.jpg)");
					dialogueNumber=0;
					$("#cntHiyori").show();	
				}
			}
		}
	});
});
