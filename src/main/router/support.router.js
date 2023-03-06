import { Router } from "express";
import SupportManager from "../dao/mongoManagers/SupportManager.js";

export const routerSupport = Router();
const sm = new SupportManager();

routerSupport.get("/", async (req, res) => {
  const { limit = 50 } = req.query;
  const messages = await sm.getMessages(limit);
  if (messages) {
    res.status(200).json(messages);
  } else {
    res.status(404).send({ message: "Messages not found" });
  }
});

routerSupport.post("/", async (req, res) => {
  const message = req.body;
  const date = new Date();
  message.date = JSON.stringify(date);
  const messageSent = await sm.sendMessage(message);
  if (messageSent) {
    res.status(200).json(messageSent);
  } else {
    res.status(400).send({ message: "Bad message" });
  }
});
