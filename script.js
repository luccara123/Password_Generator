// Assignment code here

//steps:
// Make the generatePassword function
// 1.Prompt the user the questions
//  - password length 8 < 128
//  - if not a number
//  - Lowercase, uppercase, number and special chracters
//  - ralidade the imput, if one type is selected, then is validaded
//  - if one type of character is confirmed, then add it to the initial password
//  - make a loop with the math object to generate random password with all inputs
//   -return the variable that storared the password value
// 2. Display password for the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Variables for the options
var empty = "";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@,#$%&*{}[]/\\+=";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate the password function
function generatePassword(){
  var initialPassword = empty;
  var pass = "";
  // ask the lenght to the user
  var passwordCharacters = prompt("Please enter how many characters for the password(Choose between 8 and 128)");
  // if the answer is not a number
  if (isNaN(passwordCharacters)){
    alert("Input only a number!");
    return generatePassword()
  }
  // if the answer is not a number between 8 and 128
  if (passwordCharacters < 8 || passwordCharacters > 128){ 
    alert("Not valid! Choose a number between 8 and 128!");
    return generatePassword()
    } 
   // Ask the user which characters types they want
  var lowerCaseConfirmed = confirm("Add lowercase letters?");
  var upperCaseConfirmed = confirm("Add uppercase letters?");
  var numbersConfirmed = confirm("Add numbers?");
  var symbolsConfirmed = confirm("Add special characters?");
  // if the user don't confirm any character type
  if(!lowerCaseConfirmed && !upperCaseConfirmed && !numbersConfirmed && !symbolsConfirmed){
    alert("Choose at least one character type!");
    return generatePassword()
  }

  //if lowerCaseConfirmed
  if (lowerCaseConfirmed){ 
    initialPassword += lowerCase ; // empty = empty + lowercase 
   } else if (lowerCaseConfirmed === false){
     "";
   } 

   // if upperCase is confirmed
   if (upperCaseConfirmed){ 
     initialPassword += upperCase ;
    }else if (upperCaseConfirmed === false) {
      "";
    }

    // if numbers is confirmed
    if (numbersConfirmed){ 
     initialPassword += numbers;
    } else if(numbersConfirmed === false) {
      "";
    }
     // if symbols is confirmed
    if (symbolsConfirmed){ 
     initialPassword += symbols ;
    } else if (symbolsConfirmed === false){
      "";
    }
    // Loop to generate a random password with the validaded inputs
  for (var i = 0; i < passwordCharacters; i++){
    pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
  }
  return pass;
}











