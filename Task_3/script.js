// api url
const api_url =
	"https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	// Storing data in form of JSON
	var data = await response.json();	
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data1) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;
	
	// Loop to access all rows
for(var i = 0; i < data1.data.length; i++)
{
    var emp = data1.data[i];
    var productName = emp.name;
	var office1 = emp.office;
	var position1 = emp.position;
	var salary1 = emp.salary;
	tab += `<tr>
	<td>${productName} </td>
	<td>${office1}</td>
	<td>${position1}</td>
	<td>${salary1}</td>		
</tr>`;
}
	

	//console.log("tab data"+tab);
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}

/*const yourObject = {
  "VERSION": "2006-10-27.a",
  "JOBNAME": "EXEC_",
  "JOBHOST": "Test",
  "LSFQUEUE": "45",
  "LSFLIMIT": "2006-10-27",
  "NEWUSER": "3",
  "NEWGROUP": "2",
  "NEWMODUS": "640"
}
const keys = Object.keys(yourObject);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key, yourObject[key]);
}*/