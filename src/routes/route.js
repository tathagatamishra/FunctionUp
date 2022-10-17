const express = require('express');
const router = express.Router(); //test-you

//importing a custom module
const xyz = require('../logger/logger')
const mod2 = require('../util/helper')
const mod3 = require('../validator/formatter')

//importing external package
const underscore = require('underscore')

const _ = require('lodash')


router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ", xyz.myFunction())
    console.log("The value of the constant is ", xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    console.log("")

    // Problem 1 // Module 1
    console.log("// Problem 1 // Module 1")
    console.log(xyz.welcomeNote())
    console.log("")

    // Problem 2 // Module 2
    console.log("// Problem 2 // Module 2")
    console.log(mod2.printDate())
    console.log(mod2.printMonth())
    console.log(mod2.getBatchInfo())
    console.log("")

    // Problem 3 // Module 3
    console.log("// Problem 3 // Module 3")
    console.log(mod3.trim())
    console.log(mod3.changetoLowerCase())
    console.log(mod3.changetoUpperCase())
    console.log("");

    // Problem 4
    console.log("// Problem 4")
    let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let chunkMonth = _.chunk(monthArr, 3)
    console.log(chunkMonth)

    // -------------------------

    let oddArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let tailArr = _.tail(oddArr)
    console.log(tailArr)
    console.log("")

    // -------------------------

    let uniqueValue = _.union([1, 2],[2, 3],[3, 4],[4, 5],[5, 6])
    console.log(uniqueValue)
    console.log("")

    // -------------------------

    let movieArr = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    let obj = _.fromPairs(movieArr)
    console.log(obj)

    // Showing in Browser
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
})

module.exports = router;

