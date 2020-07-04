let monthInput = 1
let dayInput = 17

let months = [
  "", "january", "feb", "march","april","may","june",
  "july","aug","sep","oct","nov","dec"
]

let zodiac = [
  "", "aquarius", "pisces", "aries","taurus","gemini","cancer",
  "leo","virgo","libra","scorpio","sagittarius","capricorn"
]

console.log(monthInput);
console.log(dayInput);

switch(monthInput){  

	case 1:
	if(dayInput >= 17){
      console.log(`you are an ${zodiac[1]}`)
	}else{
		console.log(`you are an ${zodiac[2]}`)
	}
	break;

	case 2:
	if(dayInput >= 17){
      console.log(`you are an ${zodiac[2]}`)
	}else{
		console.log(`you are an ${zodiac[3]}`)
	}
	break;

	case 3:
	if(dayInput >= 17){
      console.log(`you are an ${zodiac[3]}`)
	}else{
		console.log(`you are an ${zodiac[4]}`)
	}
	break;

	case 4:
	if(dayInput >= 17){
      console.log(`you are an ${zodiac[4]}`)
	}else{
		console.log(`you are an ${zodiac[5]}`)
	}
	break;

	case 5:
	if(dayInput > 17){
      console.log(`you are an ${zodiac[5]}`)
	}else{
		console.log(`you are an ${zodiac[6]}`)
	}
	break;

	case 6:
	if(dayInput >= 17){
      console.log(`you are an ${zodiac[6]}`)
	}else{
		console.log(`you are an ${zodiac[7]}`)
	}
	break;

	case 7:
	if(dayInput >= 17){
      console.log(`you are an ${zodiac[7]}`)
	}else{
		console.log(`you are an ${zodiac[8]}`)
	}
	break;

	case 8:
	if(dayInput >= 17){
      console.log(`you are an ${zodiac[8]}`)
	}else{
		console.log(`you are an ${zodiac[9]}`)
	}
	break;


	case 9:
	if(dayInput >= 17){
      console.log(`you are an ${zodiac[9]}`)
	}else{
		console.log(`you are an ${zodiac[10]}`)
	}
	break;

	case 10:
	if(dayInput >= 17){
      console.log(`you are an ${zodiac[10]}`)
	}else{
		console.log(`you are an ${zodiac[11]}`)
	}
	break;

	case 11:
	if(dayInput >= 17){
      console.log(`you are an ${zodiac[11]}`)
	}else{
		console.log(`you are an ${zodiac[12]}`)
	}
	break;


	case 12:
	if(dayInput >= 17){
      console.log('you are a capricorn')
	}else{
		console.log('you are an aquarius')
	}
	break;

	default:
	console.log('no zodiac')
	break;
}





let koponanNiRecca = [
{name: "Recca", age: 17, power:"Flame Dragons"},
{name: "Max", age: 17, power: "Ring of Saturn"},
{name: "Arra", age: 17, power: "Fuujin"},
{name: "Lorkhan", age: 11, power: "Kogan Aiki"},

]


/*accessing properties of objects in an array*/
console.log(koponanNiRecca[2].power);

/*using array method*/
koponanNiRecca.forEach(object => {
	console.log(object.name)
})


const ageGroupChecker = () => {

	koponanNiRecca.forEach(object => {
		if(object.age <= 11){
			console.log(`${object.name} is an elem student`)
		}else {

			console.log(`${object.name} is a High school Student`)
		}
	})
}

//just to get one object/recca
ageGroupChecker(koponanNiRecca[0]);


let month2Input = 1
let day = 17

console.log(month);
console.log(day);


let zodiacSigns = [
   "",

   {
   	month: "January",
   	border: 20 ,  //where the zodiac sign change
   	sign1: "capricorn",   //the first zodiac sign Ex: jan 1-20
   	sign2: "aquarius",  //second zodiac sign Ex: jan 20 and soon
   },

   {
   	month: "feb",
   	border: 18,
   	sign1: "aquarius",
   	sign2: "pisces"
   },

    {
   	month: "march",
   	border: 20,
   	sign1: "pisces",
   	sign2: "aries"
   },

    {
   	month: "april",
   	border: 19,
   	sign1: "aries",
   	sign2: "taurus"
   },


    {
   	month: "may",
   	border: 20,
   	sign1: "taurus",
   	sign2: "gemini"
   },

    {
   	month: "june",
   	border: 21,
   	sign1: "gemini",
   	sign2: "cancer"
   },

    {
   	month: "july",
   	border: 22,
   	sign1: "cancer",
   	sign2: "leo"
   },

    {
   	month: "uag",
   	border: 22,
   	sign1: "leo",
   	sign2: "virgo"
   },

   {
   	month: "sep",
   	border: 22,
   	sign1: "virgo",
   	sign2: "libra"
   },

   {
   	month: "oct",
   	border: 23,
   	sign1: "libra",
   	sign2: "scorpio"
   },

   {
   	month: "nov",
   	border: 21,
   	sign1: "scorpio",
   	sign2: "sagittarius"
   },

    {
   	month: "dec",
   	border: 21,
   	sign1: "sagittarius",
   	sign2: "capricorn"
   }
]



	if(day >= zodiacSigns[month2Input].border ){

	console.log(`Your zodiac sign is ${zodiacSigns[month2Input].sign1}`)

	
		console.log(zodiacSigns[month2Input].month)
	
}else{

	console.log(`Your zodiac sign is ${zodiacSigns[month2Input].sign2}`)
	console.log(zodiacSigns[month2Input].month)
}









