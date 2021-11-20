// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharacters = ["!","@","#","$","%","^","&","*"]

// var passwordLength = 10;
var isNumbers =true; //confirm("do you want numbers"); true;
//if(isNumbers) - didmnt finish this bit
var isLowerLetters = true;
var isUpperLetters = false;
var isSpecial = false;

generateBtn.addEventListener("click", writePassword);
function generatePassword () {
  var chars = 
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var specialCharacters = ["!","@","#","$","%","^","&","*"]

  // var passwordLength = 12;
  var password = '';
  
  for (var i = 0; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  document.getElementById("password").value = password;
  return password;
}
   
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generationPassword() {

  var password = "";


  var passwordLength = prompt("How long do ya want that password?");

  if (passwordLength < 8 && passwordLength > 128) {
    alert("You may choose a password 8-128 characters long");
  }

if(confirm("Press a button")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel"
}


  



//let arrayFromLowToHigh = (low, high) => {
//   const array = [];
//   for (let i = low; i <= high; i++) {
//     array.push(i);
//   }
//   return array;
// };

// Add event listener to generate button

// Modify Data = Reassigning a new value to an existing variable. 

// Create new data

// Gather dta from the user

// Modify existing data

// Validate data (comparison operators /IF Else)

var myString = "Anthony";

myString =1;

myString =+ 1;

// console.log(alert( "A message:" ));

// console.log(prompt(Give me some info"));

// console.log(confirm("A yes / no choice"));



  // console.log('generate a password.');

  //loop to repeat, selecting a random character and then appending it to the string 
  // loop until our string reaches the chosen length.

  // Randomly select an available charact
  password += "a";

  password += "r";

  password += "5";

  password += "]";

  return password;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
//Create a new variable for an empty array for each generation of the password

// var  passwordCharacter = [];

// if(confirmSpecialCharacters=== true) {

//   passwordCharacter = passwordCharacter.concat(specialCharacters);
//   passwordCharacter = passwordCharacter.concat(specialCharacters);
//   passwordCharacter = passwordCharacter.concat(specialCharacters);
//   passwordCharacter = passwordCharacter.concat(specialCharacters);
// }

//update to fill in for numbers etc?
//Merge 'specialCharacters' with the new array

//Array concat


// if ()