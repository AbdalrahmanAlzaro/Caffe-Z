// if statement
// alert("Welcome to Caffe-Z")

// let name = prompt("Please enter your name:");
// let gender = prompt("Please enter your gender (male or female):");

// if (gender == "male") {
//   alert("Welcome, Mr " + name + "!");
// } else if (gender == "female") {
//   alert("Welcome, Ms " + name + "!");
// } else {
//   alert("Welcome!");
// }

// let drinkType = prompt("Would you like a hot or cold drink?");
// let drinkName = prompt("What kind of drink would you like?");

// alert("Your " + drinkType + " " + drinkName + " is being prepared!");

// console.log(name + " ordered a " + drinkType + " " + drinkName + ".");




//for loops 
alert("Welcome to Caffe-Z")
let answers = [];
let username = prompt("What is your name?");
let gender = "";

while (gender !== "male" && gender !== "female") {
  gender = prompt("What is your gender? (male/female)");
}

let drinkType = prompt("Would you like a hot or cold drink?");
let drinkName = prompt("What kind of drink would you like?");

answers.push(username, gender, drinkType, drinkName);

for (let i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}
