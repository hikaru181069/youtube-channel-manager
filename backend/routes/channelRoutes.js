const express = require("express");
const {
  getChannels,
  createChannel,
  deleteChannel,
} = require("../controllers/channelController");

const router = express.Router();

router.get("/", getChannels);
router.post("/", createChannel);
router.delete("/:id", deleteChannel);

module.exports = router;
