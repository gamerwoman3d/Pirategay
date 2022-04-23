//writing out pseudocode first
//Hello Vesper!

/*
First set modes for game screens.  Start menu Battle Mode Game over mode

import { useState } from 'react';
import styles from './styles.module.css';

export const App = () => {
  const [mode, setMode] = useState('start');

  return <div className = {styles.main}>
  {mode === 'start' && <>Start menu</>}

  {mode === 'battle' && <>Battle Mode</>}

  {mode === 'gameOver' && <>Game Over </>}
  </div>;
};

*/

//load screen - Gay for the Pirate King
//Press start to begin new game
//Choose a character

//constructor function - pirate factory
//pirate objects for Mr. Blue Red White Black Orange Flowers Blue 
//possibly enemy objects for Mr. Raids and Mr. King 

//4 player game, when user selects character that character is not selectable by others
//Singleplayer game first probably
//in 4 player figure out interactive turn base
//----SINGLEPLAYER----

//after start new game, and character selected ->

//Skip tutorial? y/n.  If yes run tutorial. If n go to new event roll.

//Tutorial explains rules
//assign pining [m.health]
//assign injury [health]
//assign tension [xp/game progression]
//assign bones [single d6 die]

//New Event
//assign newEventResult 
//roll a d6
//reassign newEventResult the result of the d6 die roll
//display a roll die animation
//display the result
//assign results as 1-6 images
//display the corresponding result's image

//determine the type of event in the following steps:
//if newEventResult = 1 or 2 then run aMomentAloneTogether
//if newEventResult = 3 or 4 then run stareFromDistance
//else run yarr

//aMomentAloneTogether steps:
//assign aMomentAloneResult 
//roll a d6
//reassign aMomentAloneResult the result of the d6 die roll
//display a roll die animation
//display the result
//assign results as 1-6 images
//display the corresponding result's image

//determine the type of Moment Alone in the following steps:
//if newEventResult = 1 then run oneMoment
//if newEventResult = 2 then run twoMoment
//if newEventResult = 3 then run threeMoment
//if newEventResult = 4 then run fourMoment
//if newEventResult = 5 then run fiveMoment
//else run mission

//oneMoment function:
//run animation of Mr. King passing by [playercharacter] and standing next to each other
//add object cutlass to animation
//run blush animation on [playercharacter] and maybe [mr. king]
//display text 'Did his cutlass brush your leg? Was it intentional?
//run animation of Mr. King leaving
//run animation of tinyHearts [runs an animation of tiny floating hearts over character]
//add 1 to tension with ++ tension
//run heartAnimation [see health/injury score]
//run fuseAnimationAdd [see tension score]

//twoMoment function:
//run animation of Mr. King talking to [playercharacter] and standing next to each other
//add deathTalk animation [a speech bubble with a skull and crossbones appears over Mr. King's head]
//run blush animation on [playercharacter] and maybe [mr. king]
//run animation of tinyHearts [runs an animation of tiny floating hearts over character]
//display text 'He tells you of his glory days. So much blood.'
//run animation of Mr. King leaving
//run animation of tinyHeartBreaks [runs an animation of tiny floating hearts breaking over character]
//add 1 to pining with ++ pining
//run wiltAnimation [see m.health/pining score]
//run fuseAnimationAdd [see tension score]

//threeMoment function:
//add two cutlass objects to animation
//run animation of [playercharacter] and mr king crossing swords
//display text 'he spars with you.  He's much better than you.'
//run animation of tinyHearts [runs an animation of tiny floating hearts over character]
//add 1 to tension with ++ tension
//subtract one health
//run heartDamageAnimation [see health/injury score - one red heart turns black]
//run fuseAnimationAdd [see tension score]

//fourMoment function:
//run animation of anger [redfaces, knit brows]
//display text "you get into an argument"
//run animation of choke
//run animation of playercharacter crying
//run tiny hearts animation
//display text "...Maybe you let him choke you just a little."
//add 2 to tension with ++ tension
//subtract one health
//run heartDamageAnimation [see health/injury score - one red heart turns black]
//run fuseAnimationAdd twice [see tension score]

//fiveMoment function:
//add bootyChest object to animation display
//run bootyChest animation [mr king presents the chest and opens it to reveal a glorious golden booty]
//display text "he offers your a share of his booty.  It's rude to refuse."
//run petBooty animation [playercharacter strokes or pats the golden bootie]
//run tiny hearts animation
//add 1 to tension with ++ tension
//run fuseAnimationAdd [see tension score]

//mission function:
//run comeHereFinger animation [mr king motions player character to join him off screen]
//run blush
//animate character walking off screen
//display "he insists on taking you with him on a \"mission\"."
//add 1 to tension with ++ tension
//subtract one health
//run heartDamageAnimation [see health/injury score - one red heart turns black]
//run fuseAnimationAdd [see tension score]


/* ***********************************************
**************************************************
**************************************************
*************************************************/

//NOTES - need to go back in and add text to rolls like //Display text "YOU STARE FROM A DISTANCE..."

//if newEventResult = 3 or 4 then run stareFromDistance

//stareFromDistance steps:
//assign stareFromDistanceResult 
//roll a d6
//reassign stareFromDistanceResult the result of the d6 die roll
//display a roll die animation
//display the result
//assign results as 1-6 images
//display the corresponding result's image


//determine the type of Moment Alone in the following steps:
//if stareFromDistanceResult = 1 then run oneStare
//if stareFromDistanceResult = 2 then run twoStare
//if stareFromDistanceResult = 3 then run threeStare
//if stareFromDistanceResult = 4 then run fourStare
//if stareFromDistanceResult = 5 then run fiveStare
//else run drunk

//oneStare function:
//run animation of Mr. King passing by [playercharacter] and standing far away from each other
//add object muscket to animation
//run blush animation on [playercharacter] and maybe [mr. king]
//display text 'Is that a musket in his pocket or..."
//run animation of gunfire [a cloud at the tip of the gun barrel that says BANG]
//run playerCry animation
//display text 'OW IT WAS A MUSKET'
//subtract one health
//run heartDamageAnimation [see health/injury score - one red heart turns black]


//twoStare function:
//add Eyepatch to animation on mr king
//run animation of Mr. King talking to [playercharacter] and standing far away from each other
//add blink animation [and tiny hearts appear over Mr. King's head as he closes his visible eye]
//run blush animation on [playercharacter] and maybe [mr. king]
//run animation of tinyHearts [runs an animation of tiny floating hearts over character]
//display text 'Was that a wink? It's so hard to tell under his eyepatches.'
//run animation of Mr. King leaving
//run animation of tinyHeartBreaks [runs an animation of tiny floating hearts breaking over character]
//add 1 to pining with ++ pining
//add 1 to tension ++ tension
//run wiltAnimation [see m.health/pining score]
//run fuseAnimationAdd [see tension score]

//threeStare function:
//run animation of Mr. King talking to [playercharacter] and standing far away from to each other
//add music animation [a speech bubble with a musical notes appears over Mr. King's head]
//run blush animation on [playercharacter] and maybe [mr. king]
//run animation of tinyHearts [runs an animation of tiny floating hearts over character]
//display text 'He sings a sea shanty.  It's about love for a crewmate.'
//run animation of Mr. King leaving
//run animation of tinyHeartBreaks [runs an animation of tiny floating hearts breaking over character]
//add 1 to pining with ++ pining
//run wiltAnimation [see m.health/pining score]

//fourStare function:
//run animation of Mr. King talking to [playercharacter] and standing far away from to each other
//run animation of anger [redfaces, knit brows]
//display text "you feel like doing something nice for him, and clean his bunk for him."
//add object bed to animation
//add object censorPixels to animation
//run animation of censored [player character makes bed but blushes and lifts up something in censor pixels]
//Disgusting, truly.
//player character face goes green? OR he falls!
//subtract one pining [NOTE TO SELF figure out positive or negative pining and stick with it]
//run reverse of pining [wilted flower grows back OR one more flower is added to end of line]

//fiveStare function:
//add cutlass object to animation display
//run cutlassRub animation [mr king holds the sword up in his lap and polishes it suggestively]
//display text "he's rubbing his sword clean on his lap."
//run blush animation
//run tiny heartbreaks animation
//add 1 to tension with ++ tension
//run fuseAnimationAdd [see tension score]

//drunk function:
//animate mr king walking off screen but falling down
//display "he's drunk and he falls overboard'."
//play splash sound effect
//subtract 1 from tension
//run fuseAnimationSubtract [see tension score]


/* ***********************************************
**************************************************
**************************************************
*************************************************/

//if newEventResult = 3 or 4 then run stareFromDistance
//else run yarr

//yarr steps:
//assign yarrResult 
//roll a d6
//reassign yarrResult the result of the d6 die roll
//display a roll die animation
//display the result
//assign results as 1-6 images
//display the corresponding result's image


//determine the type of yarr dramatic event in the following steps:
//if yarrResult = 1 then run oneYarr
//if yarrResult = 2 || 3 then run twoYarr
//if yarrResult = 4 || 5 then run threeYarr
//else run fourYarr

//oneYarr function:
//run fall animation 
//display text 'You slip and fall on his deck.'
//subtract one health
//run heartDamageAnimation [see health/injury score - one red heart turns black]


//twoYarr function:
//run brutal raid animation [raiders run in and fight randomly gen pirates]
//display text 'there is a brutal raid.  Some of the crew die.  You somehow evade death.'
//subtract one health
//run heartDamageAnimation [see health/injury score - one red heart turns black]
//subtract one health
//run heartDamageAnimation [see health/injury score - one red heart turns black]


//threeYarr function:
//run brutal raid animation [raiders run in and fight randomly gen pirates]
//run kidnap animation
//display text 'You are kidnapped. (Again).'
//subtract 1 from tension
//run fuseAnimationSubtract [see tension score]
//run saved by the pirate king animation
//display text 'You are rescued. (Again).'
//subtract one health
//run heartDamageAnimation [see health/injury score - one red heart turns black]
//subtract 1 from tension
//run fuseAnimationSubtract [see tension score]


//fourYarr function:
//run animation of Mr. King talking to [playercharacter] and standing far away from to each other
//run animation of anger [redfaces, knit brows]
//run animation of Mr. King leaving scene
//display text "He leaves you for a month to hunt for buried treasure."
//run animation of extreme pining
//subtract one pining [NOTE TO SELF figure out positive or negative pining and stick with it]
//run pining animation [flower wilts and dies]

/* ***********************************************
**************************************************
**************************************************
**************************************************
************ GAME ENDING CONDITIONS **************
**************************************************
**************************************************
**************************************************
*************************************************/

//if pining reaches 0 run endPining
//if health reaches 0 run endLife
//if Tension reaches 0? run endStakes

/* ***********************************************/

//endPining function:
//play animation of crying crewman withering away and turning into a skeleton.  The skeleton crumples into the skull and crossbones figure.  The screen turns black and focuses on the skull and crossbones, centered.
//display text: Your pining reached its peak.  You wasted away, longing for your crewmate.  They will never know of your secret love.
//if no other players have turns || mr. king is dead, display "game over" and end game.
//else go to next player turn and begin new event

/* ***********************************************/

//endLife function:
//play animation of crying crewman poofing into a skeleton.  The skeleton crumples into the skull and crossbones figure.  The screen turns black and focuses on the skull and crossbones, centered.
//display text: You lost all your health.  You were murderized during some kind of pirate shenangan.  Your body is given a high velocity sea burial.
//stretch goal - play animation of pirate king loading skull and crossbones into cannon and firing.  If tension was > 8, animate a single tear and a sad face.  If tension was < 2, animate captain whistling as he leaves the scene.
//if no other players have turns, display "game over" and end game.
//else go to next player turn and begin new event

/* ***********************************************/

//endStakes function:
//animate playercharacter and mr king across each other from a table/barrel
//display text: "This is it.  I can't take it anymore.  Somethin's gonna blow."  [bonus: character art of mr king's pretty shonen ai sparkle face]
//display text: "So let's settle it.  One last throw to decide our fate.  Roll the bones."

//rollBones steps
//assign rollBonesResult
//roll a d6
//reassign rollBonesResult the result of the d6 die roll
//display a roll die animation
//display the result
//assign results as 1-6 images
//display the corresponding result's image

//determine the type of Final Stakes in the following steps:
//if rollBonesResult = 1 then run oneBones
//if rollBonesResult = 2 then run twoBones
//if rollBonesResult = 3 || 4 then run threeBones
//else run married

//oneBones function:
//add two cutlass objects to animation
//run animation of [playercharacter] and mr king crossing swords
//display text 'You duel to the death.'
//if health > 0 run heartDamageAnimation [see health/injury score - one red heart turns black]
//when health = 0 run endLife function [see previous]

//twoBones function:
//add two cutlass objects to animation
//run animation of [playercharacter] and mr king crossing swords
//display text 'You duel to the death.'
//if pining/m.health > 0 run flowerWiltAnimation [see health/injury score - one flower wilts]
//when pining/m.health = 0 animate Mr. King death [skeleton poof] then run
//endPining function [see previous]

//threeBones function:
//display text "you spent one long night togetherr, talking or screwing or whatever you like.  Then... he leaves forever."
//run endPining function [see previous]

//*****************note to self - need to work in some way that pirates eliminated by death or pining do not get turns.  All pirates start with one turn and continue to have a turn as long as the conditions are true - pining, health, and tension are not at 0. */

//married function:
//animate blackbeard flipping the table, then kneeling with a tiny treasure chest.  He opens it to reveal a wedding ring.
//display text "You get gay pirate married, and adopt lots of other fully grown pirates as your figurative children."
//change to happy end screen animation, with all the living pirates left attending the wedding and cheering.  Text reads Congratulations!  [player character] Wins! Game End"

