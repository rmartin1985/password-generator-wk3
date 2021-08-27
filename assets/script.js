// Assignment code here

// function to generate random lower case letters
function getRandomLower () {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// function to generate random upper case letters
function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 };

// function to generate random numbers
 function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 };

// function to generate random symbols
 function getRandomSymbol () {
     var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
 };

 console.log(getRandomLower());
 console.log(getRandomUpper());
 console.log(getRandomNumber());
 console.log(getRandomSymbol());





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