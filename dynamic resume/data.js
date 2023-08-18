fetch("data.json")
		.then(response => response.json())
		.then(console.log);
function showInfo(data){
	console.table(data.data);
}