const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema(
  {
    channelId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
    },
    subscriberCount: {
      type: Number,
      default: 0,
    },
    lastWatchedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Channel", channelSchema);
