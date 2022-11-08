const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const middleware = require("../middleware/auth")


router.get("/servertest", function (req, res) {
    res.send("Server serving well !")
})


router.post("/createuser", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/user/:userId", middleware.authenticate, userController.getUserData)



router.put("/user/:userId", middleware.authorize, userController.updateUser)

router.post("/user/:userId/posts", middleware.authorize, userController.postMessage)

router.delete("/user/:userId", middleware.authorize, userController.deleteUser)


module.exports = router;