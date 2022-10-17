const url = "https://www.google.com"

let printSomething = function() {
    console.log("Request details are - a, b, c")
    return "done"
}

// Problem 1 // Module 1

let welcome = function() {
    return "Welcome to my application. I am Tathagata and a part of FunctionUp Lithium cohort."
}



let abc = 2022
module.exports.myUrl = url
module.exports.myFunction = printSomething
module.exports.welcomeNote = welcome
