import { messagesModel } from "../models/messages.model";

export default class MessageManager {
  async getMessages() {
    try {
      const messages = await messagesModel.find().lean(); //El lean lo agregue porque sino handlebars no me dejaba representar las cosas
      return messages;
    } catch (err) {
      return err.message;
    }
  }
  async sendMessage(obj) {
    try {
      const newMessage = await messagesModel.createMessage(obj);
      return newMessage;
    } catch (err) {
      return err.message;
    }
  }
}
