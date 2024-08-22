const name = "hitesh "
const repocount = 50
// console.log(name + repocount + " value");
console.log(`my name is ${name.toUpperCase()} and my repocount is ${repocount}`);
const gameName = new String('nikita_rathore_nr')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2))
// console.log(gameName.length);

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,3)
console.log(anotherString);

const newstring = "   nikita   "
console.log(newstring);
console.log(newstring.trim());

const url = "https://nikita.com%20rathore"
console.log( url.replace('%20','-'));
 console.log(url.includes('nikita'));

 console.log(gameName.split('_'));
 
 








