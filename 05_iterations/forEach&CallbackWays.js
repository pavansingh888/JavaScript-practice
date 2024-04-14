const coding = ["js", "ruby", "java", "python", "cpp"]

//1
// coding.forEach( function (val){  // because its callback - no name, because this fx runninginside array, therefore it will automatically take value as parameter.
//     console.log(val);
// } )

//2
// coding.forEach( (item) => {
//     console.log(item);
// } )

//3
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//4
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )