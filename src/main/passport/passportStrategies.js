import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GitHubStrategy } from "passport-github2";
import { usersModel } from "../dao/models/users.model.js";
import { hashPassword } from "../dirname.js";

passport.use(
  "github",
  new GitHubStrategy(
    {
      clientID: "Iv1.a5dfd21177715632",
      clientSecret: "9b1116124d25a7995eeab0965c28ab4d576a161c",
      callbackURL: "http://localhost:8080/auth/github",
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await usersModel.findOne({
        email: profile._json.email || "example@gmail.com",
      });
      if (!user) {
        const newUser = {
          name: profile._json.name,
          email: profile._json.email || "example@gmail.com", // Mi perfil de gh no trae email por alguna razon, hice el or para probar que funcione
          password: "onGitHub",
        };
        const userBD = await usersModel.create(newUser);
        done(null, userBD);
      } else {
        done(null, user);
      }
    }
  )
);

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

//9b1116124d25a7995eeab0965c28ab4d576a161c
