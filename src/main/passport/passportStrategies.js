import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { usersModel } from "../dao/models/users.model.js";
import { hashPassword } from "../dirname.js";

passport.use(
  "register",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await usersModel.findOne({ email });
      if (user) {
        return done(null, false);
      }
      const hashedPassword = await hashPassword(password);
      const newUser = { ...req.body, password: hashedPassword };
      const userBD = await usersModel.create(newUser);
      done(null, userBD);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await usersModel.findById(id);
  done(null, user);
});
