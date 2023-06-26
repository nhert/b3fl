var SleeperTools = (function () {
	var tools = {};
	var privateVariable = 1;

	function getLeagueRestAPI(leagueId) {
		return "https://api.sleeper.app/v1/league/" + leagueId;
	}

	// Sleeper League IDs
	tools.A_LEAGUE_SLEEPER_ID = "968583157932937216";
	tools.B_LEAGUE_SLEEPER_ID = "866171664994541568";

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
			  td.innerText = elem; // Set the value as the text of the table cell
			  tr.appendChild(td); // Append the table cell to the table row
		   });
		   table.appendChild(tr); // Append the table row to the table
		});
		container.appendChild(table) // Append the table to the container element
	};

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
