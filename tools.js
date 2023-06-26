var SleeperTools = (function () {
	var tools = {};
	var privateVariable = 1;

	function getLeagueRestAPI(leagueId) {
		return "https://api.sleeper.app/v1/league/" + leagueId;
	}

	// Sleeper League IDs
	tools.A_LEAGUE_SLEEPER_ID = "968583157932937216";
	tools.B_LEAGUE_SLEEPER_ID = "866171664994541568";

	tools.getUsers = async function (leagueId) {
		const response = await fetch(getLeagueRestAPI(leagueId) + "/users")
                .then((res) => res.json());

		let jsonData = [];

		response.forEach((item) => {
            // Get the values of the current object in the JSON data
			jsonData.push({
				"Username": item.username,
				"User ID": item.user_id
			});
         });

		return jsonData;
	};

	return tools;
}());
