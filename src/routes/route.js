const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


// 1. --------------------------------------------

router.get('/movies', function (request, response) {

    let myMovies = request.params

    console.log("My movies : ", myMovies);

    let movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    response.send(movieArr)
})

// 2. --------------------------------------------

router.get('/movies/:num', function (request, response) {

    let yourMovie = request.params.num

    console.log("your movie ", yourMovie);

    let movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    response.send(movieArr[yourMovie-1])
})

// 3. --------------------------------------------

router.get('/movies/:num', function (request, response) {

    let yourMovie = request.params.num

    let movieArr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    if (yourMovie < 4) {
        response.send(movieArr[yourMovie])
    }
    else {
        response.send("Error : Enter a valid number between (0 to 3)")
    }
})

// 4. --------------------------------------------

router.get('/films', function (request, response) {

    let myFilms = request.params

    console.log("My movies : ", myFilms)

    let movieArr = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    response.send(movieArr)
})

// 5. --------------------------------------------

router.get('/films/:filmId', function (request, response) {

    let myFilms = request.params.filmId

    console.log("My movies : ", myFilms)

    let movieArr = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    if (myFilms < 5) {
        response.send(movieArr[myFilms-1])
    }
    else {
        response.send("Enter a valid number between (0 to 3)")
    }

})


module.exports = router;