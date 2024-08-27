//********************for of */
const arr = [1,2,3,4]
for (const num of arr) 
    {
   // console.log(num);
    
}

const greetings = "helloWorld"
for (const greet of greetings)
     {
       // console.log(`char of  ${greet}`);
        
}

const map = new Map()
map.set('IN' , "India")
map.set('USA',"United stae of nation")
map.set('IN',"India")
//console.log(map);

for (const [key,value] of map) 
    {
    console.log(key, ':-', value);
    
}
