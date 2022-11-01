const express = require('express');
const router = express.Router();

const moment = require('moment')


router.get("/timeIpRouter", function (req, res) {
    
    let theTime = moment().format()
    let theIp = req.ip
    let thePath = req.path
    
    res.send({theTime, theIp, thePath})

})


module.exports = router;