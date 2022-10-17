
// Problem 3 // Module 3

let string = function() {
    return "FunctionUp"
}

// ---------------------------

let lowerCase = function() {
    return "FunctionUp".toLowerCase()
    
}

// ---------------------------

let upperCase = function() {
    return "FunctionUp".toUpperCase()
    
}

// Exporting ...

module.exports.trim = string
module.exports.changetoLowerCase = lowerCase
module.exports.changetoUpperCase = upperCase