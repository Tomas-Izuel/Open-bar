import { supportModel } from "../models/support.model.js";

export default class SupportManager {
  async getMessages(limit) {
    const options = {
      limit: limit,
      page: 1,
      sort: { date: -1 },
    };
    try {
      const messages = await supportModel.paginate({}, options);
      return messages;
    } catch (error) {
      return false;
    }
  }

  async sendMessage(message) {
    try {
      const messageSent = await supportModel.create(message);
      return messageSent;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
