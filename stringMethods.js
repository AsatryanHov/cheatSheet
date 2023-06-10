// 1. length - returns the length of a string
const str = "Hello, World!";
console.log(str.length); // Output: 13

// 2. toUpperCase - converts a string to uppercase
const str2 = "hello";
console.log(str2.toUpperCase()); // Output: HELLO

// 3. toLowerCase - converts a string to lowercase
const str3 = "WORLD";
console.log(str3.toLowerCase()); // Output: world

// 4. charAt - returns the character at a specified index
const str4 = "JavaScript";
console.log(str4.charAt(2)); // Output: v

// 5. concat - concatenates two or more strings
const str5 = "Hello";
const str6 = "World";
console.log(str5.concat(", ", str6)); // Output: Hello, World

// 6. indexOf - returns the index of the first occurrence of a specified value
const str7 = "Hello, World!";
console.log(str7.indexOf("o")); // Output: 4

// 7. lastIndexOf - returns the index of the last occurrence of a specified value
const str8 = "Hello, World!";
console.log(str8.lastIndexOf("o")); // Output: 7

// 8. slice - extracts a section of a string and returns a new string
const str9 = "Hello, World!";
console.log(str9.slice(7, 12)); // Output: World

// 9. substr - extracts a substring from a string, starting at a specified position
const str10 = "Hello, World!";
console.log(str10.substr(7, 5)); // Output: World

// 10. replace - replaces a specified value with another value in a string
const str11 = "Hello, World!";
console.log(str11.replace("Hello", "Hi")); // Output: Hi, World!

// 11. split - splits a string into an array of substrings based on a specified separator
const str12 = "Hello, World!";
console.log(str12.split(", ")); // Output: ['Hello', 'World!']

// 12. trim - removes whitespace from both ends of a string
const str13 = "   Hello, World!   ";
console.log(str13.trim()); // Output: Hello, World!

// 13. startsWith - checks if a string starts with a specified value
const str14 = "Hello, World!";
console.log(str14.startsWith("Hello")); // Output: true

// 14. endsWith - checks if a string ends with a specified value
const str15 = "Hello, World!";
console.log(str15.endsWith("World!")); // Output: true

// 15. includes - checks if a string contains a specified value
const str16 = "Hello, World!";
console.log(str16.includes("o")); // Output: true

// 16. repeat - returns a new string with a specified number of copies of the original string
const str17 = "Hello";
console.log(str17.repeat(3)); // Output: HelloHelloHello

// 17. trimStart / trimLeft - removes whitespace from the beginning of a string
const str18 = "   Hello, World!";
console.log(str18.trimStart()); // Output: Hello, World!

// 18. trimEnd / trimRight - removes whitespace from the end of a string
const str19 = "Hello, World!   ";
console.log(str19.trimEnd()); // Output: Hello, World!

// 19. padStart - pads the current string with another string until it reaches a specified length
const str20 = "5";
console.log(str20.padStart(3, "0")); // Output: 005

// 20. padEnd - pads the current string with another string until it reaches a specified length
const str21 = "5";
console.log(str21.padEnd(3, "0")); // Output: 500

// 21. substring - extracts a substring from a string between two specified indices
const str22 = "Hello, World!";
console.log(str22.substring(7, 12)); // Output: World

// 22. match - searches a string for a specified pattern and returns an array of matches
const str23 = "Hello, World!";
console.log(str23.match(/o/g)); // Output: ['o', 'o']

// 23. search - searches a string for a specified value and returns the index of the first match
const str24 = "Hello, World!";
console.log(str24.search("World")); // Output: 7

// 24. toLocaleLowerCase - converts a string to lowercase according to the host's locale
const str25 = "WORLD";
console.log(str25.toLocaleLowerCase()); // Output: world

// 25. toLocaleUpperCase - converts a string to uppercase according to the host's locale
const str26 = "world";
console.log(str26.toLocaleUpperCase()); // Output: WORLD

// 26. repeat - returns a new string with a specified number of copies of the original string
const str27 = "Hello";
console.log(str27.repeat(3)); // Output: HelloHelloHello

// 27. matchAll - returns an iterator of all matched substrings in a string based on a specified pattern
const str28 = "Hello, World!";
const regex = /o/g;
const matches = str28.matchAll(regex);
for (const match of matches) {
  console.log(match); // Output: ['o', index: 4, input: 'Hello, World!']
}

// 28. localeCompare - compares two strings and returns a number indicating their relative order
const str29 = "apple";
const str30 = "banana";
console.log(str29.localeCompare(str30)); // Output: -1

// 29. startsWith - checks if a string starts with a specified value at a specified position
const str31 = "Hello, World!";
console.log(str31.startsWith("World", 7)); // Output: true

// 30. endsWith - checks if a string ends with a specified value at a specified position
const str32 = "Hello, World!";
console.log(str32.endsWith("Hello", 5)); // Output: true

// 31. toString - converts a value to a string
const num = 42;
console.log(num.toString()); // Output: "42"

// 32. trimLeft - removes whitespace from the beginning of a string
const str33 = "   Hello, World!";
console.log(str33.trimLeft()); // Output: "Hello, World!"

// 33. trimRight - removes whitespace from the end of a string
const str34 = "Hello, World!   ";
console.log(str34.trimRight()); // Output: "Hello, World!"

// 34. localeCompare - compares two strings and returns a number indicating their relative order
const str35 = "apple";
const str36 = "banana";
console.log(str35.localeCompare(str36)); // Output: -1

// 35. codePointAt - returns the Unicode code point value at a specified position
const str37 = "ABC";
console.log(str37.codePointAt(1)); // Output: 66

// 36. fromCharCode - converts Unicode values into characters
console.log(String.fromCharCode(65, 66, 67)); // Output: "ABC"

// 37. includes - checks if a string contains a specified value
const str38 = "Hello, World!";
console.log(str38.includes("o")); // Output: true

// 38. normalize - returns the Unicode Normalization Form of a given string
const str39 = "e\u0301";
console.log(str39.normalize()); // Output: "é"

// 39. padStart - pads the current string with a specified string until it reaches a specified length
const str40 = "5";
console.log(str40.padStart(3, "0")); // Output: "005"

// 40. padEnd - pads the current string with a specified string until it reaches a specified length
const str41 = "5";
console.log(str41.padEnd(3, "0")); // Output: "500"
