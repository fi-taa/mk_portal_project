const express = require("express");
const postController = require("../controller/postController")
router = express.Router();

router.post("/create-post" , postController.createPost);
// router.post("/register" , postController.registerUser);

module.exports = router;
