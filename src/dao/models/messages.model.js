import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const messagesModel = mongoose.model("chat", chatSchema);
