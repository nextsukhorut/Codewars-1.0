
/*
Complete the method that takes a boolean value and return a "Yes" string for true,
 or a "No" string for false.
*/

function boolToString(bool) {
	//Use the ternaty operator for a concise opproach
	return bool ? "yes" : "No";
}

// Example usage
const isTrue = true;
const isFalse = false;

console.log(boolToString(isTrue));
console.log(boolToString(isFalse));