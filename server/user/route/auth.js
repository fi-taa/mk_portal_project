const express = require("express");
const userController = require("../controller/userController")
router = express.Router();

router.post("/login" , userController.loginUser);
router.post("/register" , userController.registerUser);

module.exports = router;