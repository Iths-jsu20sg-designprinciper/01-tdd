
function convertMilesToKm(distanceMiles) {
	if( (typeof distanceMiles) !== 'number' ) {
		throw new Error('Distance must be a number.')
	}
	else if( distanceMiles < 0 ) {
		throw new Error('Distance must be a positive number.')
	}
	// 1 mile === 1.609 km
	return distanceMiles * 1.609;
}

module.exports = { convertMilesToKm }
