const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const middleware = require("../middlewares/middleware")

router.get("/test-server", function (req, res) {
    res.send("Server is running !")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)


// -----  middleware  ------

router.get("/users/:userId", middleware.middleware, userController.getUserData)

router.put("/users/:userId", middleware.middleware, userController.updateUser)

router.delete("/users/:userId", middleware.middleware, userController.deleteUser)


module.exports = router;