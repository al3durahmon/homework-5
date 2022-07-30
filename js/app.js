// console.log(alert("Welcome to my site!"));
// console.log(prompt("what's your name?"));
// console.log(prompt("what's your lastname?"));
// console.log(alert("Are you ready for questions?"));
// console.log(prompt("When was javascript created?"));
// console.log(prompt("File types..."));
// console.log(prompt("javascript is a product of which company?"));
// console.log(prompt("What is javascript?"));
// console.log(prompt("javascript variables..."));
// console.log(prompt("javascript short name..."));
// console.log(alert("Thank you for your time!"));

var intro ="Welcome to my site!";
var firstName = "what's your name?";
var lastName = "what's your lastname?";
var question1 ="Are you ready for questions?";
var question2 = "When was javascript created?";
var question3 = "File types...";
var question4 ="javascript is a product of which company?";
var question5 = "What is javascript?";
var question6 = "javascript variables...";
var question7 ="javascript short name...";
var interest = "Thank you for your time!";


var alertIntro = alert(intro);
var answerFirstName = prompt(firstName).trim();
var answerLastName = prompt(lastName).trim();
var answerQuestion1 = alert(question1);
var answerQuestion2 = prompt(question2).trim();
var answerQuestion3 = prompt(question3).trim();
var answerQuestion4 = prompt(question4).trim();
var answerQuestion5 = prompt(question5).trim();
var answerQuestion6 = prompt(question6).trim();
var answerQuestion7 = prompt(question7).trim();
var answerInterest = alert(interest);


var paragraph = document.createElement("p");
paragraph.textContent = ` ${'User answers!'}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `User name : ${answerFirstName}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `User lastname : ${answerLastName}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `User responses : ${answerLastName}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `User responses : ${answerQuestion1}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `User responses : ${answerQuestion2}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `User responses : ${answerQuestion3}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `User responses : ${answerQuestion4}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `User responses : ${answerQuestion5}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `User responses : ${answerQuestion6}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `User responses : ${answerQuestion7}`;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `Thank you for your time! `;
document.body.appendChild(paragraph);
var paragraph = document.createElement("p");
paragraph.textContent = `${'Your answers have been accepted!'}`;
document.body.appendChild(paragraph);

console.log(`User questions tablet !
User name - ${answerFirstName}. 
User lastname - ${answerLastName}.
User question1 - ${answerQuestion1}.
User question2 - ${answerQuestion2}.
User question3 - ${answerQuestion3}.
User question4 - ${answerQuestion4}.
User question5 - ${answerQuestion5}.
User question6 - ${answerQuestion6}.
User question7 - ${answerQuestion7}.
Congratulations !!! `);
