// Arrays of the characters to use for password generation 🤖
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Function to generate the password 🤖
function generatePassword() {
  var password = "";
  var passwordLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));

  // Check if password length is valid 🤖
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Check if at least one character type is selected 🤖
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  // Build the string of characters to use for password generation 🤖
  var characters = "";
  if (includeLowercase) {
    characters += lowercaseChars;
  }
  if (includeUppercase) {
    characters += uppercaseChars;
  }
  if (includeNumeric) {
    characters += numericChars;
  }
  if (includeSpecial) {
    characters += specialChars;
  }
  // Generate the password based on the selected character types 🤖
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

// Function to handle button click event to generate password and display it to the user 🤖
function handleClick() {
  var password = generatePassword();
  if (password !== "") {
    alert("Your password is: " + password);
  }
}

// Add event listener to button "click" event generated 🤖
document.getElementById("generate").addEventListener("click", handleClick);


// 🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖 THE END 🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖