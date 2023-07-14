SleeperTools = (function () {
	var tools = {};
	var privateVariable = 1;

	function getLeagueRestAPI(leagueId) {
		return "https://api.sleeper.app/v1/league/" + leagueId;
	}

	// ************** MOST CURRENT Sleeper League IDs ***********************
	tools.A_LEAGUE_SLEEPER_ID = "968583157932937216";
	tools.B_LEAGUE_SLEEPER_ID = "866171664994541568";

	tools.A_LEAGUE_SLEEPER_ID_2022_SEASON = "865477710976286720"; // using for user generation atm
	tools.B_LEAGUE_SLEEPER_ID_2022_SEASON = "866171664994541568"; // record correction for PaPa T in 2022

	/*
	Example objects that are created for matchup history.

	var userRecord = {
		legacyUserId: "",
		sleeperUserId: "",
		records: [], // Array of fantasyRecord objects
	}

	var fantasyRecord = {
		year: "2012",
		wins: "10",
		losses: "4",
		ties: "0",
		isLegacy: "true"
	}
	*/

	// Sleeper ID -> Object
	var userReals = {
		"471702444481441792": {
			name: "Jer",
			legacyId: "userId-90093",
			currentLeague: "Championship League"
		},
		"867462835893080064": {
			name: "Nate",
			legacyId: "userId-27062481",
			currentLeague: "Championship League"
		},
		"867562511770255360": {
			name: "Caolan",
			legacyId: "userId-95527",
			currentLeague: "Championship League"
		},
		"867601213447897088": {
			name: "Dalley",
			legacyId: "userId-91161",
			currentLeague: "Championship League"
		},
		"869618771407556608": {
			name: "Rimon",
			legacyId: "userId-91908",
			currentLeague: "Championship League"
		},
		"441653692567908352": {
			name: "Omar",
			legacyId: "userId-5318397",
			currentLeague: "B League"
		},
		"471826036959473664": {
			name: "Ricky",
			legacyId: "userId-27845667",
			currentLeague: "Championship League"
		},
		"731243643578490880": {
			name: "Alex",
			legacyId: "userId-19416897",
			currentLeague: "B League"
		},
		"865480383385448448": {
			name: "Picco",
			legacyId: "userId-28536059",
			currentLeague: "B League"
		},
		"865596427626201088": {
			name: "Jordan S.",
			legacyId: "userId-130280",
			currentLeague: "B League"
		},
		"866400340310917120": {
			name: "Eric",
			legacyId: "userId-144377",
			currentLeague: "Championship League"
		},
		"867272838229454848": {
			name: "Tom",
			legacyId: "userId-14712314",
			currentLeague: "B League"
		},
		"867294931482505216": {
			name: "Ryan",
			legacyId: "userId-25196559",
			currentLeague: "B League"
		},
		"867433255367008256": {
			name: "Jordan I.",
			legacyId: "userId-13060178",
			currentLeague: "B League"
		},
		"867479730138583040": {
			name: "Liam",
			legacyId: "userId-25169661",
			currentLeague: "B League"
		},
		"867489506998267904": {
			name: "Mike",
			legacyId: "userId-7530198",
			currentLeague: "Championship League"
		},
		"867531909708840960": {
			name: "Zack",
			legacyId: "userId-5280198",
			currentLeague: "Championship League"
		},
		"867587986001403904": {
			name: "Scott",
			legacyId: "userId-5339416",
			currentLeague: "Championship League"
		},
		"867593986880229376": {
			name: "Jake",
			legacyId: "userId-90171",
			currentLeague: "Championship League"
		},
		"867598805816795136": {
			name: "Tikl",
			legacyId: "userId-7830798",
			currentLeague: "Championship League"
		},
		"867970353417363456": {
			name: "Marty",
			legacyId: "userId-962198",
			currentLeague: "Championship League"
		},
		"867598396356259840": {
			name: "Ty",
			legacyId: "userId-14721116",
			currentLeague: "B League"
		},
		"868693802389540864": {
			name: "Papa T",
			legacyId: "userId-90093",
			currentLeague: "Championship League"
		},
		"868705613276925952": {
			name: "Dan",
			legacyId: "userId-7401235",
			currentLeague: "B League"
		}
	}

	var papaT_SleeperID = "868693802389540864";
	var jer_NflID = "userId-90093";
	var jer_SleeperID = "471702444481441792";

	// Generate a basic html table from provided jsonData. Parent will be set to "container"
	tools.generateTable = function (container, jsonData) {
		// Create the table element
		let table = document.createElement("table");
         
		// Get the keys (column names) of the first object in the JSON data
		let cols = Object.keys(jsonData[0]);
		
		// Create the header element
		let thead = document.createElement("thead");
		let tr = document.createElement("tr");
		
		// Loop through the column names and create header cells
		cols.forEach((item) => {
		   let th = document.createElement("th");
		   th.innerText = item; // Set the column name as the text of the header cell
		   tr.appendChild(th); // Append the header cell to the header row
		});
		thead.appendChild(tr); // Append the header row to the header
		table.append(tr) // Append the header to the table
		
		// Loop through the JSON data and create table rows
		jsonData.forEach((item) => {
		   let tr = document.createElement("tr");
		   
		   // Get the values of the current object in the JSON data
		   let vals = Object.values(item);
		   
		   // Loop through the values and create table cells
		   vals.forEach((elem) => {
			  let td = document.createElement("td");
			  td.innerHTML = elem; // Set the value as the text of the table cell
			  tr.appendChild(td); // Append the table cell to the table row
		   });
		   table.appendChild(tr); // Append the table row to the table
		});

		//container.innerHTML = "";
		container.appendChild(table) // Append the table to the container element
	};

	// Get a list of users from sleeper leagueId
	tools.getUsers = async function (leagueId) {
		const response = await fetch(getLeagueRestAPI(leagueId) + "/users")
                .then((res) => res.json());

		let jsonData = [];

		response.forEach((item) => {
            // Get the values of the current object in the JSON data
			jsonData.push({
				"Username": item.display_name,
				"User ID": item.user_id
			});
         });

		return jsonData;
	};

	// List of latest sleeper league and all previous sleeper league ids.
	async function getSleeperLeagueIdsAndAllPreviousLeagueIds(){
		var allSleeperLeagueIds = [];

		prevLeagueId = tools.A_LEAGUE_SLEEPER_ID;
		var e = 0;
		while(prevLeagueId != null && e < 50){
			allSleeperLeagueIds.push(prevLeagueId);
			const league = await fetch(getLeagueRestAPI(prevLeagueId)).then((res) => res.json());
			prevLeagueId = league.previous_league_id;
			e++;
		}

		prevLeagueId = tools.B_LEAGUE_SLEEPER_ID;
		e = 0;
		while(prevLeagueId != null && e < 50){
			allSleeperLeagueIds.push(prevLeagueId);
			const league = await fetch(getLeagueRestAPI(prevLeagueId)).then((res) => res.json());
			prevLeagueId = league.previous_league_id;
			e++;
		}

		return allSleeperLeagueIds;
	}

	// local function, prevents duplicates when retrieving all sleeper users in leagues.
	function userJsonContains(a, obj) {
		var i = a.length;
		while (i--) {
		   if (a[i].user_id === obj.user_id) {
			   return true;
		   }
		}
		return false;
	}

	async function getUsers_Unique(){
		const response = await fetch(getLeagueRestAPI(tools.A_LEAGUE_SLEEPER_ID) + "/users")
                .then((res) => res.json());

		const response2 = await fetch(getLeagueRestAPI(tools.A_LEAGUE_SLEEPER_ID_2022_SEASON) + "/users")
		.then((res) => res.json());

		const response3 = await fetch(getLeagueRestAPI(tools.B_LEAGUE_SLEEPER_ID) + "/users")
		.then((res) => res.json());
		
		response2.forEach((item) => {
			if (!userJsonContains(response, item)){
				response.push(item);
			}
        });
		response3.forEach((item) => {
            if (!userJsonContains(response, item)){
				response.push(item);
			}
        });

		return response;
	}

	// Get unique list of all users in both sleeper leagues.
	tools.getAllUsers = async function () {
		const users = await getUsers_Unique();

		let jsonData = [];
		users.forEach((item) => {
            // Get the values of the current object in the JSON data
			jsonData.push({
				"": "<figure class=\"wp-block-image size-large\"><img src=\"https://sleepercdn.com/avatars/thumbs/" + item.avatar + "\"></img></figure>",
				"Sleeper Name": item.display_name,
				"Manager": userReals[item.user_id].name,
				"League": userReals[item.user_id].currentLeague
			});
         });

		 jsonData.sort((a,b) => a.Manager.localeCompare(b.Manager)); // b - a for reverse sort

		return jsonData;
	};

	// Get unique list of all users in both sleeper leagues.
	tools.getAllUsersForMatchup = async function () {
		const users = await getUsers_Unique();

		let jsonData = [];
		users.forEach((item) => {
			var sleeperId = item.user_id;
            // Get the values of the current object in the JSON data
			jsonData.push({
				SleeperUserId: sleeperId,
				Manager: userReals[sleeperId].name
			});
         });

		 jsonData.sort((a,b) => a.Manager.localeCompare(b.Manager)); // b - a for reverse sort

		return jsonData;
	};

	// Get unique list of all users in both sleeper leagues.
	// timespan can be "all", "sleeperOnly", "legacyOnly"
	tools.getAllTimeRecordData = async function (sleeperId) {
		
		var legacyRecords = await getAllTimeRecordsLegacy(sleeperId); // array
		var sleeperRecords = await getAllTimeRecordsSleeper(sleeperId);
				
		var records = [];
		legacyRecords.forEach(record => { records.push(record);});
		sleeperRecords.forEach(record => { records.push(record);});

		return records;
	};

	// Get unique list of all users in both sleeper leagues.
	// timespan can be "all", "sleeperOnly", "legacyOnly"
	tools.getMatchupData = async function (sleeperId1, sleeperId2) {
		
		var legacyRecords = await getMatchupsLegacy(sleeperId1, sleeperId2); // array
		var sleeperRecords = await getMatchupsSleeper(sleeperId1, sleeperId2);
				
		var records = [];
		legacyRecords.forEach(record => { records.push(record);});
		sleeperRecords.forEach(record => { records.push(record);});

		return records;
	};

	function getGameType(year, week, lastWeeksOutcome, isPostElim){
		var y = parseInt(year);
		var w = parseInt(week);

		if (isPostElim) return "PlayoffPostElimination";

		//console.log(year + " " + week + " " + lastWeeksOutcome + " " + isPostElim);

		// Spaghetti monster...
		if (y >= 2021) { // Playoffs are weeks 15-17
			if (w >= 15){ // is playoffs
				if (w >= 16 && lastWeeksOutcome == "loss"){
					return "PlayoffPostElimination";
				} 
				return "Playoff"
			}
		} else { // Playoffs are weeks 14-16
			if (w >= 14){ // is playoffs
				if (w >= 15 && lastWeeksOutcome == "loss"){
					return "PlayoffPostElimination";
				} 
				return "Playoff"
			}
		}

		// If not playoffs, regular.
		return "Regular";
	}

	// SLEEPER Records.
	async function getMatchupsSleeper(sleeperId1, sleeperId2) {
		// GOING FORWARD: If any leagues end up as a "previous" league need to add their new IDs.
		// Could modify this so that only the newest leagueIds are included, and it recursively finds all prev leagues. Dont know how sleeper does this.
		var allLeagues = await getSleeperLeagueIdsAndAllPreviousLeagueIds();

		var records = [];

		var isPaPaT_Rule = sleeperId1 == papaT_SleeperID || sleeperId2 == papaT_SleeperID; // If you played him in legacy, pull using jers NFL ID
		var isJer_Rule = sleeperId1 == jer_SleeperID || sleeperId2 == jer_SleeperID;
		if (isPaPaT_Rule && isJer_Rule) return records;

		// If you played Jers ID in sleeper in B League 2022 - you actually played Papa T. If in , search using jers sleeperId since his account controlled the team

		for (var leagueId of allLeagues){
			const leagueRosterData = await fetch(getLeagueRestAPI(leagueId) + "/rosters")
                .then((res) => res.json());
			const leagueData = await fetch(getLeagueRestAPI(leagueId))
                .then((res) => res.json());

			var temporarySleeperID1 = sleeperId1;
			var temporarySleeperID2 = sleeperId2;

			// If PaPa t is in the dropdown and its the 2022 B league season
			if (leagueId == tools.B_LEAGUE_SLEEPER_ID_2022_SEASON) { 
				
				//use jers sleeperid for records.
				if (sleeperId1 == papaT_SleeperID){
					temporarySleeperID1 = jer_SleeperID;
					
				} else if (sleeperId2 == papaT_SleeperID){
					temporarySleeperID2 = jer_SleeperID;
					
				}

				if (sleeperId1 == jer_SleeperID){
					temporarySleeperID1 = "";
				
				} else if (sleeperId2 == jer_SleeperID){
					temporarySleeperID2 = "";
					
				}
			}

			var roster1Id = -1, roster2Id = -1;
			leagueRosterData.forEach(roster => {
				if (roster.owner_id == temporarySleeperID1){
					roster1Id = roster.roster_id;
				}
				if (roster.owner_id == temporarySleeperID2){
					roster2Id = roster.roster_id;
				}
			});

			//console.log("Jake " + roster1Id + " rimon " + roster2Id);

			if (roster1Id != -1 && roster2Id != -1){
				for (let week = 1; week <= 17; week++){
					const matchups = await fetch(getLeagueRestAPI(leagueId) + "/matchups/" + week).then((res) => res.json());

					var user1score = -1, user2score = -1, outcome = "", year = "", matchupId1 = -1, matchupId2 = -2
					matchups.forEach(matchup => {
						if (matchup.roster_id == roster1Id){
							user1score = parseFloat(matchup.points);
							matchupId1 = matchup.matchup_id;
						} 
						if (matchup.roster_id == roster2Id){
							user2score = parseFloat(matchup.points);
							matchupId2 = matchup.matchup_id;
						} 
					});
					//console.log("week " + week + " Jake " + matchupId1 + " rimon " + matchupId2);

					// Only record result if they matched eachother that week.
					if (matchupId1 == matchupId2 && !(user1score <= 0 && user2score <= 0)){
						outcome = outcomeLabelFromScore(user1score, user2score);
						year = leagueData.season;

						records.push({
							owner_score: ""+user1score,
							opponent_score: ""+user2score,
							outcome: ""+outcome,
							week: "" + week, // convert to str
							year: ""+year,
							type: "Sleeper",
							game_type: "none"
						});
					}
				}
				
			} else {
				console.warn("failed getMatchupsSleeper check condition (roster1Id != -1 && roster2Id != -1). One or more rosterIds could not be found.");
			}
		}

		return records;
	}

	// SLEEPER Records.
	async function getAllTimeRecordsSleeper(sleeperId) {
		var allLeagues = await getSleeperLeagueIdsAndAllPreviousLeagueIds();

		var records = [];

		var isPaPaT_Rule = sleeperId == papaT_SleeperID; // If you played him in legacy, pull using jers NFL ID
		var isJer_Rule = sleeperId == jer_SleeperID;

		// If you played Jers ID in sleeper in B League 2022 - you actually played Papa T. If in , search using jers sleeperId since his account controlled the team

		for (var leagueId of allLeagues){
			const leagueRosterData = await fetch(getLeagueRestAPI(leagueId) + "/rosters")
                .then((res) => res.json());
			const leagueData = await fetch(getLeagueRestAPI(leagueId))
                .then((res) => res.json());

			var temporarySleeperID = sleeperId;

			// If its the 2022 B league season
			if (leagueId == tools.B_LEAGUE_SLEEPER_ID_2022_SEASON) { 
				//use jers sleeperid for records.
				if (isPaPaT_Rule){
					temporarySleeperID = jer_SleeperID;
				}
				if (isJer_Rule){
					temporarySleeperID = "";
				}
			}

			var rosterId = -1
			leagueRosterData.forEach(roster => {
				if (roster.owner_id == temporarySleeperID){
					rosterId = roster.roster_id;
				}
			});

			//console.log("Jake " + roster1Id + " rimon " + roster2Id);

			var lastPlayoffResult = "";
			var isPlayoffsPostElim = false;

			if (rosterId != -1){
				for (let week = 1; week <= 17; week++){
					const matchups = await fetch(getLeagueRestAPI(leagueId) + "/matchups/" + week).then((res) => res.json());

					var user1score = -1, user2score = -1, outcome = "", year = "", matchupId1 = -1
					matchups.forEach(matchup => {
						if (matchup.roster_id == rosterId){
							user1score = parseFloat(matchup.points);
							matchupId1 = matchup.matchup_id;
						} 
					});
					matchups.forEach(matchup => {
						if (matchup.matchup_id == matchupId1 && matchup.roster_id != rosterId){
							user2score = parseFloat(matchup.points);
						} 
					});
					//console.log("week " + week + " Jake " + matchupId1 + " rimon " + matchupId2);

					// Only record result if they matched eachother that week.
					
					if (!(user1score <= 0 && user2score <= 0)){
						outcome = outcomeLabelFromScore(user1score, user2score);
						year = leagueData.season;

						var gametype = getGameType(year, week, lastPlayoffResult, isPlayoffsPostElim);
						if (gametype == "PlayoffPostElimination") isPlayoffsPostElim = true;
						lastPlayoffResult = outcome;

						records.push({
							owner_score: ""+user1score,
							opponent_score: ""+user2score,
							outcome: ""+outcome,
							week: "" + week, // convert to str
							year: ""+year,
							type: "Sleeper",
							// Regular, Playoff, PlayoffPostElimination
							game_type: gametype
						});
					}
				}
				
			} else {
				console.warn("failed getMatchupsSleeper check condition (roster1Id != -1 && roster2Id != -1). One or more rosterIds could not be found.");
			}
		}

		return records;
	}

	// NFL.COM Records.
	async function getMatchupsLegacy(sleeperId1, sleeperId2) {
		var legacyId1 = userReals[sleeperId1].legacyId;
		var legacyId2 = userReals[sleeperId2].legacyId;

		const aLeagueLegacy = await tools.getLegacyChampLeagueData(); // JSON
		const bLeagueLegacy = await tools.getLegacyOtherLeagueData(); // JSON

		var seasonsA = aLeagueLegacy["seasons"];
		var bLeagueSeason = bLeagueLegacy["seasons"]["2021"];

		//console.log(seasonsA);
		//console.log(bLeagueSeason);

		var records = [];

		var isPaPaT_Rule = sleeperId1 == papaT_SleeperID || sleeperId2 == papaT_SleeperID; // only existed in B league
		var isJer_Rule = sleeperId1 == jer_SleeperID || sleeperId2 == jer_SleeperID; // Only existed in A league
		if (isPaPaT_Rule && isJer_Rule) return records;

		for (var year in seasonsA) {
			var season = seasonsA[year];
			var teams = season.teams;
			var user1Id = -1, user2Id = -1;

			// find the teamIds for this season (int)
			for (var teamId in teams) {
				if (teams[teamId].owner == legacyId1){
					user1Id = teamId;
				}
				if (teams[teamId].owner == legacyId2){
					user2Id = teamId;
				}
			}

			if (user1Id != -1 && user2Id != -1){
				var user1games = teams[user1Id].games;

				for (var gameId in user1games) {
					if (user1games[gameId].opponent_id == user2Id){
						// Add record against this user.
						var score = parseFloat(user1games[gameId].score);
						var opScore = parseFloat(user1games[gameId].opponent_score);
						var outcome = outcomeLabelFromScore(score, opScore);

						if (!isPaPaT_Rule && !(score <= 0 && opScore <= 0)){
							records.push({
								owner_score: ""+score,
								opponent_score: ""+opScore,
								outcome: ""+outcome,
								week: ""+user1games[gameId].week,
								year: ""+year,
								type: "NFL.com",
								game_type: "none"
							});
						}
					}
				}
			} else {
				console.warn("failed getMatchupsLegacy check condition (user1Id != -1 && user2Id != -1). One or more userIds could not be found.");
			}
		}

		// B League data
		var season = bLeagueSeason;
		var teams = season.teams;
		var user1Id = -1, user2Id = -1;

			// find the teamIds for this season (int)
			for (var teamId in teams) {
				if (teams[teamId].owner == legacyId1){
					user1Id = teamId;
				}
				if (teams[teamId].owner == legacyId2){
					user2Id = teamId;
				}
			}

			if (user1Id != -1 && user2Id != -1){
				var user1games = teams[user1Id].games;
				
				for (var gameId in user1games) {
					if (user1games[gameId].opponent_id == user2Id){
						// Add record against this user.
						var score = parseFloat(user1games[gameId].score);
						var opScore = parseFloat(user1games[gameId].opponent_score);
						var outcome = outcomeLabelFromScore(score, opScore);

						if (!isJer_Rule && !(score <= 0 && opScore <= 0)){
							records.push({
								owner_score: ""+score,
								opponent_score: ""+opScore,
								outcome: ""+outcome,
								week: ""+user1games[gameId].week,
								year: "2021",
								type: "NFL.com",
								game_type: "none"
							});
						}
					}
				}
			} else {
				console.warn("failed getMatchupsLegacy check condition (user1Id != -1 && user2Id != -1). One or more userIds could not be found.");
			}

		return records;
	}

	async function getAllTimeRecordsLegacy(sleeperId) {
		var legacyId = userReals[sleeperId].legacyId;

		const aLeagueLegacy = await tools.getLegacyChampLeagueData(); // JSON
		const bLeagueLegacy = await tools.getLegacyOtherLeagueData(); // JSON

		var seasonsA = aLeagueLegacy["seasons"];
		var bLeagueSeason = bLeagueLegacy["seasons"]["2021"];

		//console.log(seasonsA);
		//console.log(bLeagueSeason);

		var records = [];

		var isPaPaT_Rule = sleeperId == papaT_SleeperID; // only existed in B league
		var isJer_Rule = sleeperId == jer_SleeperID; // Only existed in A league

		for (var year in seasonsA) {
			var season = seasonsA[year];
			var teams = season.teams;
			var user1Id = -1;

			// find the teamIds for this season (int)
			for (var teamId in teams) {
				if (teams[teamId].owner == legacyId){
					user1Id = teamId;
				}
			}

			if (user1Id != -1){
				var user1games = teams[user1Id].games;

				var lastPlayoffResult = "";
				var isPlayoffsPostElim = false;

				for (var gameId in user1games) {
						// Add record against this user.
						var score = parseFloat(user1games[gameId].score);
						var opScore = parseFloat(user1games[gameId].opponent_score);
						var outcome = outcomeLabelFromScore(score, opScore);

						var gametype = getGameType(year, user1games[gameId].week, lastPlayoffResult, isPlayoffsPostElim);
						if (gametype == "PlayoffPostElimination") isPlayoffsPostElim = true;
						lastPlayoffResult = outcome;

						if (!isPaPaT_Rule && !(score <= 0 && opScore <= 0)){
							records.push({
								owner_score: ""+score,
								opponent_score: ""+opScore,
								outcome: ""+outcome,
								week: ""+user1games[gameId].week,
								year: ""+year,
								type: "NFL.com",
								game_type: gametype
							});
						}
					
				}
			} else {
				console.warn("failed getMatchupsLegacy check condition (user1Id != -1 && user2Id != -1). One or more userIds could not be found.");
			}
		}

		// B League data
		var season = bLeagueSeason;
		var teams = season.teams;
		var user1Id = -1;

			// find the teamIds for this season (int)
			for (var teamId in teams) {
				if (teams[teamId].owner == legacyId){
					user1Id = teamId;
				}
			}

			if (user1Id != -1){
				var user1games = teams[user1Id].games;

				var lastPlayoffResult = "";
				var isPlayoffsPostElim = false;

				for (var gameId in user1games) {
						// Add record against this user.
						var score = parseFloat(user1games[gameId].score);
						var opScore = parseFloat(user1games[gameId].opponent_score);
						var outcome = outcomeLabelFromScore(score, opScore);

						var gametype = getGameType("2021", user1games[gameId].week, lastPlayoffResult, isPlayoffsPostElim);
						if (gametype == "PlayoffPostElimination") isPlayoffsPostElim = true;
						lastPlayoffResult = outcome;

						if (!isJer_Rule && !(score <= 0 && opScore <= 0)){
							records.push({
								owner_score: ""+score,
								opponent_score: ""+opScore,
								outcome: ""+outcome,
								week: ""+user1games[gameId].week,
								year: "2021",
								type: "NFL.com",
								game_type: gametype
							});
						}
					
				}
			} else {
				console.warn("failed getMatchupsLegacy check condition (user1Id != -1 && user2Id != -1). One or more userIds could not be found.");
			}

		return records;
	}

	function outcomeLabelFromScore(score, opponentScore){
		if (score == opponentScore){
			return "tie";
		}
		return score > opponentScore ? "win" : "loss";
	}

	// Get all sleeper league metadata from sleeper league id.
	tools.getLeague = async function (leagueId) {
		const response = await fetch(getLeagueRestAPI(leagueId))
                .then((res) => res.json());

		let jsonData = [];
	
		jsonData.push({
				"Season": response.season,
				"Name": response.name
         });

		return jsonData;
	};
	
	// Loads legacy NFL.com json data for the A League from the bluehost server
	tools.getLegacyChampLeagueData = async function () {
		return await fetch("https://b3fl.com/wp-content/uploads/A_League_History.json", {
			method: 'GET',
			mode: 'no-cors',
			headers: {
			'Content-Type': 'application/json'
			}})
		  .then(response => response.json());
	}; 

	// Loads legacy NFL.com json data for the B League from the bluehost server
	tools.getLegacyOtherLeagueData = async function () {
		return await fetch("https://b3fl.com/wp-content/uploads/B_League_History.json", {
			method: 'GET',
			mode: 'no-cors',
			headers: {
			'Content-Type': 'application/json'
			}})
		  .then(response => response.json());
	}; 
	
	console.log("SleeperTools Initialized. API Ready.");
	
	return tools;
}());
