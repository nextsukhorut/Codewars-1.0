function cockroachSpeed(speedKmPerHr) {
	// We need to convert kilometers to centimeters and hours to seconds.
	// Since there are 100,000 centimeters in a kilometer and 3,600 seconds in an hour,
	// we multiply the speed by 100,000 and then divide by 3,600.
	const speedCmPerSec = speedKmPerHr * 100000 / 3600;

	// The Math.floor() function is like telling the recipe to give us only whole centimeters
	// by removing any fraction of a centimeter.
	return Math.floor(speedCmPerSec);
}

// Here's how we use our recipe:
const speedInCmPerSec = cockroachSpeed(1.08);
console.log(speedInCmPerSec); // This will show "30" as the answer.
/*
  Now, let me explain what each part of this recipe does for someone who is not familiar with programming:

	function cockroachSpeed(speedKmPerHr): This is like naming the recipe. It's the name we give to the set of instructions we're going to follow.
	const speedCmPerSec = speedKmPerHr * 100000 / 3600: These are the steps of the recipe. We take the speed the cockroach is moving at (in km/h), convert it to cm/s by multiplying by the number of centimeters in a kilometer, and then adjusting for the number of seconds in an hour.
	return Math.floor(speedCmPerSec): This is like serving the dish. We're making sure that what we serve (the final speed) is a whole number, so we're rounding down in case we have any fractions of a centimeter.
	const speedInCmPerSec = cockroachSpeed(1.08): This is like using the recipe to make a specific dish for a friend who tells us the cockroach is going at 1.08 km/h, and we want to tell them how fast that is in cm/s.
	console.log(speedInCmPerSec): This is like telling everyone in the room what the result is, which will be "30" for this specific case.

That's how we use this JavaScript function to convert the cockroach's speed and tell you the result in a way everyone can understand.
*/