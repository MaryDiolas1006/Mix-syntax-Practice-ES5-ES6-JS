



function colorDay(todayIs) {

	let day = todayIs.toLowerCase();
	console.log(day);

	switch(day) {

		case "monday":
		console.log("color blue today")
		break;

		case "tuesday":

		console.log("color green today")
		break;

		case "wednesday":

		console.log("color yellow today")
		break;

		case "thursday":

		console.log("color red today")
		break;

		case "friday":

		console.log("color white today")
		break;

		case "saturday":

		console.log("color black today")
		break;

		case "sunday":

		console.log("color gold today")
		break;

		default:

		console.log("wear any color")

		break;
	}
}

colorDay("monday");
colorDay("tuesday");
colorDay("wednesday");
colorDay("thursday");
colorDay("friday");
colorDay("saturday");
colorDay("sunday");