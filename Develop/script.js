// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






function generatePassword () {

 let node = document.querySelector("body").thirdChild;

  const A = document.getElementById ('minChar').value;
  const  B = document.getElementById('maxChar').value;
  const C = document.getElementById('lowChar').value;
  const D = document.getElementById('upChar').value;
  const E = document.getElementById('spcChar').value;

  return (B);


}
