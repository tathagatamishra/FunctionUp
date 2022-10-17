
// Problem 2 // Module 2

let date = function () {
    let toDay = new Date().toLocaleDateString()
    return toDay
}

// ------------------------

let thisMonth = function () {

    let month = new Date().getMonth() + 1

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    for (let i = 0; i < 12; i++) {
        if (month == i) {
            i -= 1
            return monthNames[i]
        }
    }
}

// ------------------------

let batchInfo = function () {
    return "Lithium, W4D6, the topic for today is Nodejs module system"
}


// Exporting ...

module.exports.printDate = date
module.exports.printMonth = thisMonth
module.exports.getBatchInfo = batchInfo
