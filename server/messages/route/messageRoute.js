const messageController = require("../controller/messageController");
const router = require("express").Router();

router.post("/",  messageController.creatMessage );
router.get("/:conversationId", messageController.getMessage);

module.exports = router;
