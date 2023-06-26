var SleeperTools = (function () {
	var tools = {};
	var privateVariable = 1;

	function privateMethod() {
		// ...
	}

	// Sleeper League IDs
	tools.A_LEAGUE_SLEEPER_ID = "968583157932937216";
	tools.B_LEAGUE_SLEEPER_ID = "866171664994541568";

	tools.getUsers = async function (leagueId) {
		console.log(leagueId);
		fetch("https://api.sleeper.app/v1/league/" + leagueId)
                .then((res) => res.json());
	};

	return tools;
}());
