var upALL = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowALL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numALL = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var spcALL = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '/', ']', '^', '_', '`', '{', '|', '}', '~' ];
var all = upALL.concat(lowALL, numALL, spcALL);

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

  var min = document.getElementById ('minChar').value;
  var max = document.getElementById('maxChar').value;
  var low = document.getElementById('lowChar').value;
  var up = document.getElementById('upChar').value;
  var num = document.getElementById('numChar').value;
  var spc = document.getElementById('spcChar').value;

 // Generate Lowercase Characters, store in randomLowChars

  for (var index1 = low; index1 >0; index1--) {
    
    var rndIndex1 = Math.floor(Math.random()*index1+1);

    var lowALLTemp = lowALL[rndIndex1];

    lowALL[rndIndex1] = lowALL[index1];

    lowALL [index1] = lowALLTemp;
  }
  
  var randomLowChars = lowALL.slice(0,low);

// Generate Uppercase Characters, store in randomUpChars

for (var index2 = up; index2 >0; index2--) {
    
  var rndIndex2 = Math.floor(Math.random()*index2+1);

  var upALLTemp = upALL[rndIndex2];

  upALL[rndIndex2] = upALL[index2];

  upALL[index2] = upALLTemp;
}

var randomUpChars = upALL.slice(0,up);

// Generate Neumeric Characters, store in randomNumChars

for (var index3 = num; index3 >0; index3--) {
    
  var rndIndex3 = Math.floor(Math.random()*index3+1);

  var numALLTemp = numALL[rndIndex3];

  numALL[rndIndex3] = numALL[index3];

  numALL[index3] = numALLTemp;
}

var randomNumChars = numALL.slice(0,num);

// Generate Special Characters, store in randomSpcChars

for (var index4 = spc; index4 >0; index4--) {
    
  var rndIndex4 = Math.floor(Math.random()*index4+1);

  var spcALLTemp = spcALL[rndIndex4];

  spcALL[rndIndex4] = spcALL[index4];

  spcALL[index4] = spcALLTemp;
}

var randomSpcChars = spcALL.slice(0,spc);

// Bring everything together //

// something is happening here with concat that takes away randomness //

var criteria1 = randomLowChars.concat(randomUpChars, randomNumChars, randomSpcChars);

if (criteria1.length < (min+1)) {

  for (var index5 = (min-criteria1.length); index5>0; index5--) {
    
    var rndIndex5 = Math.floor(Math.random()*index5+1);
  
    var allTemp = all[rndIndex5];
  
    all[rndIndex5] = all[index5];
  
    all[index5] = allTemp;
  }
  
  var MakeTheMinimum = all.slice(0,(min-criteria1.length));

  var criteria2 = criteria1.concat(MakeTheMinimum);

return (criteria2);
}
else {return (criteria1)};

}

// need to fix issue with randomness  (line 95)
// need to add to final "if" statement about if someone enters a maximum amt of char
// final return use join() method // ex. fruits.join('') // in notebook// 
// Also when totally finished look up Fisher-Yates shuffle 
// Add in shuffle if have time? or use the randomizing method I alread have?