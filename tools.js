var SleeperTools = (function () {
	var tools = {},
		privateVariable = 1;

	function privateMethod() {
		// ...
	}

	tools.moduleProperty = 1;
	tools.moduleMethod = function () {
		// ...
	};

	return tools;
}());
