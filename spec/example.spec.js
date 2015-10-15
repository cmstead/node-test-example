// You need to require the module you are going to test.
var example = require('../src/example.js');

// Describe blocks define test suites
describe('example module', function () {
	
	var exampleInstance;
	
	// This executes before every test
	beforeEach(function () {
		exampleInstance = example.build();
	});
	
	// This executes after every test
	afterEach(function () {
		exampleInstance = null;
	});
	
	// Describe blocks can nest
	describe('hello', function () {
		
		// it blocks define tests
		it('should return "Hello, world!"', function () {
			
			// Expectations resolve to pass and fail much like assertions
			expect(exampleInstance.hello()).toBe('Hello, world!');
			
		});
		
	});
	
});