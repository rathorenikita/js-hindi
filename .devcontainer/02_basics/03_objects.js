//singletone
//object.create

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "nikita",
    "full name":"nikita rathore",
    age : 21,
    email: "nr@123",
    isLoggedin: false,
    LastLoginDays: ["monday","saturday"],
    [mySym]:"myKey1"

    

}

console.log(JsUser.email);
//console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
JsUser.email = "np@123"
console.log(JsUser.email);
Object.freeze(JsUser)
JsUser.email="hr@123"
console.log(JsUser.email);



//  JsUser.greeting = function (params) 
//  {
//     console.log("hello js world");
    
// }
// console.log(JsUser.greeting());
// JsUser.greetingTwo = function (params) 
// {
//    console.log(`hello js world ${this.name}`);
   
// }
// console.log(JsUser.greetingTwo());





