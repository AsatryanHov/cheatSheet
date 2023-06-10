// Regex Cheat Sheet - JavaScript

// Creating a Regex Pattern:
var regex = /pattern/; // Literal notation
var regex = new RegExp("pattern"); // Constructor notation

// Flags:
var regex = /pattern/g; // Global flag - match all occurrences
var regex = /pattern/i; // Ignore case flag - case-insensitive matching
var regex = /pattern/m; // Multiline flag - match across multiple lines

// Metacharacters:
var regex = /./; // Any character except newline
var regex = /\w/; // Any word character [a-zA-Z0-9_]
var regex = /\W/; // Any non-word character [^a-zA-Z0-9_]
var regex = /\d/; // Any digit [0-9]
var regex = /\D/; // Any non-digit [^0-9]
var regex = /\s/; // Any whitespace character
var regex = /\S/; // Any non-whitespace character
var regex = /\bword\b/; // Word boundary
var regex = /^pattern/; // Start of string
var regex = /pattern$/; // End of string

// Quantifiers:
var regex = /a*/; // Zero or more occurrences of 'a'
var regex = /a+/; // One or more occurrences of 'a'
var regex = /a?/; // Zero or one occurrence of 'a'
var regex = /a{3}/; // Exactly 3 occurrences of 'a'
var regex = /a{3,}/; // 3 or more occurrences of 'a'
var regex = /a{3,5}/; // 3 to 5 occurrences of 'a'

// Character Classes:
var regex = /[abc]/; // Any character in the set [abc]
var regex = /[^abc]/; // Any character not in the set [^abc]
var regex = /[a-z]/; // Any lowercase letter [a-z]
var regex = /[A-Z]/; // Any uppercase letter [A-Z]
var regex = /[0-9]/; // Any digit [0-9]
var regex = /[^0-9]/; // Any non-digit [^0-9]
var regex = /[a-zA-Z0-9]/; // Any alphanumeric character [a-zA-Z0-9]
var regex = /[^a-zA-Z0-9]/; // Any non-alphanumeric character [^a-zA-Z0-9]
var regex = /\s/; // Any whitespace character
var regex = /\S/; // Any non-whitespace character

// Grouping and Alternation:
var regex = /(abc)/; // Grouping
var regex = /a|b/; // Alternation - match either 'a' or 'b'

// Anchors:
var regex = /^pattern/; // Start of string
var regex = /pattern$/; // End of string

// Quantifiers:
var regex = /a*/; // Zero or more occurrences of 'a'
var regex = /a+/; // One or more occurrences of 'a'
var regex = /a?/; // Zero or one occurrence of 'a'
var regex = /a{3}/; // Exactly 3 occurrences of 'a'
var regex = /a{3,}/; // 3 or more occurrences of 'a'
var regex = /a{3,5}/; // 3 to 5 occurrences of 'a'

// Assertions:
var regex = /x(?=y)/; // Positive lookahead - match 'x' if
