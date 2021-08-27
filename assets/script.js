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


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var characters = prompt("How many characters would you like your password to contain?");
    if ((parseInt(characters) < 8) || (parseInt(characters) > 128)) {
        alert("Please choose a number between 8 and 128");
        return writePassword();
    } 
    else if (!characters) {
        alert("You must select a number of characters for your password");
        return writePassword();
    } else {
        var length = parseInt(characters);
    }
    var hasLower = confirm("Do you want to include lower case letters?");
    var hasUpper = confirm("Do you want to include upper case letters?");
    var hasNumber = confirm("Do you want to include numbers?");
    var hasSymbol = confirm("Do you want to include special characters?");
  
    var passwordEl = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
    );
    console.log(passwordEl());
};
     

function generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length) {
    var password = ""
    var functionArray = []
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
    if (!hasLower && !hasUpper && !hasNumber && !hasSymbol) {
        alert("You must confirm at least one to continue");
        return writePassword();
    }
    for (var i = 0; i < length; i++ ) {
        var index = Math.floor(Math.random() * functionArray.length)
        password = password + functionArray[index]();
    }

    var passwordText = document.querySelector("#password"); 

    passwordText.value = password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);