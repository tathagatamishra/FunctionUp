const express = require('express');
const router = express.Router();

// 1. -------------------------------------

// write an api which gives the missing number in an array of integers starting from 1... 
// example [1,2,3,5,6,7] : 4 is missing

router.get("/sol1", function (req, res) {

    let arr = [1, 2, 3, 5, 6, 7]

    let missingNumber = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] != i + 1) {

            let x = i + 1
            missingNumber.push(x)
            break
        }
    }
    res.send( { data: missingNumber[0] });
});


// 2. -------------------------------------

// write an api which gives the missing number in an array of integers starting from anywhere
// example [33, 34, 35, 37, 38]: 36 is missing    

router.get("/sol2", function (req, res) {

    let arr = [33, 34, 35, 37, 38]

    let missingNumber = []

    for (let i = 0; i<arr.length; i++) {

        if(arr[i] != arr[i+1]-1) {

            let x = arr[i+1]-1

            missingNumber.push(x)
            break
        }
    }

    res.send( { data: missingNumber[0] });
});


module.exports = router;