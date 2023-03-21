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






// // //for loops 
alert("Welcome to Caffe-Z")
let answers = [];
let username = prompt("What is your name?");
let gender = "";

function typeGender(){
while (gender !== "male" && gender !== "female") {
  gender = prompt("What is your gender? (male/female)");
}
}

typeGender();

let age = prompt("what is your age ");
let drinkName = prompt("What kind of drink would you like?");

answers.push(username, gender, age, drinkName);

for (let i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}



// Dom


const divInput = document.getElementById('div1');

const div = document.createElement('div')

const text = document.createElement("p");
text.textContent = username   ;


const ul = document.createElement("ul");


const li1 = document.createElement("li");
li1.textContent = `Gendar : ${gender}`   ;

const li2 = document.createElement("li");
li2.textContent = `Age : ${age} ` ;

const li3 = document.createElement("li");
li3.textContent = `Drink : ${drinkName}`  ;


ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);


div.appendChild(text);
div.appendChild(ul);

divInput.appendChild(div);