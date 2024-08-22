/* 1 premitive (call  by value)
string,number,boolean,bigInt,symbol,null,undefined

2. non premitive (call by reference)
array, object, function */

const heroes = ["shaktiman","nagraj","doga"] //array
/*{
    name: "nikita",
    age: 18,
}  //object  or*/
let myObj ={
    name:"nikita",
    age: 18,
}

const myFun = function()
{
    console.log("hello world");
    
}

let bigNumber = 645346586797564764878758777656775n
const outSideTemp = null

console.log(typeof myFun);
