const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    chat: {
      type: String,
      required: true,
    },
    user: {
      id: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
      name: {
        type: String,
        requried: true,
      },
    },
    room: {
      type: mongoose.Schema.ObjectId,
      ref: "Room",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
