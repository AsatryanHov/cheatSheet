// Object Methods Cheat Sheet

// 1. Object.create(proto, [propertiesObject])
// Creates a new object with the specified prototype object and optional properties.
const obj1 = Object.create(null);

// 2. Object.keys(obj)
// Returns an array of a given object's own enumerable property names.
const keys = Object.keys(obj);

// 3. Object.values(obj)
// Returns an array of a given object's own enumerable property values.
const values = Object.values(obj);

// 4. Object.entries(obj)
// Returns an array of a given object's own enumerable property [key, value] pairs.
const entries = Object.entries(obj);

// 5. Object.assign(target, ...sources)
// Copies the values of all enumerable properties from one or more source objects to a target object.
const target = {};
Object.assign(target, obj1, obj2);

// 6. Object.hasOwnProperty(prop)
// Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
const hasProp = obj.hasOwnProperty("property");

// 7. Object.is(obj1, obj2)
// Determines whether two values are the same value.
const isSame = Object.is(obj1, obj2);

// 8. Object.freeze(obj)
// Freezes an object: other code cannot delete or modify its properties.
const frozenObj = Object.freeze(obj);

// 9. Object.seal(obj)
// Seals an object: other code cannot add/delete properties, but can modify existing properties.
const sealedObj = Object.seal(obj);

// 10. Object.getPrototypeOf(obj)
// Returns the prototype of the specified object.
const proto = Object.getPrototypeOf(obj);

// 11. Object.setPrototypeOf(obj, proto)
// Sets the prototype of the specified object.
Object.setPrototypeOf(obj, proto);

// 12. Object.defineProperty(obj, prop, descriptor)
// Adds the named property described by a given descriptor to an object.
Object.defineProperty(obj, "property", {
  value: "value",
  writable: false,
  enumerable: true,
  configurable: true,
});

// 13. Object.getOwnPropertyDescriptor(obj, prop)
// Returns a property descriptor for a named property on an object.
const descriptor = Object.getOwnPropertyDescriptor(obj, "property");

// 14. Object.getOwnPropertyNames(obj)
// Returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
const propertyNames = Object.getOwnPropertyNames(obj);

// 15. Object.getOwnPropertySymbols(obj)
// Returns an array of all symbol properties found directly in a given object.
const symbols = Object.getOwnPropertySymbols(obj);

// 16. Object.toString()
// Returns a string representation of the object.
const str = Object.toString();

// Object Methods Cheat Sheet (Continued)

// 17. Object.hasOwnProperty(prop)
// Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
const hasProp = obj.hasOwnProperty("property");

// 18. Object.isExtensible(obj)
// Determines if an object is extensible (i.e., if new properties can be added to it).
const isExtensible = Object.isExtensible(obj);

// 19. Object.preventExtensions(obj)
// Prevents any extensions of an object (i.e., prevents new properties from being added to it).
Object.preventExtensions(obj);

// 20. Object.isSealed(obj)
// Determines if an object is sealed (i.e., if it is neither extensible nor properties can be deleted).
const isSealed = Object.isSealed(obj);

// 21. Object.isFrozen(obj)
// Determines if an object is frozen (i.e., if it is neither extensible, properties can be deleted, nor properties can be modified).
const isFrozen = Object.isFrozen(obj);

// 22. Object.keys(obj)
// Returns an array of a given object's own enumerable property names.
const keys = Object.keys(obj);

// 23. Object.values(obj)
// Returns an array of a given object's own enumerable property values.
const values = Object.values(obj);

// 24. Object.entries(obj)
// Returns an array of a given object's own enumerable property [key, value] pairs.
const entries = Object.entries(obj);

// 25. Object.fromEntries(entries)
// Transforms a list of key-value pairs into an object.
const transformedObj = Object.fromEntries(entries);

// 26. Object.prototype.hasOwnProperty(prop)
// Returns a boolean indicating whether the object or its prototype chain has the specified property.
const hasPropInChain = obj.hasOwnProperty("property");

// 27. Object.prototype.toString()
// Returns a string representation of the object.
const str = obj.toString();

// 28. Object.prototype.valueOf()
// Returns the primitive value of the object.
const value = obj.valueOf();

// 29. Object.prototype.isPrototypeOf(obj)
// Checks if an object exists in another object's prototype chain.
const isProto = prototypeObj.isPrototypeOf(obj);

// 30. Object.prototype.propertyIsEnumerable(prop)
// Returns a boolean indicating whether the specified property is enumerable.
const isEnumerable = obj.propertyIsEnumerable("property");

// Object Methods Cheat Sheet (Continued)

// 31. Object.getOwnPropertyDescriptors(obj)
// Returns an object containing all own property descriptors of an object.
const descriptors = Object.getOwnPropertyDescriptors(obj);

// 32. Object.isPrototypeOf(obj)
// Checks if an object is in the prototype chain of another object.
const isProto = Object.isPrototypeOf(protoObj);

// 33. Object.values(obj)
// Returns an array of a given object's own enumerable property values.
const values = Object.values(obj);

// 34. Object.entries(obj)
// Returns an array of a given object's own enumerable property [key, value] pairs.
const entries = Object.entries(obj);

// 35. Object.keys(obj)
// Returns an array of a given object's own enumerable property names.
const keys = Object.keys(obj);

// 36. Object.defineProperties(obj, descriptors)
// Defines new or modifies existing properties directly on an object, returning the object.
Object.defineProperties(obj, {
  property1: {
    value: "value1",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  property2: {
    value: "value2",
    writable: false,
    enumerable: true,
    configurable: true,
  },
});

// 37. Object.getOwnPropertyNames(obj)
// Returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
const propertyNames = Object.getOwnPropertyNames(obj);

// 38. Object.getOwnPropertySymbols(obj)
// Returns an array of all symbol properties found directly in a given object.
const symbols = Object.getOwnPropertySymbols(obj);

// 39. Object.toString()
// Returns a string representation of the object.
const str = Object.toString();

// 40. Object.valueOf()
// Returns the primitive value of the object.
const value = obj.valueOf();
