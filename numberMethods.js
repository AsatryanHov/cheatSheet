// 1. toFixed - formats a number with a specified number of decimal places
const num1 = 3.14159;
console.log(num1.toFixed(2)); // Output: 3.14

// 2. toPrecision - formats a number to a specified length
const num2 = 123.456;
console.log(num2.toPrecision(4)); // Output: 123.5

// 3. toString - converts a number to a string
const num3 = 42;
console.log(num3.toString()); // Output: "42"

// 4. parseInt - parses a string and returns an integer
const num4 = parseInt("10");
console.log(num4); // Output: 10

// 5. parseFloat - parses a string and returns a floating-point number
const num5 = parseFloat("3.14");
console.log(num5); // Output: 3.14

// 6. isNaN - checks if a value is NaN (Not-a-Number)
const num6 = NaN;
console.log(isNaN(num6)); // Output: true

// 7. isFinite - checks if a value is a finite number
const num7 = Infinity;
console.log(isFinite(num7)); // Output: false

// 8. Math.abs - returns the absolute value of a number
const num8 = -42;
console.log(Math.abs(num8)); // Output: 42

// 9. Math.round - rounds a number to the nearest integer
const num9 = 3.7;
console.log(Math.round(num9)); // Output: 4

// 10. Math.floor - rounds a number down to the nearest integer
const num10 = 3.7;
console.log(Math.floor(num10)); // Output: 3

// 11. Math.ceil - rounds a number up to the nearest integer
const num11 = 3.2;
console.log(Math.ceil(num11)); // Output: 4

// 12. Math.max - returns the highest value in a list of numbers
console.log(Math.max(1, 2, 3)); // Output: 3

// 13. Math.min - returns the lowest value in a list of numbers
console.log(Math.min(1, 2, 3)); // Output: 1

// 14. Math.random - generates a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: 0.12345 (example)

// 15. Math.pow - returns the result of a number raised to a specified power
console.log(Math.pow(2, 3)); // Output: 8

// 16. Math.sqrt - returns the square root of a number
console.log(Math.sqrt(16)); // Output: 4

// 17. Number.isInteger - checks if a value is an integer
const num12 = 42;
console.log(Number.isInteger(num12)); // Output: true

// 18. Number.isNaN - checks if a value is NaN (Not-a-Number)
const num13 = NaN;
console.log(Number.isNaN(num13)); // Output: true

// 19. Number.parseFloat - parses a string and returns a floating-point number
const num14 = Number.parseFloat("3.14");
console.log(num14); // Output: 3.14

// 20. Number.parseInt - parses a string and returns an integer
const num15 = Number.parseInt("10");
console.log(num15); // Output: 10

// 21. Number.isFinite - checks if a value is a finite number
const num16 = Infinity;
console.log(Number.isFinite(num16)); // Output: false

// 22. Number.isSafeInteger - checks if a value is a safe integer
const num17 = 9007199254740992; // Outside the safe integer range
console.log(Number.isSafeInteger(num17)); // Output: false

// 23. Math.sign - returns the sign of a number as -1, 0, or 1
const num18 = -42;
console.log(Math.sign(num18)); // Output: -1

// 24. Math.trunc - removes the decimal part of a number
const num19 = 3.7;
console.log(Math.trunc(num19)); // Output: 3

// 25. Math.sin - returns the sine of a number
const num20 = Math.PI / 2;
console.log(Math.sin(num20)); // Output: 1

// 26. Math.cos - returns the cosine of a number
const num21 = Math.PI;
console.log(Math.cos(num21)); // Output: -1

// 27. Math.tan - returns the tangent of a number
const num22 = 0;
console.log(Math.tan(num22)); // Output: 0

// 28. Math.log - returns the natural logarithm (base e) of a number
const num23 = 10;
console.log(Math.log(num23)); // Output: 2.302585092994046

// 29. Math.exp - returns e raised to the power of a number
const num24 = 2;
console.log(Math.exp(num24)); // Output: 7.3890560989306495

// 30. Math.floor - rounds a number down to the nearest integer
const num25 = 3.7;
console.log(Math.floor(num25)); // Output: 3
