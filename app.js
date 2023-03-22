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
// alert("Welcome to Caffe-Z")
// let answers = [];
// let username = prompt("What is your name?");
// let gender = "";

// function typeGender(){
// while (gender !== "male" && gender !== "female") {
//   gender = prompt("What is your gender? (male/female)");
// }
// }

// typeGender();

// let age = prompt("what is your age ");
// let drinkName = prompt("What kind of drink would you like?");

// answers.push(username, gender, age, drinkName);

// for (let i = 0; i < answers.length; i++) {
//   console.log(answers[i]);
// }



// Dom


// const divInput = document.getElementById('div1');

// const div = document.createElement('div')

// const text = document.createElement("p");
// text.textContent = username   ;


// const ul = document.createElement("ul");


// const li1 = document.createElement("li");
// li1.textContent = `Gendar : ${gender}`   ;

// const li2 = document.createElement("li");
// li2.textContent = `Age : ${age} ` ;

// const li3 = document.createElement("li");
// li3.textContent = `Drink : ${drinkName}`  ;


// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);


// div.appendChild(text);
// div.appendChild(ul);

// divInput.appendChild(div);

//Event function

// const form = document.getElementById("myForm");

// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // prevent the default form submission

// let username = event.target.username.value;
// let password = event.target.password.value;

// console.log(username);

// console.log(password);


// form.reset();





// });









// // const button = document.getElementById("myButton");
// // button.addEventListener("click", function(event) {
// //   console.log("Button clicked!");
// // });











//Event function

const mainForm = document.getElementById("mainBody");
mainForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = event.target.fname.value;
    const userAge = event.target.birthday.value;

   const drinkType = event.target.type.checked ? event.target.type.value:"";
   const drinkType1 = event.target.type1.checked ? event.target.type1.value:"";

    const drinName = event.target.dname.value;





    console.log(userName, userAge, drinkType, drinkType1, drinName)

    mainForm.reset();

    render(userName, userAge, drinkType, drinkType1,drinName );
});


function render(userName, userAge, drinkType, drinkType1, drinName){
  console.log(userName, userAge, drinkType, drinkType1, drinName)
const divInput = document.getElementById('div1');

const div = document.createElement('div')

const text = document.createElement("p");
text.textContent =  userName ;


const ul = document.createElement("ul");


const li1 = document.createElement("li");
li1.textContent = `age : ${userAge}`   ;

const li2 = document.createElement("li");
li2.textContent = `drink type : ${drinkType} ${drinkType1}  ` ;

const li3 = document.createElement("li");
li3.textContent = `Drink : ${drinName}`  ;


ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);


div.appendChild(text);
div.appendChild(ul);

divInput.appendChild(div);
}