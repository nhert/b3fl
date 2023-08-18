SleeperTools = (function () {
	var tools = {};
	var privateVariable = 1;

	function getLeagueRestAPI(leagueId) {
		return "https://api.sleeper.app/v1/league/" + leagueId;
	}

	// ************** MOST CURRENT Sleeper League IDs ***********************
	tools.A_LEAGUE_SLEEPER_ID = "968583157932937216";
	tools.B_LEAGUE_SLEEPER_ID = "992194800943939584";

	tools.A_LEAGUE_SLEEPER_ID_2022_SEASON = "865477710976286720"; // using for user generation atm
	tools.B_LEAGUE_SLEEPER_ID_2022_SEASON = "866171664994541568"; // record correction for PaPa T in 2022

	tools.constants = {
		// Display name for leagues
		A_LEAGUE_NAME: "A League",
		B_LEAGUE_NAME: "B League",

		// Record correction constants for 2021/2022 since papa t shared team with jer
		PAPA_T_SLEEPER_ID_RECORD_CORRECTION: "868693802389540864",
		JER_SLEEPER_ID_RECORD_CORRECTION: "471702444481441792",
		
		// Game type
		GAME_TYPE_REGULAR: "Regular",
		GAME_TYPE_PLAYOFF: "Playoff",
		GAME_TYPE_ELIMINATED: "PlayoffPostElimination",

		// Outcomes
		OUTCOME_TYPE_WIN: "win",
		OUTCOME_TYPE_LOSS: "loss",
		OUTCOME_TYPE_TIE: "tie",
		OUTCOME_TYPE_NO_CONTEST: "noContest",
	}

	// Sleeper ID -> Object
	// For use internally on tools.js
	var userReals = {
		"471702444481441792": {
			name: "Jer",
			legacyId: "userId-90093",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"867462835893080064": {
			name: "Nate",
			legacyId: "userId-27062481",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"867562511770255360": {
			name: "Caolan",
			legacyId: "userId-95527",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"867601213447897088": {
			name: "Dalley",
			legacyId: "userId-91161",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"869618771407556608": {
			name: "Rimon",
			legacyId: "userId-91908",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"441653692567908352": {
			name: "Omar",
			legacyId: "userId-5318397",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		"471826036959473664": {
			name: "Ricky",
			legacyId: "userId-27845667",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"731243643578490880": {
			name: "Alex",
			legacyId: "userId-19416897",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		"865480383385448448": {
			name: "Picco",
			legacyId: "userId-28536059",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		"865596427626201088": {
			name: "Jordan S.",
			legacyId: "userId-130280",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		"866400340310917120": {
			name: "Eric",
			legacyId: "userId-144377",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"867272838229454848": {
			name: "Tom",
			legacyId: "userId-14712314",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		"867294931482505216": {
			name: "Ryan",
			legacyId: "userId-25196559",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		"867433255367008256": {
			name: "Jordan I.",
			legacyId: "userId-13060178",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		"867479730138583040": {
			name: "Liam",
			legacyId: "userId-25169661",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		"867489506998267904": {
			name: "Mike",
			legacyId: "userId-7530198",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"867531909708840960": {
			name: "Zack",
			legacyId: "userId-5280198",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"867587986001403904": {
			name: "Scott",
			legacyId: "userId-5339416",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"867593986880229376": {
			name: "Jake",
			legacyId: "userId-90171",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"867598805816795136": {
			name: "Tikl",
			legacyId: "userId-7830798",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"867970353417363456": {
			name: "Marty",
			legacyId: "userId-962198",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"867598396356259840": {
			name: "Ty",
			legacyId: "userId-14721116",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		"868693802389540864": {
			name: "Papa T",
			legacyId: "userId-90093",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		"868705613276925952": {
			name: "Dan",
			legacyId: "userId-7401235",
			currentLeague: tools.constants.B_LEAGUE_NAME
		}
	}

	var userReals2 = [
		{
			name: "Jer",
			sleeperId_current: "471702444481441792",
			sleeperIds_old: [],
			legacyId: "userId-90093",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Nate",
			sleeperId_current: "867462835893080064",
			sleeperIds_old: [],
			legacyId: "userId-27062481",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Caolan",
			sleeperId_current: "867562511770255360",
			sleeperIds_old: [],
			legacyId: "userId-95527",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Dalley",
			sleeperId_current: "867601213447897088",
			sleeperIds_old: [],
			legacyId: "userId-91161",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Rimon",
			sleeperId_current: "869618771407556608",
			sleeperIds_old: [],
			legacyId: "userId-91908",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Omar",
			sleeperId_current: "441653692567908352",
			sleeperIds_old: [],
			legacyId: "userId-5318397",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		{
			name: "Ricky",
			sleeperId_current: "471826036959473664",
			sleeperIds_old: [],
			legacyId: "userId-27845667",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Alex",
			sleeperId_current: "731243643578490880",
			sleeperIds_old: [],
			legacyId: "userId-19416897",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		{
			name: "Picco",
			sleeperId_current: "865480383385448448",
			sleeperIds_old: [],
			legacyId: "userId-28536059",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		{
			name: "Jordan S.",
			sleeperId_current: "865596427626201088",
			sleeperIds_old: [],
			legacyId: "userId-130280",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		{
			name: "Eric",
			sleeperId_current: "866400340310917120",
			sleeperIds_old: [],
			legacyId: "userId-144377",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Tom",
			sleeperId_current: "867272838229454848",
			sleeperIds_old: [],
			legacyId: "userId-14712314",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		{
			name: "Ryan",
			sleeperId_current: "867294931482505216",
			sleeperIds_old: [],
			legacyId: "userId-25196559",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		{
			name: "Jordan I.",
			sleeperId_current: "867433255367008256",
			sleeperIds_old: [],
			legacyId: "userId-13060178",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		{
			name: "Liam",
			sleeperId_current: "867479730138583040",
			sleeperIds_old: [],
			legacyId: "userId-25169661",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		{
			name: "Mike",
			sleeperId_current: "867489506998267904",
			sleeperIds_old: [],
			legacyId: "userId-7530198",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Zack",
			sleeperId_current: "867531909708840960",
			sleeperIds_old: [],
			legacyId: "userId-5280198",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Scott",
			sleeperId_current: "867587986001403904",
			sleeperIds_old: [],
			legacyId: "userId-5339416",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Jake",
			sleeperId_current: "867593986880229376",
			sleeperIds_old: [],
			legacyId: "userId-90171",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Tikl",
			sleeperId_current: "867598805816795136",
			sleeperIds_old: [],
			legacyId: "userId-7830798",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Marty",
			sleeperId_current: "867970353417363456",
			sleeperIds_old: [],
			legacyId: "userId-962198",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Ty",
			sleeperId_current: "867598396356259840",
			sleeperIds_old: [],
			legacyId: "userId-14721116",
			currentLeague: tools.constants.B_LEAGUE_NAME
		},
		{
			name: "Papa T",
			sleeperId_current: "868693802389540864",
			sleeperIds_old: [],
			legacyId: "userId-90093",
			currentLeague: tools.constants.A_LEAGUE_NAME
		},
		{
			name: "Dan",
			sleeperId_current: "868705613276925952",
			sleeperIds_old: [],
			legacyId: "userId-7401235",
			currentLeague: tools.constants.B_LEAGUE_NAME
		}
	]

	var dummyUser = {
		name: "User Not Found",
		sleeperId_current: "-",
		sleeperIds_old: [],
		legacyId: "-",
		currentLeague: "None"
	}

	function getUserMetaData(sleeperId) {
		if (!userReals[sleeperId]){
			return dummyUser;
		} else {
			return userReals[sleeperId];
		}
	}

	tools.doesUserExist = function (sleeperId) {
		return userReals[sleeperId] != null;
	}

	function getUserReal(sleeperId){
		for (let i = 0; i < userReals2.length; i++) {
			if (userReals2[i].sleeperId_current == sleeperId || userReals2[i].sleeperIds_old.includes(sleeperId)){
				return userReals2[i];
			}
		}
		return dummyUser;
	}

	tools.doesUserRealExist = function (sleeperId) {
		return getUserReal(sleeperId) != dummyUser;
	}

	// Generate a basic html table from provided jsonData. Parent will be set to "container"
	tools.generateTable = function (container, jsonData) {
		if (!jsonData[0]) return;

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

	tools.generateTableWithColumnWidth = function (container, jsonData, minColumnWidths) {
		if (!jsonData[0]) return;

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

		   minColIndex = 0;
		   // Loop through the values and create table cells
		   vals.forEach((elem) => {
				let td = document.createElement("td");

				let colWidth = minColumnWidths[minColIndex];
				if (colWidth){
					td.setAttribute("style", "min-width:" + colWidth + "px;");
				}
				minColIndex++;

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
			allSleeperLeagueIds.push({
				LeagueId: prevLeagueId,
				LeagueType: "A League"
			});
			const league = await fetch(getLeagueRestAPI(prevLeagueId)).then((res) => res.json());
			prevLeagueId = league.previous_league_id;
			e++;
		}

		prevLeagueId = tools.B_LEAGUE_SLEEPER_ID;
		e = 0;
		while(prevLeagueId != null && e < 50){
			allSleeperLeagueIds.push({
				LeagueId: prevLeagueId,
				LeagueType: "B League"
			});
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

	// Get unique list of all users in both sleeper leagues for the GM List page.
	tools.getGmList = async function () {
		const users = await getUsers_Unique();

		let jsonData = [];
		users.forEach((item) => {
			var atrURL = "<a href=\"b3fl.com/all-time-records/?user=" + item.user_id + "\">Record</a>";
			var profileUrl = "<a href=\"b3fl.com/gm-profiles/?user=" + item.user_id + "\">Stats</a>";

			var user = getUserMetaData(item.user_id);

            // Get the values of the current object in the JSON data 
			jsonData.push({
				"": "<img src=\"https://sleepercdn.com/avatars/" + item.avatar + "\" alt=\"Player Avatar\"></img>",
				"Sleeper Name": item.display_name,
				"Manager": user.name,
				"League": beautifyLeagueField(user.currentLeague),
				"All Time Record": atrURL,
				"Stats": profileUrl
			});
         });

		 jsonData.sort((a,b) => a.Manager.localeCompare(b.Manager)); // b - a for reverse sort

		return jsonData;
	};

	function beautifyLeagueField(league){
		return league == tools.constants.A_LEAGUE_NAME ? 
							"<span style=\"color: #ccac02;\"><b>" + league + "</b></span>" : 
							"<span>" + league + "</span>";
	}

	// Get unique list of all users in both sleeper leagues.
	tools.getAllUserIds = async function () {
		const users = await getUsers_Unique();

		let jsonData = [];
		users.forEach((item) => {
			var sleeperId = item.user_id;
			var user = getUserMetaData(sleeperId);

            // Get the values of the current object in the JSON data
			jsonData.push({
				SleeperUserId: sleeperId,
				Manager: user.name
			});
         });

		 jsonData.sort((a,b) => a.Manager.localeCompare(b.Manager)); // b - a for reverse sort

		return jsonData;
	};

	function groupAllRecordsByYear(allRecords){
		var groupedRecords = { }; //json

		allRecords.forEach(record => { 
			var year = record.year;
			if (!groupedRecords[year]){
				groupedRecords[year] = [];
			}
			groupedRecords[year].push(
				record
			);
		});

		return groupedRecords;
	}

	function calculateRecordForYear(yearRecord){
		var wins = 0, losses = 0, ties = 0;
		var year = 0;
		var playoffWins = 0, playoffLosses = 0;
		yearRecord.forEach(week => {
			if (week.game_type == tools.constants.GAME_TYPE_REGULAR){
				if (week.outcome == tools.constants.OUTCOME_TYPE_WIN){
					wins++;
				} else if (week.outcome == tools.constants.OUTCOME_TYPE_LOSS){
					losses++;
				} else if (week.outcome == tools.constants.OUTCOME_TYPE_TIE){
					ties++;
				}
			} else if (week.game_type == tools.constants.GAME_TYPE_PLAYOFF){
				if (week.outcome == tools.constants.OUTCOME_TYPE_WIN){
					playoffWins++;
				} else if (week.outcome == tools.constants.OUTCOME_TYPE_LOSS){
					playoffLosses++;
				}
				//TODO: playoff stats
			}
			year = week.year;
		});
		var game_count = wins + losses + ties;

		var record = {
			wins: wins,
			losses: losses,
			ties: ties,
			year: year,
			game_count: game_count,
			record_string: wins + " - " + losses + " - " + ties,
			win_percent: wins / game_count,
			title_win: playoffWins == 3
		};
		
		return record;
	}

	// Get unique list of all users in both sleeper leagues for the GM List page.
	tools.getGmProfile = async function (sleeperId) {
		var allRecords = await tools.getAllTimeRecordData(sleeperId); // array
		var allRecords_groupedByYear = groupAllRecordsByYear(allRecords);

		let jsonData = [];

		var niceScores = 0;
		var avgPtsFor = 0;
		var avgPtsAgainst = 0;
		var recordCount = 0;
		allRecords.forEach(record => { 
			var score = parseFloat(record.owner_score);
			if (score >= 69 && score < 70) {
				niceScores++;
			}
			avgPtsFor += parseFloat(record.owner_score);
			avgPtsAgainst += parseFloat(record.opponent_score);

			recordCount++;
		});

		avgPtsFor /= recordCount;
		avgPtsAgainst /= recordCount;

		var mostWins = 0;
		var mostWinsRecord = null;
		var mostLosses = 0; 
		var mostLossesRecord = null;
		var avgWinPct = 0;
		var yearsPlayed = 0;
		var titles = 0;
		for(var curYear in allRecords_groupedByYear) {
			curRecords = allRecords_groupedByYear[curYear]; // represents a single year in records.
			var record = calculateRecordForYear(curRecords);
			avgWinPct += record.win_percent;
			yearsPlayed++;

			if (record.wins > mostWins){
				mostWins = record.wins;
				mostWinsRecord = record;
			}
			if (record.losses > mostLosses){
				mostLosses = record.losses;
				mostLossesRecord = record;
			}
			if (record.title_win){
				titles++;
			}
		}
		avgWinPct /= yearsPlayed;

		let gmProfile = {
			titles: titles,
			seasonBest: mostWinsRecord.record_string + " (" + mostWinsRecord.year + ")",
			seasonWorst: mostLossesRecord.record_string + " (" + mostLossesRecord.year + ")",
			avgPtsFor: avgPtsFor.toFixed(2),
			avgPtsAgainst: avgPtsAgainst.toFixed(2),
			avgWinPercent: avgWinPct.toFixed(3),
			niceScores: niceScores,
			gamesPlayed: recordCount,
			yearsPlayed: yearsPlayed
		}
		jsonData.push(gmProfile);

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

	function getGameType(year, week, lastWeeksOutcome, thisWeeksOutcome, isPostElim, madeWinnersBracket){
		var y = parseInt(year);
		var w = parseInt(week);

		if (isPostElim) return tools.constants.GAME_TYPE_ELIMINATED;

		//console.log(year + " " + week + " " + lastWeeksOutcome + " " + isPostElim);

		// Spaghetti monster...
		if (y >= 2021) { // Playoffs are weeks 15-17
			if (w >= 15){ // is playoffs
				if (!madeWinnersBracket) return tools.constants.GAME_TYPE_ELIMINATED;

				if (w >= 16 && (lastWeeksOutcome == tools.constants.OUTCOME_TYPE_LOSS)){
					return tools.constants.GAME_TYPE_ELIMINATED;
				} 
				return tools.constants.GAME_TYPE_PLAYOFF
			}
		} else { // Playoffs are weeks 14-16
			if (w >= 14){ // is playoffs
				if (!madeWinnersBracket) return tools.constants.GAME_TYPE_ELIMINATED;

				if (w >= 15 && (lastWeeksOutcome == tools.constants.OUTCOME_TYPE_LOSS)){
					return tools.constants.GAME_TYPE_ELIMINATED;
				} 
				return tools.constants.GAME_TYPE_PLAYOFF
			}
		}

		// If not playoffs, regular.
		return tools.constants.GAME_TYPE_REGULAR;
	}

	// SLEEPER Records.
	async function getMatchupsSleeper(sleeperId1, sleeperId2) {
		// Will return most current league IDs and all previous years from sleeper.
		var allLeagues = await getSleeperLeagueIdsAndAllPreviousLeagueIds();

		var records = [];

		var isPaPaT_Rule = sleeperId1 == tools.constants.PAPA_T_SLEEPER_ID_RECORD_CORRECTION || sleeperId2 == tools.constants.PAPA_T_SLEEPER_ID_RECORD_CORRECTION; // If you played him in legacy, pull using jers NFL ID
		var isJer_Rule = sleeperId1 == tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION || sleeperId2 == tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION;
		if (isPaPaT_Rule && isJer_Rule) return records;

		// If you played Jers ID in sleeper in B League 2022 - you actually played Papa T. If in , search using jers sleeperId since his account controlled the team

		for (var curLeague of allLeagues){
			var leagueId = curLeague.LeagueId;

			const leagueRosterData = await fetch(getLeagueRestAPI(leagueId) + "/rosters")
                .then((res) => res.json());
			const leagueData = await fetch(getLeagueRestAPI(leagueId))
                .then((res) => res.json());

			var temporarySleeperID1 = sleeperId1;
			var temporarySleeperID2 = sleeperId2;

			// If PaPa t is in the dropdown and its the 2022 B league season
			if (leagueId == tools.B_LEAGUE_SLEEPER_ID_2022_SEASON) { 
				
				//use jers sleeperid for records.
				if (sleeperId1 == tools.constants.PAPA_T_SLEEPER_ID_RECORD_CORRECTION){
					temporarySleeperID1 = tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION;
					
				} else if (sleeperId2 == tools.constants.PAPA_T_SLEEPER_ID_RECORD_CORRECTION){
					temporarySleeperID2 = tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION;
					
				}

				if (sleeperId1 == tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION){
					temporarySleeperID1 = "";
				
				} else if (sleeperId2 == tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION){
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
					if (matchupId1 == matchupId2 && !(user1score < 0 && user2score < 0)){
						outcome = outcomeLabelFromScore(user1score, user2score);
						year = leagueData.season;

						records.push({
							owner_score: ""+user1score,
							opponent_score: ""+user2score,
							outcome: ""+outcome,
							week: "" + week, // convert to str
							year: ""+year,
							type: "Sleeper",
							game_type: "none",
							league_type: curLeague.LeagueType
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

		var isPaPaT_Rule = sleeperId == tools.constants.PAPA_T_SLEEPER_ID_RECORD_CORRECTION; // If you played him in legacy, pull using jers NFL ID
		var isJer_Rule = sleeperId == tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION;

		// If you played Jers ID in sleeper in B League 2022 - you actually played Papa T. If in , search using jers sleeperId since his account controlled the team

		for (var curLeague of allLeagues){
			var leagueId = curLeague.LeagueId;

			const leagueRosterData = await fetch(getLeagueRestAPI(leagueId) + "/rosters")
                .then((res) => res.json());
			const leagueData = await fetch(getLeagueRestAPI(leagueId))
                .then((res) => res.json());
			const playoffData = await fetch(getLeagueRestAPI(leagueId) + "/winners_bracket")
                .then((res) => res.json());

			var winningRosters = [];
			playoffData.forEach(round => {
				if (winningRosters.indexOf(round.w) === -1){
					winningRosters.push(round.w);
				}
				if (winningRosters.indexOf(round.l) === -1){
					winningRosters.push(round.l);
				}
			});

			//console.log(leagueData.season);
			//console.log(playoffData);
			//console.log(winningRosters);
			
			var temporarySleeperID = sleeperId;

			// If its the 2022 B league season
			if (leagueId == tools.B_LEAGUE_SLEEPER_ID_2022_SEASON) { 
				//use jers sleeperid for records.
				if (isPaPaT_Rule){
					temporarySleeperID = tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION;
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
					
					if (!(user1score < 0 && user2score < 0)){
						outcome = outcomeLabelFromScore(user1score, user2score);
						year = leagueData.season;

						var madeWinnersBracket = winningRosters.indexOf(rosterId) != -1; // Is our roster id in winners bracket
						var gametype = getGameType(year, week, lastPlayoffResult, outcome, isPlayoffsPostElim, madeWinnersBracket);
						if (gametype == tools.constants.GAME_TYPE_ELIMINATED) isPlayoffsPostElim = true;
						lastPlayoffResult = outcome;

						records.push({
							owner_score: ""+user1score,
							opponent_score: ""+user2score,
							outcome: ""+outcome,
							week: "" + week, // convert to str
							year: ""+year,
							type: "Sleeper",
							// Regular, Playoff, PlayoffPostElimination
							game_type: gametype,
							league_type: curLeague.LeagueType
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

		var isPaPaT_Rule = sleeperId1 == tools.constants.PAPA_T_SLEEPER_ID_RECORD_CORRECTION || sleeperId2 == tools.constants.PAPA_T_SLEEPER_ID_RECORD_CORRECTION; // only existed in B league
		var isJer_Rule = sleeperId1 == tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION || sleeperId2 == tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION; // Only existed in A league
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

						if (!isPaPaT_Rule && !(score < 0 && opScore < 0)){
							records.push({
								owner_score: ""+score,
								opponent_score: ""+opScore,
								outcome: ""+outcome,
								week: ""+user1games[gameId].week,
								year: ""+year,
								type: "NFL.com",
								game_type: "none",
								league_type: "A League"
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

						if (!isJer_Rule && !(score < 0 && opScore < 0)){
							records.push({
								owner_score: ""+score,
								opponent_score: ""+opScore,
								outcome: ""+outcome,
								week: ""+user1games[gameId].week,
								year: "2021",
								type: "NFL.com",
								game_type: "none",
								league_type: "B League"
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

		var isPaPaT_Rule = sleeperId == tools.constants.PAPA_T_SLEEPER_ID_RECORD_CORRECTION; // only existed in B league
		var isJer_Rule = sleeperId == tools.constants.JER_SLEEPER_ID_RECORD_CORRECTION; // Only existed in A league

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
				var rankString = teams[user1Id].rank.split("\n")[1]; // bit hacky
				rankString = rankString.replace("(", "");
				rankString = rankString.replace(")", "");
				var finishingRank = parseInt(rankString); // Ranks appear like "1\n(4)"
				var madeWinnersBracket = finishingRank <= 8;

				//console.log(year + " " + rankString + " " + finishingRank+ " " + madeWinnersBracket);

				var lastPlayoffResult = "";
				var isPlayoffsPostElim = false;

				for (var gameId in user1games) {
						// Add record against this user.
						var score = parseFloat(user1games[gameId].score);
						var opScore = parseFloat(user1games[gameId].opponent_score);
						var outcome = outcomeLabelFromScore(score, opScore);

						
						var gametype = getGameType(year, user1games[gameId].week, lastPlayoffResult, outcome, isPlayoffsPostElim, madeWinnersBracket);
						if (gametype == tools.constants.GAME_TYPE_ELIMINATED) isPlayoffsPostElim = true;
						lastPlayoffResult = outcome;

						if (!isPaPaT_Rule && !(score < 0 && opScore < 0)){
							records.push({
								owner_score: ""+score,
								opponent_score: ""+opScore,
								outcome: ""+outcome,
								week: ""+user1games[gameId].week,
								year: ""+year,
								type: "NFL.com",
								game_type: gametype,
								league_type: "A League"
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
				var rankString = teams[user1Id].rank.split("\n")[1]; // bit hacky
				rankString = rankString.replace("(", "");
				rankString = rankString.replace(")", "");
				var finishingRank = parseInt(rankString); // Ranks appear like "1\n(4)"
				var madeWinnersBracket = finishingRank <= 8;

				//console.log(year + " " + rankString + " " + finishingRank+ " " + madeWinnersBracket);

				var lastPlayoffResult = "";
				var isPlayoffsPostElim = false;

				for (var gameId in user1games) {
						// Add record against this user.
						var score = parseFloat(user1games[gameId].score);
						var opScore = parseFloat(user1games[gameId].opponent_score);
						var outcome = outcomeLabelFromScore(score, opScore);

						var gametype = getGameType("2021", user1games[gameId].week, lastPlayoffResult, outcome, isPlayoffsPostElim, madeWinnersBracket);
						if (gametype == tools.constants.GAME_TYPE_ELIMINATED) isPlayoffsPostElim = true;
						lastPlayoffResult = outcome;

						if (!isJer_Rule && !(score < 0 && opScore < 0)){
							records.push({
								owner_score: ""+score,
								opponent_score: ""+opScore,
								outcome: ""+outcome,
								week: ""+user1games[gameId].week,
								year: "2021",
								type: "NFL.com",
								game_type: gametype,
								league_type: "B League"
							});
						}
					
				}
			} else {
				console.warn("failed getMatchupsLegacy check condition (user1Id != -1 && user2Id != -1). One or more userIds could not be found.");
			}

		return records;
	}

	function outcomeLabelFromScore(score, opponentScore){
		if (score == 0 && opponentScore == 0){
			return tools.constants.OUTCOME_TYPE_NO_CONTEST;
		}
		if (score == opponentScore){
			return tools.constants.OUTCOME_TYPE_TIE;
		}
		return score > opponentScore ? tools.constants.OUTCOME_TYPE_WIN : tools.constants.OUTCOME_TYPE_LOSS;
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
