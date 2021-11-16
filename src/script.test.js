require('jest')
const { convertMilesToKm } = require('./script.js')

describe('script', () => {

	it('returns 0 for distance 0', () => {
		// Arrange
		const testData = 0 // distance in miles
		const expected = 0 // expected result in km

		// Act
		let actual = convertMilesToKm(testData)

		// Assert
		expect(actual).toBe(expected)
	})

	it('returns correct distance for 5 miles', () => {
		const distance = 5  // miles
		const expected = 5 * 1.609 // km

		let actual = convertMilesToKm(distance)

		expect(actual).toBe(expected)
	})
	it('returns correct distance for 27 miles', () => {
		const distance = 27  // miles
		const expected = 27 * 1.609 // km

		let actual = convertMilesToKm(distance)

		expect(actual).toBe(expected)
	})

	it('throws an error if distance is negative', () => {
		const invalidDistance = -3.14

		expect( () => convertMilesToKm(invalidDistance) ).toThrow()
		
	})
	it('throws an error if distance is not a number', () => {
		const invalidDistance = 'Pelle'

		expect( () => convertMilesToKm(invalidDistance) ).toThrow()
	})


})

/*
it should throw an error if distance has an invalid value
// 0 miles == 0 km
// 1 mile == 1.609 km
// 5 miles == 8.047 km

*/