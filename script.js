//Variables
var userPassword = [];
var userChoice = [];
var numbers = "0123456789";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()";

//Generate Password Function
function generatePassword(){


    //PROMPT TO CHOOSE BETWEEN 8 to 128 CHARACTERS
    let length = parseInt(prompt("choose between 8 to 128 char for your password"));

    console.log('length', length);

    if(length < 8 || length > 128) {
        alert("Whoa! Please choose a number between 8 and 128") ;
        return;
     } else if (length === undefined || isNaN(length)) {
         alert("Whoa! Please choose a number between 8 and 128")
         return;
     } 

    //PROMPT TO CHOOSE IF YOU WOULD LIKE NUMERICAL VALUES
    let isNumbers = confirm('Would you like numerical values in your password?');
    console.log('isNumbers',isNumbers)
    if(isNumbers){
        userChoice.push(...numbers)
    } 
    console.log('user choice',userChoice);
    
    //PROMPT TO CHOOSE IF YOU WOULD LIKE UPPER LETTERS
    let isUpperLetters = confirm('would you like upper letters?');
    console.log('isUpperLetters',isUpperLetters)
    if(isUpperLetters){
        userChoice.push(...upperLetters)
    }
    console.log('user choice',userChoice)

    //PROMPT TO CHOOSE IF YOU WOULD LIKE LOWER LETTERS
    let isLowerLetters = confirm('would you like lower letters?');
    console.log('isLowerLetters',isLowerLetters)
    if(isLowerLetters){
        userChoice.push(...lowerLetters)
    }
    console.log('user choice',userChoice)

    //PROMPT TO CHOOSE IF YOU WOULD LIKE SPECIAL CHARACTERS
    let isSpecChar = confirm('would you like spec chara?');
    console.log('isSpecChar',isSpecChar)
    if(isSpecChar){
        userChoice.push(...specialCharacters)
    }
    console.log('user choice',userChoice)

    //FOR LOOP
    for(let index = 0; index < length; index++){
        console.log('lenght after loop', length)
        userPassword.push(userChoice[Math.floor(Math.random() * userChoice.length)]);
        console.log(userPassword.join('+'))
    }

    //BUG FIXES
    if (!isNumbers && !isUpperLetters && !isLowerLetters && !isSpecChar) {
        alert("Honey, gotta enter something or whats the point. Try again.");
        generatePassword();
    }

    document.getElementById('password').value = userPassword.join('');

//test
}