const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

router.get("/test-server", function (req, res) {
    res.send("Server is running !")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

module.exports = router;