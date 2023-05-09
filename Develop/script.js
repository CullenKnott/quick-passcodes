// Assignment code here
// create a flag array to set multiple variables
var characters = {
  lowerCase: false,
  upperCase: false,
  numbers: false,
  specialChars: false,
  length: 8
}

function generatePassword() {
  console.log('test');

  //create variable to select characters from
  var chars = {
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    specialChars: '!@#$%^&*()-_=+`~{}[];:|/.,<>'
  }

  //prompt user for number of characters
  var passwordLength = window.prompt('Input password character length 8-128.');
 // record user inputs to configure password
 var validateInputs = false;
 while (!validateInputs) {
   if (passwordLength >= 8 && passwordLength <= 128) {
     validateInputs = true;
     characters.length = +passwordLength;
     console.log(characters.length);
     console.log(typeof characters.length);
   } else {
     console.log('invalid number set');
     window.confirm(passwordLength + " Is not a valid password length. Please try again.");
     return;
   }
  }

  // change the booleans of 'var characters' based off user input
  var addUppercase = window.confirm("Add Uppercase letters to your password?");
    if (addUppercase) {
      characters.upperCase = true;
      console.log(characters.upperCase);
    }
  var addLowercase = window.confirm("Add Lowercase letters to your password?");
    if (addLowercase) {
      characters.lowerCase = true;
      console.log(characters.lowerCase);
    }
  var addNumbers = window.confirm("Add numeric characters to your password?")
    if (addNumbers) {
      characters.numbers = true;
      console.log(characters.numbers);
    }
  var addSpecialChars = window.confirm("Add Special characters (i.e. !@#%^) to your password?");
    if (addSpecialChars) {
      characters.specialChars = true;
      console.log(characters.specialChars);
    }

  // generate the final password based on the boolean values
  var PasswordStitch = [
    ...characters.lowerCase ? chars.lowerCase : [],
    ...characters.upperCase ? chars.upperCase : [],
    ...characters.numbers ? chars.numbers : [],
    ...characters.specialChars ? chars.specialChars : []
  ].join('')

  //create randomizer that returns the newly produced password and end the function execution
  return Array.from({length: characters.length}, () => Math.floor(Math.random() * PasswordStitch.length))
.map(number => PasswordStitch[number])
 .join('')

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //reset boolean values when generator is re-ran in the same session
  characters.lowerCase = false;
  characters.upperCase = false;
  characters.numbers = false;
  characters.specialChars = false;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
