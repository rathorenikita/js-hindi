const myNum = [1,2,3]
//const NewNum = myNum.reduce(function (acc,currval) {
    //console.log(`accumulator ${acc} ,  CurrentValue :- ${currval}`);
    
  //  return acc + currval
    
    
//}, 0)
//console.log(NewNum);

const num =myNum.reduce((acc,currval) => acc + currval )
//console.log(num);
const shoppingCart  = [
  {
    itemName: "js",
    price: 2999
  },
  {
    itemName: "css",
    price: 1500
  },
  {
    itemName: "html",
    price: 3999
  },
  {
    itemName: "react",
    price: 299
  }
]
const totalAmount = shoppingCart.reduce( (acc,item) => acc+item.price, 0 )
console.log(totalAmount);

