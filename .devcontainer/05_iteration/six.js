const myNums = [1,2,3,4,5,6,7,8,9,10]
// const  myNewNum = myNums.filter((num) =>num>4)
// console.log(myNewNum);

const myNew = []
myNums.forEach( (num) => {
    if(num>4)
    {
        myNew.push(num)
    }
})
//console.log(myNew);

const books = [
    {
        title:"book 1",
        genre: "history",
        publish : 1998
    },
    {
        title:"book 2",
        genre: "history",
        publish : 1992
    },
    {
        title:"book 3",
        genre: "science",
        publish : 1990
    },
    {
        title:"book 4",
        genre: "physics",
        publish : 2001
    }
]
//let getBook = books.filter( (bk) => bk.genre === "history" )
let getBook = books.filter( (bk) => {
    return bk.publish >=1995 && bk.genre === "history"
})

console.log(getBook);
