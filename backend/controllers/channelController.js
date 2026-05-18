const Channel = require("../models/Channel");

const getChannels = async (req, res) => {
  try {
    const channels = await Channel.find().sort({ lastWatchedAt: 1 });
    res.json(channels);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch channels" });
  }
};

const createChannel = async (req, res) => {
  try {
    const channel = await Channel.create(req.body);

    res.status(201).json(channel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create channel" });
  }
};

const deleteChannel = async (req, res) => {
  try {
    const channel = await Channel.findByIdAndDelete(req.params.id);

    if (!channel) {
      return res.status(404).json({ message: "Channel not found" });
    }

    res.json({ message: "Channel deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete channel" });
  }
};

module.exports = {
  getChannels,
  createChannel,
  deleteChannel,
};
