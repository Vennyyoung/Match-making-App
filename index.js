let maleDate = ['Charles','Paul','James','Michael','Isaac']
let femaleDate = ['Debby', 'Jane', 'Becky','Juliet','sarah']
let place = ['Silverbird cinema','Obudu Cattle Ranch','Beach', 'Mall', 'Dubai Resort']

//Picks a random Male date
let randomMaleDate = maleDate[Math.floor(Math.random() * maleDate.length)]

//Picks a random female date
let randomFemaleDate = femaleDate[Math.floor(Math.random() * femaleDate.length)]

//Picks a random Place for the date
let randomPlace = place[Math.floor(Math.random() * place.length)]

// displays the matched date
let matchedRandomDate = randomMaleDate +" " + "and" +" "+ randomFemaleDate +" " + "will have a date at the" + " " + randomPlace

console.log(matchedRandomDate)