function myName (){
    // console.log("n");
    // console.log("i");
    // console.log("k");
    // console.log("i");
    // console.log("t");
    // console.log("a");
    

}
myName()

// function addNum (number1,number2){
//    console.log(number1 + number2);
    
// }
//addNum(3, "a")

function addNum (number1,number2){
    // let result = (number1 + number2);
    // return result
    return number1+number2
     
 }
  result =addNum(5,6)
 //console.log(result);

 function loginUser (username){
    return `just ${username} logged in`
 }
 //console.log(loginUser("nimish"));

 function calculateCardPrice (val1,val2, ...num1){
    return num1
 }
 //console.log(calculateCardPrice(2,4,5,7));

 const user ={
    username: "nbikita",
    prices: 55
 }
 function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`);
    
 }
 handleObject(user)
 
  
 