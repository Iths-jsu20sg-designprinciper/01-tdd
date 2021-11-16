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

	if( Boolean(undefined) )
	if( Boolean(null) )
	if( false )
/*
	Boolean('Hejsan') -> true
	Boolean('         ') -> true
	Boolean('false') -> true
	Boolean('') -> false

	Boolean(0) -> false
	Boolean(3.14) -> true
	Boolean(NaN) -> false

	Number('123') -> 123
	Number('five') -> NaN

	let products = getProducts()
	Är products null eller ett objekt?
	if( products )  <- kolla om variabeln har ett värde


	Floting point: flyttal, tal med decimaler
	(svenska tal: decimalkomma ex. 3,14)
	(engelska tal: decimalpunkt dvs. "point" ex. 3.14)
	Alla JavaScript-tal är flyttal
*/
})

