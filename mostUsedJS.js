console.log("Hello, world!");
alert("Hello, world!");
let name = prompt("What is your name?");
let number = parseInt("42");
let number = parseFloat("3.14");
let str = String(42);
let num = Number("42");
typeof "Hello"; // returns "string"
Array.isArray([1, 2, 3]); // returns true
let strLength = "Hello".length; // returns 5
let uppercaseStr = "hello".toUpperCase(); // returns "HELLO"
let lowercaseStr = "HELLO".toLowerCase(); // returns "hello"
let fullName = "John".concat(" ", "Doe"); // returns "John Doe"
let str = ["Hello", "world"].join(" "); // returns "Hello world"
// -----------------------------------
let arr = [1, 2, 3];
arr.push(4);
// -----------------------------------
let arr = [1, 2, 3];
let lastElement = arr.pop(); // returns 3
// -----------------------------------
let arr = [1, 2, 3];
let firstElement = arr.shift(); // returns 1
// -----------------------------------
let arr = [2, 3, 4];
arr.unshift(1);
// -----------------------------------
let arr = [1, 2, 3, 4, 5];
let subArray = arr.slice(2, 4); // returns [3, 4]
// -----------------------------------
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "hello");
// -----------------------------------
let arr = [1, 2, 3, 4, 5];
let index = arr;

// ---------- STRING METHODS---------
// -----------------------------------
let str = "Hello, world!";

// Length of the string
let length = str.length;
console.log(length); // Output: 13

// Convert to uppercase
let uppercase = str.toUpperCase();
console.log(uppercase); // Output: HELLO, WORLD!

// Convert to lowercase
let lowercase = str.toLowerCase();
console.log(lowercase); // Output: hello, world!

// Check if a string includes a substring
let includesSubstring = str.includes("world");
console.log(includesSubstring); // Output: true

// Extract a substring
let substring = str.substring(7, 12);
console.log(substring); // Output: world

// Split a string into an array of substrings
let splitted = str.split(", ");
console.log(splitted); // Output: ['Hello', 'world!']

// Trim leading and trailing whitespace
let trimmed = str.trim();
console.log(trimmed); // Output: Hello, world!

// Replace a substring with another string
let replaced = str.replace("world", "JavaScript");
console.log(replaced); // Output: Hello, JavaScript!

// Concatenate strings
let str1 = "Hello";
let str2 = "JavaScript";
let concatenated = str1.concat(", ", str2, "!");
console.log(concatenated); // Output: Hello, JavaScript!

let str = "Hello, world!";

// Check if a string starts with a specific substring
let startsWith = str.startsWith("Hello");
console.log(startsWith); // Output: true

// Check if a string ends with a specific substring
let endsWith = str.endsWith("world!");
console.log(endsWith); // Output: true

// Find the index of a substring
let indexOfSubstring = str.indexOf("world");
console.log(indexOfSubstring); // Output: 7

// Find the last index of a substring
let lastIndexOfSubstring = str.lastIndexOf("o");
console.log(lastIndexOfSubstring); // Output: 8

// Repeat a string a certain number of times
let repeated = str.repeat(3);
console.log(repeated); // Output: Hello, world!Hello, world!Hello, world!

// Extract a character at a specific index
let charAt = str.charAt(4);
console.log(charAt); // Output: o

// Get the Unicode value of a character at a specific index
let charCode = str.charCodeAt(4);
console.log(charCode); // Output: 111

// Check if a string contains only numeric characters
let isNumeric = str.match(/^\d+$/);
console.log(isNumeric); // Output: null (if the string is not numeric)

// Split a string into an array of characters
let characters = str.split("");
console.log(characters); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']

// Reverse a string
let reversed = str.split("").reverse().join("");
console.log(reversed); // Output: !dlrow ,olleH

// Extract a substring using regular expressions
let regexSubstring = str.match(/world/g);
console.log(regexSubstring); // Output: ['world']

let str = "Hello, world!";

// Check if a string is empty
let isEmpty = str.length === 0;
console.log(isEmpty); // Output: false

// Check if a string is a palindrome
let isPalindrome = str === str.split("").reverse().join("");
console.log(isPalindrome); // Output: false

// Extract a substring using substr
let substr = str.substr(7, 5);
console.log(substr); // Output: world

// Pad a string with a specified character
let padded = str.padStart(20, "*");
console.log(padded); // Output: ****Hello, world!

// Extract the first character of a string
let firstChar = str.charAt(0);
console.log(firstChar); // Output: H

// Extract the last character of a string
let lastChar = str.charAt(str.length - 1);
console.log(lastChar); // Output: !

// Convert a string to an array of words
let words = str.split(" ");
console.log(words); // Output: ['Hello,', 'world!']

// Replace multiple occurrences of a substring with another string
let replacedAll = str.replaceAll("o", "*");
console.log(replacedAll); // Output: Hell*, w*rld!

// Check if a string matches a regular expression
let matchesRegex = str.match(/Hello/g);
console.log(matchesRegex); // Output: ['Hello']

// Remove leading and trailing whitespace
let trimmedWhitespace = str.trim();
console.log(trimmedWhitespace); // Output: Hello, world!

let str = "Hello, world!";

// Convert the first character to uppercase
let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalized); // Output: Hello, world!

// Check if a string contains only alphabetic characters
let isAlpha = /^[a-zA-Z]+$/.test(str);
console.log(isAlpha); // Output: false

// Extract a substring between two indices
let substringBetweenIndices = str.substring(7, 12);
console.log(substringBetweenIndices); // Output: world

// Check if a string is a valid email address
let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
console.log(isValidEmail); // Output: false

// Convert a string to an array of characters using Array.from
let charactersArray = Array.from(str);
console.log(charactersArray); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']

// Remove a specific substring from a string
let removedSubstring = str.replace("Hello, ", "");
console.log(removedSubstring); // Output: world!

// Convert a string to title case
let titleCase = str.replace(/\w\S*/g, function (text) {
  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
});
console.log(titleCase); // Output: Hello, World!

// Split a string into an array of words and count the number of words
let wordsArray = str.split(" ");
let wordCount = wordsArray.length;
console.log(wordCount); // Output: 2

// Reverse the words in a string
let reversedWords = wordsArray.reverse().join(" ");
console.log(reversedWords); // Output: world! Hello,

// Convert a string to a slug (lowercase, hyphen-separated words)
let slug = str.toLowerCase().replace(/\s+/g, "-");
console.log(slug); // Output: hello,-world!

let str = "Hello, world!";

// Convert a string to an array of words and capitalize each word
let capitalizedWords = str
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalizedWords); // Output: Hello, World!

// Check if a string contains only numeric characters
let isNumeric = /^[0-9]+$/.test(str);
console.log(isNumeric); // Output: false

// Count the occurrences of a substring in a string
let substringCount = str.split("o").length - 1;
console.log(substringCount); // Output: 2

// Remove leading whitespace from a string
let trimmedLeft = str.trimStart();
console.log(trimmedLeft); // Output: Hello, world!

// Remove trailing whitespace from a string
let trimmedRight = str.trimEnd();
console.log(trimmedRight); // Output: Hello, world!

// Repeat a string with a separator in between
let repeatedWithSeparator = str.repeat(3).split("").join("-");
console.log(repeatedWithSeparator); // Output: H-e-l-l-o-,- -w-o-r-l-d-!-H-e-l-l-o-,- -w-o-r-l-d-!-H-e-l-l-o-,- -w-o-r-l-d-!

// Check if a string is a valid URL
let isValidURL = /^(http|https):\/\/([\w.]+\/?)\S*$/.test(str);
console.log(isValidURL); // Output: false

// Replace multiple substrings using a map of replacements
let replacements = new Map([
  ["Hello", "Hola"],
  ["world", "mundo"],
]);
let replacedMultiple = str.replace(/Hello|world/g, (match) =>
  replacements.get(match)
);
console.log(replacedMultiple); // Output: Hola, mundo!

// Split a string into an array of lines
let linesArray = str.split(/\r?\n/);
console.log(linesArray); // Output: ['Hello, world!']

// Convert a string to kebab case (lowercase, hyphen-separated words)
let kebabCase = str.toLowerCase().replace(/\s+/g, "-");
console.log(kebabCase); // Output: hello,-world-

let str = "Hello, world!";

// Convert a string to camel case
let camelCase = str
  .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  })
  .replace(/\s+/g, "");
console.log(camelCase); // Output: helloWorld!

// Check if a string is a valid date in the format "YYYY-MM-DD"
let isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(str);
console.log(isValidDate); // Output: false

// Get the Unicode value of a character at a specific index (codePointAt)
let unicodeValue = str.codePointAt(4);
console.log(unicodeValue); // Output: 111

// Repeat a string a certain number of times with a separator in between
let repeatedWithSeparator = str.repeat(3).split("").join("-");
console.log(repeatedWithSeparator); // Output: H-e-l-l-o-,- -w-o-r-l-d-!-H-e-l-l-o-,- -w-o-r-l-d-!-H-e-l-l-o-,- -w-o-r-l-d-!

// Check if a string contains only alphanumeric characters
let isAlphanumeric = /^[a-zA-Z0-9]+$/.test(str);
console.log(isAlphanumeric); // Output: false

// Remove all occurrences of a substring from a string
let removedAll = str.replace(/o/g, "");
console.log(removedAll); // Output: Hell, wrld!

// Convert a string to an array of characters using spread operator
let charactersArray = [...str];
console.log(charactersArray); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']

// Check if a string contains only whitespace characters
let isWhitespace = /^\s+$/.test(str);
console.log(isWhitespace); // Output: false

// Check if a string is a valid JSON
let isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
};
console.log(isValidJSON(str)); // Output: false

// ------------- number methods-----------
let num = 42;

// Convert a number to a string
let numToString = num.toString();
console.log(numToString); // Output: "42"

// Convert a string to a number
let stringToNum = parseInt("42");
console.log(stringToNum); // Output: 42

// Get the number of decimal places
let decimalPlaces = num.toString().split(".")[1]?.length || 0;
console.log(decimalPlaces); // Output: 0

// Round a number to a specified number of decimal places
let rounded = num.toFixed(2);
console.log(rounded); // Output: "42.00"

// Convert a number to exponential notation
let exponential = num.toExponential(2);
console.log(exponential); // Output: "4.20e+1"

// Check if a number is an integer
let isInteger = Number.isInteger(num);
console.log(isInteger); // Output: true

// Get the absolute value of a number
let absoluteValue = Math.abs(num);
console.log(absoluteValue); // Output: 42

// Check if a number is NaN (Not a Number)
let isNan = Number.isNaN(num);
console.log(isNan); // Output: false

// Get the maximum value among a list of numbers
let max = Math.max(10, 20, 30, 40, 50);
console.log(max); // Output: 50

// Get the minimum value among a list of numbers
let min = Math.min(10, 20, 30, 40, 50);
console.log(min); // Output: 10

// Generate a random number between a specified range
let random = Math.random() * (10 - 5) + 5;
console.log(random); // Output: a random number between 5 and 10

// Check if a number is finite
let isFiniteNum = isFinite(num);
console.log(isFiniteNum); // Output: true

let num = 42;

// Check if a number is positive infinity
let isPositiveInfinity =
  Number.isFinite(num) && num === Number.POSITIVE_INFINITY;
console.log(isPositiveInfinity); // Output: false

// Check if a number is negative infinity
let isNegativeInfinity =
  Number.isFinite(num) && num === Number.NEGATIVE_INFINITY;
console.log(isNegativeInfinity); // Output: false

// Check if a number is a safe integer
let isSafeInteger = Number.isSafeInteger(num);
console.log(isSafeInteger); // Output: true

// Convert a number to a fixed number of digits
let fixedDigits = num.toFixed(5);
console.log(fixedDigits); // Output: "42.00000"

// Get the square root of a number
let squareRoot = Math.sqrt(num);
console.log(squareRoot); // Output: 6.48074069840786

// Get the cube root of a number
let cubeRoot = Math.cbrt(num);
console.log(cubeRoot); // Output: 3.476026644159999

// Get the value of a number rounded to the nearest integer
let roundedNearestInt = Math.round(num);
console.log(roundedNearestInt); // Output: 42

// Get the value of a number rounded up to the nearest integer
let roundedUp = Math.ceil(num);
console.log(roundedUp); // Output: 42

// Get the value of a number rounded down to the nearest integer
let roundedDown = Math.floor(num);
console.log(roundedDown); // Output: 42

// Get the value of a number raised to a power
let power = Math.pow(num, 2);
console.log(power); // Output: 1764

// Generate a random integer between a specified range
let randomInteger = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
console.log(randomInteger); // Output: a random integer between 5 and 10

// Check if a number is divisible by another number
let isDivisibleBy = num % 5 === 0;
console.log(isDivisibleBy); // Output: true

let num = 42;

// Get the value of a number rounded to a specified number of decimal places
let roundedDecimal = parseFloat(num.toFixed(3));
console.log(roundedDecimal); // Output: 42.000

// Get the value of a number as a binary string
let binaryString = num.toString(2);
console.log(binaryString); // Output: "101010"

// Get the value of a number as an octal string
let octalString = num.toString(8);
console.log(octalString); // Output: "52"

// Get the value of a number as a hexadecimal string
let hexString = num.toString(16);
console.log(hexString); // Output: "2a"

// Get the value of a number as a percentage string
let percentageString = (num * 100).toFixed(2) + "%";
console.log(percentageString); // Output: "4200.00%"

// Check if a number is within a specific range
let isInRange = num >= 0 && num <= 100;
console.log(isInRange); // Output: true

// Get the absolute difference between two numbers
let diff = Math.abs(10 - 20);
console.log(diff); // Output: 10

// Get the smallest integer greater than or equal to a number
let ceil = Math.ceil(num);
console.log(ceil); // Output: 42

// Get the largest integer less than or equal to a number
let floor = Math.floor(num);
console.log(floor); // Output: 42

// Convert degrees to radians
let degrees = 90;
let radians = (degrees * Math.PI) / 180;
console.log(radians); // Output: 1.5707963267948966

// Get the maximum value among an array of numbers
let max = Math.max(10, 20, 30, 40, 50);
console.log(max); // Output: 50

// Get the minimum value among an array of numbers
let min = Math.min(10, 20, 30, 40, 50);
console.log(min); // Output: 10

// Calculate the sum of an array of numbers
let sum = [1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 15

// Calculate the average of an array of numbers
let average = sum / [1, 2, 3, 4, 5].length;
console.log(average); // Output: 3

let num = 42;

// Check if a number is divisible by another number
let isDivisibleBy = num % 5 === 0;
console.log(isDivisibleBy); // Output: true

// Get the value of a number rounded to the nearest multiple of another number
let nearestMultiple = Math.round(num / 10) * 10;
console.log(nearestMultiple); // Output: 40

// Convert a number to a string with a specific base (radix)
let binaryString = num.toString(2);
console.log(binaryString); // Output: "101010"

// Get the number of digits in a number
let numDigits = Math.floor(Math.log10(Math.abs(num))) + 1;
console.log(numDigits); // Output: 2

// Check if a number is a prime number
let isPrime = isPrimeNumber(num);
console.log(isPrime); // Output: true

function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Get the factorial of a number
let factorial = getFactorial(num);
console.log(factorial); // Output: 1405006117752879898543142606244511569936384000000000

function getFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

// Convert degrees to radians
let degrees = 90;
let radians = degrees * (Math.PI / 180);
console.log(radians); // Output: 1.5707963267948966

// Calculate the power of a number
let power = Math.pow(num, 3);
console.log(power); // Output: 74088

// Check if a number is within a specific range
let isInRange = num >= 0 && num <= 100;
console.log(isInRange); // Output: true

// Calculate the sum of an array of numbers using reduce
let sum = [1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 15

// Calculate the average of an array of numbers
let average = sum / [1, 2, 3, 4, 5].length;
console.log(average); // Output: 3

// -------------Boolean-------------
let bool = true;

// Convert a value to a Boolean
let convertedBool = Boolean(0);
console.log(convertedBool); // Output: false

// Negate a Boolean value
let negatedBool = !bool;
console.log(negatedBool); // Output: false

// Check if a value is truthy (not false, 0, '', null, undefined, NaN)
let isTruthy = !!0;
console.log(isTruthy); // Output: false

// Check if a value is falsy (false, 0, '', null, undefined, NaN)
let isFalsy = !"";
console.log(isFalsy); // Output: true

// Perform logical AND operation
let resultAnd = true && false;
console.log(resultAnd); // Output: false

// Perform logical OR operation
let resultOr = true || false;
console.log(resultOr); // Output: true

// Perform logical NOT operation
let resultNot = !true;
console.log(resultNot); // Output: false

// Check if a value is equal to another value (strict equality)
let isEqual = 5 === 5;
console.log(isEqual); // Output: true

// Check if a value is not equal to another value (strict inequality)
let isNotEqual = 5 !== 10;
console.log(isNotEqual); // Output: true

let bool = true;

// Check if a value is equal to another value (loose equality)
let isEqualLoose = "5" == 5;
console.log(isEqualLoose); // Output: true

// Check if a value is not equal to another value (loose inequality)
let isNotEqualLoose = "5" != 10;
console.log(isNotEqualLoose); // Output: true

// Check if a value is greater than another value
let isGreater = 10 > 5;
console.log(isGreater); // Output: true

// Check if a value is less than another value
let isLess = 5 < 10;
console.log(isLess); // Output: true

// Check if a value is greater than or equal to another value
let isGreaterOrEqual = 10 >= 10;
console.log(isGreaterOrEqual); // Output: true

// Check if a value is less than or equal to another value
let isLessOrEqual = 5 <= 10;
console.log(isLessOrEqual); // Output: true

// Perform logical XOR (exclusive OR) operation
let resultXor = true ^ false;
console.log(resultXor); // Output: true

// Perform logical NAND operation
let resultNand = !(true && true);
console.log(resultNand); // Output: false

// Perform logical NOR operation
let resultNor = !(true || true);
console.log(resultNor); // Output: false

// Check if a value is an instance of a specific type or class
let isInstanceOf = "Hello" instanceof String;
console.log(isInstanceOf); // Output: false

let bool = true;

// Check if a value is strictly greater than another value
let isStrictlyGreater = 10 > 5;
console.log(isStrictlyGreater); // Output: true

// Check if a value is strictly less than another value
let isStrictlyLess = 5 < 10;
console.log(isStrictlyLess); // Output: true

// Check if a value is strictly greater than or equal to another value
let isStrictlyGreaterOrEqual = 10 >= 10;
console.log(isStrictlyGreaterOrEqual); // Output: true

// Check if a value is strictly less than or equal to another value
let isStrictlyLessOrEqual = 5 <= 10;
console.log(isStrictlyLessOrEqual); // Output: true

// Check if a value is truthy using double negation
let isTruthy = !!"Hello";
console.log(isTruthy); // Output: true

// Check if a value is falsy using double negation
let isFalsy = !!null;
console.log(isFalsy); // Output: false

// Check if all values in an array are truthy
let areAllTruthy = [true, 1, "Hello"].every(Boolean);
console.log(areAllTruthy); // Output: true

// Check if any value in an array is truthy
let isAnyTruthy = [false, 0, "Hello"].some(Boolean);
console.log(isAnyTruthy); // Output: true

// Check if a value is NaN (Not a Number)
let isNaNValue = isNaN("Hello");
console.log(isNaNValue); // Output: true

// Check if a value is finite (not NaN, Infinity, or -Infinity)
let isFiniteValue = isFinite(42);
console.log(isFiniteValue); // Output: true

// -------------Objects-------------
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

// Get the keys of an object
let keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "occupation"]

// Get the values of an object
let values = Object.values(person);
console.log(values); // Output: ["John", 30, "Developer"]

// Get the entries of an object
let entries = Object.entries(person);
console.log(entries);
// Output: [["name", "John"], ["age", 30], ["occupation", "Developer"]]

// Check if an object has a specific property
let hasProperty = person.hasOwnProperty("age");
console.log(hasProperty); // Output: true

// Merge two or more objects into a new object
let otherInfo = {
  gender: "Male",
  city: "New York",
};

let mergedObject = { ...person, ...otherInfo };
console.log(mergedObject);
// Output: { name: "John", age: 30, occupation: "Developer", gender: "Male", city: "New York" }

// Clone an object (shallow copy)
let clonedObject = { ...person };
console.log(clonedObject === person); // Output: false

// Access a property value using a dynamic key
let propertyName = "age";
let propertyValue = person[propertyName];
console.log(propertyValue); // Output: 30

// Delete a property from an object
delete person.occupation;
console.log(person); // Output: { name: "John", age: 30 }

// Check if an object is empty
let isEmpty = Object.keys(person).length === 0;
console.log(isEmpty); // Output: false

// Get the number of properties in an object
let numProperties = Object.keys(person).length;
console.log(numProperties); // Output: 2

let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

// Check if an object has a specific value
let hasValue = Object.values(person).includes("Developer");
console.log(hasValue); // Output: true

// Check if an object is an instance of a specific type or class
let isInstanceOf = person instanceof Object;
console.log(isInstanceOf); // Output: true

// Get a shallow copy of an object with selected properties
let selectedProperties = ["name", "age"];
let selectedObject = Object.fromEntries(
  Object.entries(person).filter(([key]) => selectedProperties.includes(key))
);
console.log(selectedObject); // Output: { name: "John", age: 30 }

// Determine if two objects have the same property values
let otherPerson = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

let hasSameValues = JSON.stringify(person) === JSON.stringify(otherPerson);
console.log(hasSameValues); // Output: true

// Get the prototype of an object
let prototype = Object.getPrototypeOf(person);
console.log(prototype); // Output: {}

// Set the prototype of an object
let newPrototype = { country: "USA" };
Object.setPrototypeOf(person, newPrototype);
console.log(person); // Output: { name: "John", age: 30, occupation: "Developer" }

// Iterate over the properties of an object
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// occupation: Developer
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

// Check if an object has a specific property, including inherited properties
let hasProperty = "name" in person;
console.log(hasProperty); // Output: true

// Get the descriptor of a property in an object
let propertyDescriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(propertyDescriptor);
// Output: { value: "John", writable: true, enumerable: true, configurable: true }

// Define or modify a property descriptor of an object
Object.defineProperty(person, "name", {
  value: "Jane",
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(person.name); // Output: "Jane"

// Get the prototype of an object
let prototype = Object.getPrototypeOf(person);
console.log(prototype); // Output: {}

// Set the prototype of an object
let newPrototype = { country: "USA" };
Object.setPrototypeOf(person, newPrototype);
console.log(person); // Output: { name: "Jane", age: 30, occupation: "Developer" }

// Get all property names of an object, including inherited properties
let allProperties = [];
let currentObject = person;
while (currentObject !== null) {
  allProperties.push(...Object.getOwnPropertyNames(currentObject));
  currentObject = Object.getPrototypeOf(currentObject);
}
console.log(allProperties); // Output: ["name", "age", "occupation", "country"]

// Freeze an object to make it immutable
Object.freeze(person);
person.name = "Bob";
console.log(person.name); // Output: "Jane"

// Seal an object to prevent adding or deleting properties, but allow modifying existing ones
Object.seal(person);
delete person.age;
console.log(person.age); // Output: 30

// Prevent extensions of an object, disallowing adding new properties
Object.preventExtensions(person);
person.gender = "Male";
console.log(person.gender); // Output: undefined
//   ------------ Array----------
// push: Adds one or more elements to the end of an array.
// pop: Removes the last element from an array and returns it.
// shift: Removes the first element from an array and returns it.
// unshift: Adds one or more elements to the beginning of an array.
// concat: Combines two or more arrays and returns a new array.
// slice: Extracts a portion of an array into a new array.
// splice: Changes the contents of an array by removing, replacing, or adding elements.
// indexOf: Returns the first index at which a specified element is found in an array.
// lastIndexOf: Returns the last index at which a specified element is found in an array.
// includes: Determines whether an array includes a certain element, returning true or false.
// join: Joins all elements of an array into a string.
// reverse: Reverses the order of the elements in an array.
// sort: Sorts the elements of an array in place.
// filter: Creates a new array with all elements that pass a test.
// map: Creates a new array by applying a function to each element of an existing array.
// reduce: Applies a function to reduce the elements of an array to a single value.
// forEach: Executes a provided function once for each array element.
// some: Tests whether at least one element in the array passes a test.
// every: Tests whether all elements in the array pass a test.
// find: Returns the first element in the array that satisfies a provided testing function.
// findIndex: Returns the index of the first element in the array that satisfies a provided testing function.
// fill: Fills all or a portion of an array with a static value.
// isArray: Determines whether the passed value is an array.
// length: Property that returns the number of elements in an array.
let numbers = [1, 2, 3, 4, 5];

// push: Adds an element to the end of the array
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// pop: Removes the last element from the array
let poppedElement = numbers.pop();
console.log(poppedElement); // Output: 6
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// shift: Removes the first element from the array
let shiftedElement = numbers.shift();
console.log(shiftedElement); // Output: 1
console.log(numbers); // Output: [2, 3, 4, 5]

// unshift: Adds an element to the beginning of the array
numbers.unshift(0);
console.log(numbers); // Output: [0, 2, 3, 4, 5]

// concat: Combines two arrays
let otherNumbers = [6, 7, 8];
let combinedArray = numbers.concat(otherNumbers);
console.log(combinedArray); // Output: [0, 2, 3, 4, 5, 6, 7, 8]

// slice: Extracts a portion of an array
let slicedArray = combinedArray.slice(2, 5);
console.log(slicedArray); // Output: [3, 4, 5]

// splice: Changes the contents of an array
let splicedArray = combinedArray.splice(2, 3, "a", "b", "c");
console.log(splicedArray); // Output: [3, 4, 5]
console.log(combinedArray); // Output: [0, 2, "a", "b", "c", 6, 7, 8]

// indexOf: Returns the index of an element in the array
let index = combinedArray.indexOf("c");
console.log(index); // Output: 4

// lastIndexOf: Returns the last index of an element in the array
let lastIndex = combinedArray.lastIndexOf("c");
console.log(lastIndex); // Output: 4

// includes: Checks if an element exists in the array
let includesElement = combinedArray.includes(6);
console.log(includesElement); // Output: true

// join: Joins array elements into a string
let joinedString = combinedArray.join("-");
console.log(joinedString); // Output: "0-2-a-b-c-6-7-8"

// reverse: Reverses the order of elements in the array
combinedArray.reverse();
console.log(combinedArray); // Output: [8, 7, 6, "c", "b", "a", 2, 0]

// sort: Sorts the array elements
combinedArray.sort();
console.log(combinedArray); // Output: [0, 2, 6, 7, 8, "a", "b", "c"]

// filter: Creates a new array with filtered elements
let filteredArray = combinedArray.filter(
  (element) => typeof element === "number"
);
console.log(filteredArray); // Output: [0, 2, 6, 7, 8]

// map: Creates a new array by performing a function on each element
let mappedArray = combinedArray.map((element) => element * 2);
console.log(mappedArray); // Output: [0, 4, 12, 14, 16, NaN, NaN, NaN]

// reduce: Applies a function to reduce

let numbers = [1, 2, 3, 4, 5];

// forEach: Executes a provided function for each array element
numbers.forEach((element) => {
  console.log(element);
});
// Output:
// 1
// 2
// 3
// 4
// 5

// some: Checks if at least one element satisfies a condition
let hasEvenNumber = numbers.some((element) => element % 2 === 0);
console.log(hasEvenNumber); // Output: true

// every: Checks if all elements satisfy a condition
let allEvenNumbers = numbers.every((element) => element % 2 === 0);
console.log(allEvenNumbers); // Output: false

// find: Returns the first element that satisfies a condition
let foundElement = numbers.find((element) => element > 3);
console.log(foundElement); // Output: 4

// findIndex: Returns the index of the first element that satisfies a condition
let foundIndex = numbers.findIndex((element) => element > 3);
console.log(foundIndex); // Output: 3

// fill: Fills the array with a static value
numbers.fill(0);
console.log(numbers); // Output: [0, 0, 0, 0, 0]

// isArray: Checks if a value is an array
let isArray = Array.isArray(numbers);
console.log(isArray); // Output: true

// length: Property that returns the number of elements in the array
let length = numbers.length;
console.log(length); // Output: 5

let numbers = [1, 2, 3, 4, 5];

// reduce: Applies a function to reduce the elements of an array to a single value
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum); // Output: 15

// flat: Creates a new array with all sub-array elements concatenated recursively
let nestedArray = [1, [2, [3, [4, [5]]]]];
let flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]

// flatMap: Maps each element and flattens the result into a new array
let mappedAndFlattenedArray = numbers.flatMap((element) => [element * 2]);
console.log(mappedAndFlattenedArray); // Output: [2, 4, 6, 8, 10]

// from: Creates a new array from an array-like or iterable object
let arrayLikeObject = "Hello";
let newArray = Array.from(arrayLikeObject);
console.log(newArray); // Output: ["H", "e", "l", "l", "o"]

// reverse: Reverses the order of elements in the array
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// sort: Sorts the array elements
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// slice: Extracts a portion of an array into a new array
let slicedArray = numbers.slice(2, 4);
console.log(slicedArray); // Output: [3, 4]

// filter: Creates a new array with all elements that pass a test
let filteredArray = numbers.filter((element) => element % 2 === 0);
console.log(filteredArray); // Output: [2, 4]

// map: Creates a new array by applying a function to each element
let mappedArray = numbers.map((element) => element * 2);
console.log(mappedArray); // Output: [2, 4, 6, 8, 10]

// find: Returns the first element that satisfies a condition
let foundElement = numbers.find((element) => element > 3);
console.log(foundElement); // Output: 4

// includes: Determines whether an array includes a certain element
let includesElement = numbers.includes(3);
console.log(includesElement); // Output: true

// indexOf: Returns the first index at which a specified element is found
let index = numbers.indexOf(2);
console.log(index); // Output: 1

// lastIndexOf: Returns the last index at which a specified element is found
let lastIndex = numbers.lastIndexOf(2);
console.log(lastIndex); // Output: 1

let numbers = [1, 2, 3, 4, 5];

// every: Checks if all elements satisfy a condition
let allGreaterThanZero = numbers.every((element) => element > 0);
console.log(allGreaterThanZero); // Output: true

// some: Checks if at least one element satisfies a condition
let someGreaterThanThree = numbers.some((element) => element > 3);
console.log(someGreaterThanThree); // Output: true

// findIndex: Returns the index of the first element that satisfies a condition
let index = numbers.findIndex((element) => element === 3);
console.log(index); // Output: 2

// fill: Fills the array with a static value from a start index to an end index
numbers.fill(0, 1, 3);
console.log(numbers); // Output: [1, 0, 0, 4, 5]

// join: Joins all elements of an array into a string
let joinedString = numbers.join("-");
console.log(joinedString); // Output: "1-0-0-4-5"

// reverse: Reverses the order of elements in the array
numbers.reverse();
console.log(numbers); // Output: [5, 4, 0, 0, 1]

// sort: Sorts the array elements
numbers.sort();
console.log(numbers); // Output: [0, 0, 1, 4, 5]

// isArray: Checks if a value is an array
let isArray = Array.isArray(numbers);
console.log(isArray); // Output: true

// length: Property that returns the number of elements in the array
let length = numbers.length;
console.log(length); // Output: 5
