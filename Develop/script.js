// Assignment code here

//steps:
// Make the generatePassword function
// 1.Prompt the user the questions
//  - password length 8 < 128
//  - Lowercase, uppercase, number and special chracters
//  -  Validade the imput, if one type is selected, then is validaded
// Return the variable that storared the password value
// 2. Display password for the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Variables for the options
var empty = "";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;



var passwordCharacters = prompt("Please enter how many characters for the password")
  
if (passwordCharacters < 8 || passwordCharacters > 128  ){ //add if a string
  alert("Not valid! Enter a number between 8 and 128")
} else if(passwordCharacters >= 8 && passwordCharacters <= 128) {
  var lowerCaseConfirmed = confirm("Add lowercase letters?");
  var upperCaseConfirmed = confirm("Add uppercase letters?");
  var numbersConfirmed = confirm("Add numbers?");
  var symbolsConfirmed = confirm("Add special characters?");
}
// 
function passwordOptions(){
       var initialPassword = empty;
       //if lowerCaseConfirmed
       if (lowerCaseConfirmed === true){ 
         initialPassword += lowerCase ; // empty = empty + lowercase 
        } else{
          "";
        } 
        // if upperCase is confirmed
        if (upperCaseConfirmed === true){ 
          initialPassword += upperCase ;
         } else{
           "";
         }
         // if numbers is confirmed
         if (numbersConfirmed === true){ 
          initialPassword += numbers;
         } else{
           "";
         }
         if (symbolsConfirmed === true){ 
          initialPassword += symbols ;
         } else{
           "";
         }
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
