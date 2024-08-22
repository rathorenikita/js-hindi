const marvel_heroes = ["spiderman", "thor"]
const dc_heroes = ["superman","flash"]
//marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[2][1]);
//const newArr=marvel_heroes.concat(dc_heroes)
//console.log(newArr);

// const allHero = [...marvel_heroes,...dc_heroes]
// console.log(allHero);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarray = anotherArray.flat(Infinity)
//console.log(realarray);

console.log(Array.isArray("nikita"))
console.log(Array.from("nikita"));
console.log(Array.from({name:"nikita"}));

let score1 =100
let score2 =200
let score3 = 300
console.log(Array.of(score1,score2,score3));







