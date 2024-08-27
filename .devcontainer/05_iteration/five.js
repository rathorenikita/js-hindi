const coding =["js", "c++","html","css"]
coding.forEach(function (item){
    //console.log(item);
    
})

function printme(item){
  //  console.log(item);
    
}
//coding.forEach(printme)

coding.forEach((item , index,arr) => {
//console.log(item,index,arr);

})

let mycoding = [
    {
        languageName: "javascript",
        languageFilename : "JS"
    },
    {
        languageName: "html",
        languageFilename : "html"
    },
    {
        languageName: "python",
        languageFilename : "py"
    }
]
mycoding.forEach( (item) => {
    console.log(item.languageFilename);
    
})
