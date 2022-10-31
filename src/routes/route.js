const express = require('express');
const router = express.Router();

const controller = require('../controllers.Controller')


router.get("/timeIpRouter",   controller.time)


module.exports = router;