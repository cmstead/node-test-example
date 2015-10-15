// Strict mode is the preferred JS interpreter mode for new development
'use strict';

// Object literals are one of several ways to collect data together
var exampleObj = {
	
	// Functions are data in Javascript
	hello: function () {
		return 'Hello, world!';
	}
	
};

// Module.exports is the way node exposes behaviors and data to the outside world.
// Everything not defined here is captured within the scope of this file.
module.exports = {
	build: function () {
		// Object.create will create a copy of the original object
		// keeping the original data unmolested
		return Object.create(exampleObj);
	}
};