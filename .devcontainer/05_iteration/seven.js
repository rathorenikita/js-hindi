const myNum = [1,2,3,4,5,6]
//const MyNewNum = myNum.map( (num) => num+10)
const MyNewNum = myNum
                   .map( (num) => num +10)
                   .map( (num) => num +1)
                   .filter( (num) => num>=14)
console.log(MyNewNum);
