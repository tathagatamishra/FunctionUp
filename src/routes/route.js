
const express = require('express');
const router = express.Router();

const vaccineController = require("../controllers/cowinController")


router.get("/servertest", function (req, res) {
    res.send("Server is running !")
})


router.get("/fakeGOVsite/states", vaccineController.getStates)

router.get("/fakeGOVsite/districts/:stateId", vaccineController.getDistricts)

router.get("/fakeGOVsite/getByPin", vaccineController.getByPin)

router.post("/fakeGOVsite/getOtp", vaccineController.getOtp)


module.exports = router;