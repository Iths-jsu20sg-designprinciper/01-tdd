require('jest')
const { fahrenheitToCelsius } = require('./temperature.js')

describe('temperature', () => {

	it('throws an error if parameter is not a number', () => {
		// Arrange
		const testData = 'not degrees'
		
		// Act
		// Assert
		expect( () => fahrenheitToCelsius(testData) ).toThrow()
	})

	it('throws an error if parameter below absolute zero', () => {
		const absZero = -459.67  // test data
		
		expect( () => fahrenheitToCelsius(absZero - 0.1) ).toThrow()
	})

	it('return 0 for 32 degrees Fahrenheit', () => {
		const testData = 32
		const expected = 0

		const actual = fahrenheitToCelsius(testData)

		expect(actual).toBe(expected)
	})
	// 32 F ska vara 0 C
})

