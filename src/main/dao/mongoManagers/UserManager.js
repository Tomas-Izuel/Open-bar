import { usersModel } from "../models/users.model.js";
import { hashPassword, comparePassword } from "../../dirname.js";

export default class UserManager {
  async getUserByEmail(user) {
    try {
      const data = await usersModel.findOne({ email: user.email });
      if (data) {
        if (comparePassword(user.password, data.password)) {
          return data;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async save(user) {
    try {
      const newUser = await usersModel.create(user);
      return newUser;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
