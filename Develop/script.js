// Assignment code here
var numbers = '0123456789';
var charLowercase = 'abcdefghijklmnopqrstuvwxyz';
var charUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charSpecial = "`~!@#$%^&*()-_+=';:/?.<>[]{}|";
var genPassword = ['']

function generatePassword() {
  console.log('test');

  //prompt user for number of characters
  var passwordLength = window.prompt('Input password character length 8-128.');
  // prompt user character types


  // make sure that the inputs are valid and meet the requirements
  var validateInputs = false;
  while (!validateInputs) {
    if (passwordLength >= 8 && passwordLength <= 128) {
      validateInputs = true;
      console.log(passwordLength);
    } else {
      console.log('invalid number set');
      window.confirm(passwordLength + " Is not a valid password length. Please try again.");
      return;
    }
  }

  // record user inputs to configure password
  var addUppercase = window.confirm("Add Uppercase letters to your password?");
  var addLowercase = window.confirm("Add Lowercase letters to your password?");
  var addNumbers = window.confirm("Add numeric characters to your password?")
  var addSpecialChars = window.confirm("Add Special characters (i.e. !@#%^) to your password?");

if (addUppercase) {
  Math.floor(Math.random() * charLowercase.length);
}

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
