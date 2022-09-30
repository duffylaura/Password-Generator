// Global arrays to use for generating password. 

var upALL = ['S','Y','I','P','M','H','V','G','T','D','N','O','E','B','K','F','Z','Q','L','R','C','J','W','X','A','U'];
var lowALL = ['u','r','q','t','z','k','p','c','b','s','w','h','n','g','f','m','l','y','i','o','x','j','a','d','e','v'];
var numALL = ['5','9','8','4','1','2','0','6','7','3'];
var spcALL = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '/', ']', '^', '_', '`', '{', '|', '}', '~' ];
var all = ['*','=','>','7','f','%','L','i','~','o','Z','J','S','!','_','5','G','C',',','&','W','1','X','b','d','z','H','I','j','|','k','v','O','0','h','r','N','+','a','B','p','x','/','M','9','Q','R','E','}','D','K','/','c','g','2','e',')','w','A','[','6',';','-','V','@','l','Y','y','P','?','.','$','t','8','q','n','#','4','u','m','<',']','U','{','s','^',':','(','F','T','3','`'];

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

  //Ensuring that min val is < max val. Used Math.abs because without it, when I would input 8 as min and 148 as max, it wouldn't work. 

  if (((min>1) && (max>1)) && (Math.abs(min) > Math.abs(max))){
    return ((alert ("Logic Error: The minimum character count cannot be larger than the maximum character count.")),"Adjust your criteria entries, then try again.")};
    
  // Generate Lowercase Characters, store in randomLowChars

var randomLowChars = [''];

if (low>0){ 
  for (var i = low; i>0; --i) {
  var addTo = lowALL [(i-1)];
  randomLowChars.push(addTo);}
};

// Generate Uppercase Characters, store in randomUpChars

var randomUpChars = [''];

if (up>0){
  for (var i = up; i>0; --i) {
  var addTo1 = upALL [(i-1)];
  randomUpChars.push(addTo1);}
};

var randomNumChars = [''];

if (num>0){
  for (var i = num; i>0; --i) {    
  var addTo2 = numALL[(i-1)];     
  randomNumChars.push(addTo2);}
};       

// Generate Special Characters, store in randomSpcChars

var randomSpcChars = [''];

if (spc>0){
  for (var i = spc; i>0; --i) {
  var addTo3 = spcALL [i-1];
  randomSpcChars.push(addTo3);}
};

// create string that meets parameters explicitly:

var criteria1 = randomLowChars.concat(randomUpChars, randomNumChars, randomSpcChars);

var criteria2 = criteria1.join('');

////////// If statements that generate the password return: \\\\\\\\\\\\\\\\\

if (criteria2=='') {
    
          if ((min>1)&&(max<1)) {
              var minInputOnly = [''];
              var minRandomStart = Math.round(Math.random()*15);
              
              for (var i = min; i>0; i--) {
                var addTo5 = all[(minRandomStart)+(i-1)];
                minInputOnly.push(addTo5);}
            
              var minInputOnlyReturn = minInputOnly.join('');

              return (minInputOnlyReturn);
          };

          if ((max>1)&&(min<1)) {
            var maxInputOnly = [''];
            var maxRandomStart = Math.round(Math.random()*20);
            
            for (var i = max; i>0; i--) {
              var addTo6 = all[(maxRandomStart)+(i-1)];
              maxInputOnly.push(addTo6);}
          
            var maxInputOnlyReturn = maxInputOnly.join('');

            return (maxInputOnlyReturn);
          };

          if ((min==1)&&(max<1)){
            return ((alert ("A secure password must be longer than 1 character")), "Enter more specific criteria, then try again.")};

          if ((min==1)&&(max>1)){
            var maxInputOnly = [''];
            var maxRandomStart = Math.round(Math.random()*20);
            
            for (var i = max; i>0; i--) {
              var addTo6 = all[(maxRandomStart)+(i-1)];
              maxInputOnly.push(addTo6);}
          
            var maxInputOnlyReturn = maxInputOnly.join('');

            return (maxInputOnlyReturn);
            };
  };

  if ((min=='') && (max=='')) {
    return (criteria2)
  };
  
  if (max==1){
          return ((alert ("A secure password must be longer than 1 character")), "Enter more specific criteria, then try again.")};

  if ((max>1)&&(min<1)) {

    if ((criteria2.length) <= Math.abs(max)) {
      return (criteria2)
    };

    if ((criteria2.length)> Math.abs(max)) {
      alert ("The total number of characters you required as criteria is greater than the maximum number of characters that you have allowed.");
      return ("Check criteria you have entered, then try again.")
    };
  };
  
if (min > 0) {

  if ((criteria2.length) >= (Math.abs(min))) {

    if (Math.abs(max) >= (criteria2.length)) {return (criteria2)};

    if (max=='') {return (criteria2)};

    if ((criteria2.length)> Math.abs(max)) {
      alert ("The total number of characters you required as criteria is greater than the maximum number of characters that you have allowed.");
      return ("Check criteria you have entered, then try again.")
    };
    
  };

  if ((criteria2.length)< (Math.abs(min))) {
          
          var additionalChars = [''];

          var difference = (Math.abs(min))-(criteria2.length);

          for (var i = difference; i>0; --i) {    
                var addTo7 = numALL[(i-1)];     
                additionalChars.push(addTo7);}

          var criteria3 = additionalChars.join('');

          var criteria4 = criteria2.concat(criteria3);

          return (criteria4);
          };
        };
}
