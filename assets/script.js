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

// Write password to the #password input
function writePassword() {
    // prompt for character count
    var characters = prompt("How many characters would you like your password to contain?");
    // make sure it is between 8 and 128 characters
    if ((parseInt(characters) < 8) || (parseInt(characters) > 128)) {
        alert("Please choose a number between 8 and 128");
        return writePassword();
    } 
    // alert if they don't choose any characters 
    else if (!characters) {
        alert("You must select a number of characters for your password");
        return writePassword();
    } else {
        var length = parseInt(characters);
    }
    // confirm if they want lower case letters
    var hasLower = confirm("Do you want to include lower case letters?");
    // confirm if they want upper case letters
    var hasUpper = confirm("Do you want to include upper case letters?");
    // confirm if they want numbers
    var hasNumber = confirm("Do you want to include numbers?");
    // confirm if they want special characters 
    var hasSymbol = confirm("Do you want to include special characters?");
    // pass the answers into the generatePassword function
    generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
    );
};
     
// create function to generate the password here 
function generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length) {
    // password needs to display as an array
    var password = ""
    var functionArray = []
    // if they choose ok (true) for any of the prompts, add them to the array of possible characters
    if (hasLower) {
        functionArray.push(getRandomLower)
    }
    if (hasUpper) {
        functionArray.push(getRandomUpper)
    }
    if (hasNumber) {
        functionArray.push(getRandomNumber)
    }
    if (hasSymbol) {
        functionArray.push(getRandomSymbol)
    }
    // if they don't choose anything send them alert that they need to pick at least one and start over
    if (!hasLower && !hasUpper && !hasNumber && !hasSymbol) {
        alert("You must confirm at least one to continue");
        return writePassword();
    }
    // for loop will go here to iterate through the length of the character count chosen and the random characters 
    for (var i = 0; i < length; i++ ) {
        var index = Math.floor(Math.random() * functionArray.length)
        password = password + functionArray[index]();
    }

    var passwordText = document.querySelector("#password"); 

    passwordText.value = password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);