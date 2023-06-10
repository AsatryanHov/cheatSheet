// Array Methods Cheat Sheet

// 1. Array.prototype.concat(...arrays)
// Returns a new array that merges the provided arrays.
const newArray = array.concat(array2, array3);

// 2. Array.prototype.push(...elements)
// Modifies the array by adding elements to the end and returns the new length.
const newLength = array.push(element1, element2);

// 3. Array.prototype.pop()
// Modifies the array by removing the last element and returns that element.
const lastElement = array.pop();

// 4. Array.prototype.shift()
// Modifies the array by removing the first element and returns that element.
const firstElement = array.shift();

// 5. Array.prototype.unshift(...elements)
// Modifies the array by adding elements to the beginning and returns the new length.
const newLength = array.unshift(element1, element2);

// 6. Array.prototype.slice(startIndex, endIndex)
// Returns a new array that contains a copy of elements from the original array, starting from startIndex to endIndex (exclusive).
const newArray = array.slice(1, 4);

// 7. Array.prototype.splice(startIndex, deleteCount, ...items)
// Modifies the array by removing or replacing existing elements and/or adding new elements, and returns the removed elements.
const removedElements = array.splice(2, 2, element1, element2);

// 8. Array.prototype.join(separator)
// Returns a string by concatenating all elements in the array, separated by the specified separator.
const joinedString = array.join(", ");

// 9. Array.prototype.indexOf(searchElement, fromIndex)
// Returns the first index at which the searchElement is found in the array, or -1 if not found.
const index = array.indexOf(searchElement);

// 10. Array.prototype.lastIndexOf(searchElement, fromIndex)
// Returns the last index at which the searchElement is found in the array, or -1 if not found.
const lastIndex = array.lastIndexOf(searchElement);

// 11. Array.prototype.includes(searchElement, fromIndex)
// Returns a boolean indicating whether the searchElement is found in the array.
const isIncluded = array.includes(searchElement);

// 12. Array.prototype.find(callback)
// Returns the first element in the array that satisfies the provided testing function, or undefined if not found.
const foundElement = array.find((element) => element > 5);

// 13. Array.prototype.findIndex(callback)
// Returns the index of the first element in the array that satisfies the provided testing function, or -1 if not found.
const foundIndex = array.findIndex((element) => element > 5);

// 14. Array.prototype.filter(callback)
// Returns a new array containing all elements that satisfy the provided testing function.
const filteredArray = array.filter((element) => element > 5);

// 15. Array.prototype.map(callback)
// Returns a new array containing the results of applying the provided callback function to each element in the array.
const mappedArray = array.map((element) => element * 2);

// 16. Array.prototype.forEach(callback)
// Executes a provided callback function once for each array element.
array.forEach((element) => {
  // Do something with each element
});

// 17. Array.prototype.every(callback)
// Tests whether all elements in the array pass the provided testing function.
const allPassed = array.every((element) => element > 0);

// 18. Array.prototype.some(callback)
// Tests whether at least one element in the array passes the provided testing function.
const somePassed = array.some((element) => element > 0);

// 19. Array.prototype.reduce(callback, initialValue)
// Applies a callback function against an accumulator and each element in the array to reduce it to
