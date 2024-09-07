/*
Title:Who's going to be my date?
Description:This is the main page containing all the dialogue for the game.
*/

//ALL OF THESE ARE GLOBAL SINCE OTHER .js FILES MUST BE ABLE TO USE THEM
//TOTALLY PLANNED

//these are things resued many times
let playerName="";
let scene="1-0";
let dialogueNumber=1;
let dialogueLength=null;
let optionDialoguePlaying=false;
let allMusic=["casualMusic","titleMusic"];
let optionValue = null;

/*character speaches*/
let aquaspeech=null;
let hiyorispeech=null;
let makiseSpeech=null;

/*character affection levels*/
let aquaAffection=0;
let hiyoriAffection=0;
let makiseAffection=0;

/*inventory*/ 
let inventoryItems=[];
/*player choices*/
let playerChoices=null;
/*mini game score to calcuate affection levels*/
let playerMiniGameScore=0;

//things that are used in every screen an whatnot
$(document).ready(function($) {
	//set the first dating sims
	aquaAffection=updateAffection("aqua",15,aquaAffection);
	hiyoriAffection=updateAffection("hiyori",20,hiyoriAffection);
	makiseAffection=updateAffection("makise",5,makiseAffection);

	//option buttons
	/*This selects the id of the btn so it is more flexable and usefull*/
	$(".btnChoose").click(function(event) {
		if(optionDialoguePlaying==true){
			optionValue = $(this).prop('id');
			$(".btnChoose").css("background-color", "lightpink");
			$("#"+optionValue).css("background-color", "darkblue");
		}
	});

	//generate inventory blocks
	for(let x=0;x<25;x++){
		$("#cntItemBox").append('<div class="itemBox" value="empty" id="itemCnt'+x+'"><div class="itemDescription"></div></div>')
	}

	//menu for affection levels
	$("#affectionMenuPullUp").click(function(event) {
		if($(this).prop('id')=="affectionMenuPullUp"){
			if($("#affectionMenuPopUp").prop('value')=="open"){
				$("#affectionMenuPopUp").prop('value', 'closed');
				$("#affectionMenuPopUp").removeClass('openMenuPopUp');
			}

			else{
				$("#affectionMenuPopUp").addClass('openMenuPopUp');
				$("#affectionMenuPopUp").prop('value', 'open');

				//check if the other menu is open
				if($("#inventoryMenuPopUp").prop('value')=="open"){
					$("#inventoryMenuPopUp").prop('value', 'closed');
					$("#inventoryMenuPopUp").removeClass('openMenuPopUp');
				}
			}
		}
	});

	//menu for inventory
	$("#inventoryPullUp").click(function(event) {
		if($(this).prop('id')=="inventoryPullUp"){
			if($("#inventoryMenuPopUp").prop('value')=="open"){
				$("#inventoryMenuPopUp").prop('value', 'closed');
				$("#inventoryMenuPopUp").removeClass('openMenuPopUp');
			}

			else{
				$("#inventoryMenuPopUp").addClass('openMenuPopUp');
				$("#inventoryMenuPopUp").prop('value', 'open');

				//check if the other menu is open
				if($("#affectionMenuPopUp").prop('value')=="open"){
					$("#affectionMenuPopUp").prop('value', 'closed');
					$("#affectionMenuPopUp").removeClass('openMenuPopUp');
				}
			}
		}
	});

	//this is the first btn that gets the player name
	$("#btnPlayerName").click(function(event) {
		playerName= $("#txtPlayerName").val();

		if(playerName==""){
			playerName="Onii";
		}
		document.getElementById("casualMusic").play();
		document.getElementById("titleMusic").pause();

		$("#startScreen").fadeOut(5000);
		$("#gameScreen").fadeIn(5000);
		
	//ALL THE DIALOGUE STARTS HERE
		/*this dialogue is in teh player name because it needs to insert the player name in to
		various spots of the dialogue. If it was not done like this then the player name would appear
		blank or null in the dialogue*/

		/*Aqua Speech*/
		aquaspeech = {
			neighbourhood: [
				"Yahallo "+playerName+"-chan!",
				"It's not nice to keep a childhood friend waiting...",
				"Anyways, today's the big day at school remember?!",
				"It's the school cultural festival!",
				"This means games, food and fun!",
				"Hey, if you are lucky, you may even get a girl to fall head over heels for you!",
				"Well anyways, let's get going."
			],

			school: [
				"Well, here we are! Naoetsu Private High School!",
				"To be honest, I'm surprised you were able to get into this school, haha!",
				"The bell rings*",
				"Alright, "+playerName+"-chan, I'll be getting to class!",
				"Remember to go to the school festival tonight at 7pm!"
			],

			schoolFront: [
				"Hey! " + playerName + "-chan!",
				"Thank god school's over, I'm so excited for the festival!",
				"You're still going with me right?",
				"Anyways... do you want to walk home together?"
			],
			/*this just gets worse and worse doesn't it?*/
			//mulitiple options in the same scene
			schoolFrontOption1: [
				[
					"Good answer " + playerName +"-chan!",
					"This will be just like the old times.",
					"Back in grade school, ahh the memories.",
					"We can have a nice long conversation!",
					"We'll buy some food, play fun games, and have a great time!",
				],
				[
					"I knew it!",
					"I don't even know why I asked!",
					"Aren't I so smart "+playerName+"-chan?",
					"Let's get going!"
				]
			],
			schoolFrontOption2: [
				[
					"You're a party pooper " + playerName + "-chan.",
					"Well, next time I guess.",
				],
				[
					"Too bad!",
					"If you won't walk with me then I'll walk with you!",
				]
			],
			schoolFrontOption3: [
				[
					"That was mean " + playerName + "-chan...",
					"I know you're only joking though!",
					"So it's fine!",
					"No hurt feelings here!",
				],
				[
					"No answer?",
					"I'll take it as a yes then!",
					"Let's get going!",
					"We don't want to be late for the festival right "+playerName+"-chan!?"
				]
			],
			festivalAqua: [
				"Hey " + playerName +"-chan!",
				"You're finally here!",
				"This festival is going to be so much fun.",
				"I'm so excited!",
				"What do you want to do first?",
				"Wow! you're pretty good at this",
				"But not better than me!",
				"But maybe one day you will beat my high score!",
				"Bye now!",
			],
			festivalAquaOption1: [
				"I knew it!",
				"The games here are always the most fun!"
			],
			festivalAquaOption2: [
				"Let's go play the matching game over there!",
				"I bet you won't be able to do better then me!",
				"The games here are always the most fun!"
			],
			festivalAquaOption3: [
				"Well, too bad.",
				"I want to play that matching game over there.",
				"Lets go!"
			],
			eating: [
				"I knew you couldn't resist eating without me around!",
				"That's why you came to find me right?",
				"I'm always there to make everything more fun!",
				"Never a dull moment with me around right!?",
				"Anyways, let's go eat anything and everything",
				"Our stomach limit is the limit!",
				"Let's get going!"
			],

			datingWin: [
				"You want to date me?",
				"I never expected this to happen...",
				"But I'm so happy!",
				"There is no way I could deny such a confession!",
				"Of course I will go out with you!"
			],

			datingFail: [
				"You want to date me?",
				"Well...",
				"I've never really thought about going on a date with anyone...",
				"Especially you...",
				"I've only ever really thought of you as....",
				"A Friend....",
				"So I'm sorry "+playerName+"-chan",
				"But I just can't accept your confession"
			]
		}
		//makise speech
		makiseSpeech = {
			classroom: [
				"Hey there " + playerName + "-kun.",
				"We're getting our test back today, I wonder how you did! Haha!",
				"Here I am, the smartest student in the class!",
				"...And you? Are you even passing?",
				"Why would you even take this course if you have no idea what your doing?",
				"The teacher gives back your tests*",
				"Wow. I'm so surpised, I got 100% again.",
				"What did you get? Show me!",
				"HAHAHAHA! What an idiot! 12/100? How are you even that stupid?",
				"It was all multiple choice, and there were 4 options.",
				"If you guessed everything you could've gotten around 25%",
				"You are actually so stupid.",
				"Well anyways, since you're so stupid, do you want some study help?",
				"Bell rings*",
				"Ahh yes, finally time without an idiot like you."
			],
			classroomOption1: [
				"All right, I guess it's only natural for the smart to help the stupid.",
				"So first, let's take up your mistakes on your most recent tests.",
				"All right, I guess that's the most I could help you with.",
				"I was only helping you because you needed my help so badly.",
				"It wasn't for any other reason."
			],
			classroomOption2: [
				"Wow, I guess you can stay dumb."
			],			
			classroomOption3: [
				"... Really?",
				"Okay then...",
				"Uh...",
				"?"
			],
			festivalMakise: [
				"Hello " + playerName +"-kun!",
				"Shouldn't you be studying after you failed so badly?",
				"Well, I guess today is a special day.",
				"What activities do you want to do?",
				"Let's get started with the game."
			],
			festivalMakiseOption1: [
				"Riddles?",
				"Riddles are silly, they're too illogical.",
				"Logic riddles are more like it!",
				"With your brain, I'm sure you won't be able to get any. Haha!"
			],
			festivalMakiseOption2: [
				"You don't know what to do?",
				"To be honest, I'm not really surprised.",
				"After seeing what you did on that test...",
				"You probably never know what you're doing.",
			],
			festivalMakiseOption3: [
				"You're hungry?",
				"I guess we can eat now...",
			],
			festivalMakiseFood: [
				"?",
				"You've come to see me again?",
				"That's pretty smart of you",
				"Your stomach growls*",
				"If you're hungry then you can have some of this.",
				"...",
				"There's fireworks at 9 tonight.",
				"Maybe you can learn a thing or two on how fireworks actually work!",
				"Do you want to watch fireworks with me?"
			],

			eating: [
				"Smart choice to come find me to eat.",
				"That way you might get a bit smarter!",
				"We should do this more often...",
				"Not because I like it or anything...",
				"Just maybe because you will get a bit smarter...",
				"...",
				"Let's get going now, don't want to waste time do we?"
			],
			datingWin: [
				"You want to go on a date with me?",
				"Really? Even after I made fun of you that much?",
				"Wow...",
				"Ok...",
				"I will go on a date with you!",
				"The past is the past!",
				"I'll try to make fun of you less, but no promises!",
				"I love you " + playerName +"-kun!"
			],
			datingFail:[
				"B-B-B-B-B-Baka!",
				"Why would I ever date you???",
				"You're kinda stupid...",
				"I'm not into dumb guys",
				"Sorry!"
			]
		}

		/*Hiyori speech*/
		hiyorispeech = {
			hallway: [
				playerName + "-senpai" + " is that you?",
				"It's a pleasure to see you again!",
				"I've been hoping to have some time to talk with you!",
				"Speaking of which, what are you up to tonight?",
				"I have to get to class now, don't want to ruin my perfect attendance do I!",
				"See you around " + playerName +"-senpai!"
				// 3 words for whatever u asnwer
			],

			hallwayOption1: [
				"Oh! I would love to! Thank you so much for inviting me " +playerName +"-senpai!",
				"This is gonna be so fun!",
				"Just don't forget ok!?"
			],

			hallwayOption2: [
				"That's a relaxing thing to do! You should watch Goblin Slayer, I find it quite interesting!",
				"Here! You can borrow my copy.",
				"Just return it whenever!",
				"I'm done watching it so take your time!"
			],

			hallwayOption3: [
				"Oh... Sorry... I didn't mean to invade your privacy."
			],
			festivalHiyori: [
				"Ah! " + playerName +"-senpai!",
				"I'm so happy to see you here!",
				"Happy lunar festival!",
				"There's so much good food here!",
				"Oh! There's also so much fun games!",
				"I'm so excited to be here with you!",
				"There's so much things to do...",
				"What should we start with " + playerName + "-senpai?",
				"Hey! Nice going!",
				"That is a really good score!", 
				"Well I gotta go now!", 
				"See you later!"
			],
			festivalHiyoriOption1: [
				"Eh?",
				"You're right! That does look fun!",
				"As expected of " + playerName +"-senpai!",
				"Let's go play!"
			],
			festivalHiyoriOption2: [
				"What I want to do?",
				"There's so much options...",
				"I can't choose!",
				"Hey! That game over there looks pretty fun!",
				"I guess we can start with that " + playerName +"-senpai.",
			],
			festivalHiyoriOption3: [
				"...Ok",
				"Eh?",
				"Hey, that game over there looks pretty fun!",
				"Let's go play!",
			],

			eating: [
				"I'm so glad that you found me to share a meal with!",
				"I was having so much fun last time that I almost forgot about the food!",
				"Anyways, let's try a bit of everything ok?!",
				"Let's go!"
			],
			
			datingWin: [
				"??????????????",
				"You want to go on a date with me?",
				"...? " + playerName +"-senpai wants to go on a date with me?",
				"I can't believe this!",
				"I've dreamed of this for so long!",
				"I've never expected this to happen.",
				"I will go on a date with you " + playerName +"-senpai!",
			],
			datingFail:[
				"Uh...",
				"I'm not trying to get into a relationship right now...",
				"I'm sorry " + playerName +"-senpai!",
				"Please forgive me!",
			]
		},

		/*the players speech*/
		playerSpeech = {
			room: [
				"Sigh...", 
				"Today was a tiring day.",
				"At least I'm going to the school fair...",
				"I should probably take something with me...",
				"What should I take?",
				"Well, I better get going then.",
				"I don't want to be late." 
			],

			roomOption1: [
				"Yea... a water bottle.",
				"Better stay hydrated!"
			],

			roomOption2: [
				"Ok. Dr.Pepper.",
				"Tasty and refreshing!"
			],

			roomOption3: [
				"I mean...",
				"This will probably come in handy somehow..."
			],
			festival: [
				"Sugoi! The festival looks amazing!",
				"All of this food looks so good!",
				"I don't want to eat alone...",
				"Who should I go find?"
			],

			festivalOption1: [
				"I better go find that idiot."
			],

			festivalOption2: [
				"Well, hopefully she won't make fun of me too much..."
			],

			festivalOption3: [
				"Hiyori... What a cutie."
			],
			festivalBack: [
				"That was fun!",
				"But I wonder what else there is to do?",
				"I should go with someone else though...",
				"Who should I find now?"
			],

			festivalFood: [
				"Well, I guess that's the end of seeing the three girls",
				"It was fun while it lasted.",
				"Sigh...",
				"My goal at the start of this was to eat with someone...",
				"But I still haven't eaten...",
				"I'm so hungry.",
				"I can only choose one person to eat with.",
				"Who should I go find?"
			],
			festivalFoodOption1: [
				"I must have hit my head hard on something if I want to eat with Aqua...",
				"But hey I guess it could be fun...",
				"Why not..."
			],

			festivalFoodOption2: [
				"A smart choice... hehe...",
				"Maybe she could help get my test scores up..."
			],

			festivalFoodOption3: [
				"Nothing can go wrong if I choose to eat with Hiyori...",
				"Yea... it would be fun to end the day off calm I guess"
			],
			endGame: [
				"Ahh...",
				"I guess its all over now.",
				"All those girls were quite lovely!",
				"But I have to make a decision.",
				"I can only ask to date one girl.",
				"And my success rate is based on their level of affection for me.",
				"The more they like me, the greater my chances are.",
				"That should be simple logic.",
				"This is going to be a tough decision but...",
				"Who should I date?",
				"I better go find her..."
			],

			endGameOption1: [
				"Known her since childhood eh?",
				"And it's only now that I've noticed her...",
				"Well, I guess I'll ask her out then..."
			],
			endGameOption2: [
				"Am I a masochist?",
				"What am I even thinking?",
				"I guess I have to accept my feelings.",
				"I love Makise."
			],

			endGameOption3: [
				"Hiyori is the cutest girl I have ever seen.",
				"She is the most kawaii thing I have ever laid my eyes upon!",
				"I'm determined!",
				"I will ask Hiyori on a date!"
			]
		},
		girlNames = [
			"Aqua",
			"Makise",
			"Hiyori"
		]	

		//this makes the first text from aqua apear without a click
		dialogueLength=aquaspeech.neighbourhood.length;
		updateDialogue("Aqua",aquaspeech.neighbourhood[0]);
	});		
});