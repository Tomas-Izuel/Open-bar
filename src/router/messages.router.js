import { Router } from "express";
import MessageManager from "../dao/mongoManagers/MessagesManager.js";

const routerMessages = Router();
const mm = new MessageManager();

routerMessages.get("/", async (req, res) => {
  const messages = await mm.getMessages();
  res.status(200).send(messages);
});

routerMessages.post("/", async (req, res) => {
  const m = req.body;
  const newMessage = mm.sendMessage(m);
  res.status(200).send(newMessage);
});

export default routerMessages;
