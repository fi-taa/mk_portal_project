const express = require("express");
const userController = require("../controller/userController")
router = express.Router();

router.post("/login" , userController.loginUser);
router.post("/refresh" , userController.refreshTokenRequest);
router.get("/:userId" , userController.getUser);
router.delete("/:userId" , userController.varify, userController.deleteUser);

module.exports = router;
