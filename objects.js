function character(name){

this.name = name;
this.weapon;
this.color;
this.relationship = true;
this.skill;
this.getInfo = getCharacter;

}

function getCharacter(){


return this.name + " " + this.weapon + " " + this.color + " " + this.relationship;

}

let maximus = new character("Maximus");
maximus.weapon = "Blaster";
maximus.color = "Red";
maximus.relationship = true;
maximus.skill = "Electricity";

console.log(maximus.getInfo());
 
let person = {isHungry: false, firstname : "Stoneand", gender: "male", age: 30, eyecolor: 'eye'}

console.log(person.firstname + person.age)
