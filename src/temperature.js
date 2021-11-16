
function fahrenheitToCelsius(degrees) {
	const absZero = -459.67
	if( (typeof degrees) !== 'number' || degrees < absZero ) {
		throw new Error('Invalid degree')
	}
	return (degrees - 32) / 1.8
	// C = (F - 32) / 1.8
}

module.exports = { fahrenheitToCelsius }
