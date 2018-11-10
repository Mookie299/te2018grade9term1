const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
  fear: 0,
  cluminess: 0,
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage += 3;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
   //console.log("It is dark!..... Will you turn on your flashlight??")
   let turnFlashlight = READLINE.question("It is dark!... Will you turn on your flashlight?(yes or no) ");
  if(turnFlashlight == "y" || turnFlashlight == "yes"){
    console.log(" You receive 5 points of intellect!")
    console.log("You spot a floating chair!")
    let attack = READLINE.question("Do you want to attack the ghost? (yes or no) ");
    if(attack == "y" || attack == "yes"){
  player.courage += 5;
  console.log("Stays to attack the ghost");
  player.courage += 10;
  player.strength += 10;
  console.log(`${player.name} ghost suddenly becomes agaitated and tries to strangle you.`);
    }

    else{
    console.log("Lose 1 point of courage!");
    player.courage -= 1;
    console.log("Rush out of the house!");
    console.log("The ghost stands at the doorway as you stand watching as hands reach out the house.");
    player.fear++;
    console.log("Scared out of your mind you run into the woods, but your clumsy self falls onto a branch.");
    player.cluminess+= 5;
    console.log(`${player.name} it seems you have awoken in a bed that isn't yours.`);
    player.fear+= 2;
    console.log(`${player.name} a woman appears at the foot at the end of the bed.`);
    console.log("you ask the woman kindly where you are.");
    console.log("She didn't answer and just left the room.");
    player.courage+= 4;
    console.log(`${player.name} It appears you have awoken back in the place you most feared.`);
    console.log("This seems to be another story for another time...");
  }

  }
  
} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
console.log("You hear a footsteps from the outside of the house. You run inside breathing very heavy!");
console.log("You get spooked by a rat on the ground...... ohhh nooo!!!");
console.log("You yell!");
player.courage -- ;
console.log("You leave running because a ghost appears behind you......please do not catch me!!");





}
console.log("Thanks for playing!"); 