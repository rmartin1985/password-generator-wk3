// Assignment code here


var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

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
    var characters = prompt("How many characters would you like your password to contain?");
    var length = parseInt(characters);
    var hasLower = confirm("Do you want to include lower case letters?");
    var hasUpper = confirm("Do you want to include upper case letters?");
    var hasNumber = confirm("Do you want to include numbers?");
    var hasSymbol = confirm("Do you want to include special characters?");
  
    console.log(length);
    console.log(hasLower);
    console.log(hasUpper);
    console.log(hasNumber);
    console.log(hasSymbol);
  
    var password = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
    );
};
     

// var passwordText = document.querySelector("#password");

// passwordText.value = password; 


function generatePassword(lower, upper, number, symbol, length) {

    var generatedPassword = '';

    var typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount);

    var typesArr = [{lower}, {upper}, {number}, {symbol}];

    console.log('typesArr: ', typesArr);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);