import passport from "passport";

import { Router } from "express";
import UserManager from "../dao/mongoManagers/UserManager.js";
const um = new UserManager();

import { authMiddleware } from "../middlewares/auth.middleware.js";

export const routesAuth = Router();

routesAuth.get("/login", async (req, res) => {
  const { error, success } = req.query;
  res.render("login", { error: error, success: success });
});

routesAuth.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userForm = { email: email, password: password };
  if (email == "adminCoder@coder.com" && password == "adminCod3r123") {
    req.session.email = email;
    req.session.type = "admin";
    return res.redirect("/views/products");
  } else {
    const user = await um.getUserByEmail(userForm);
    if (!user)
      return res.redirect("/auth/login?error=Invalid Email or Password");
    req.session.email = email;
    req.session.type = "user";
    return res.redirect("/views/products");
  }
});

routesAuth.get("/register", async (req, res) => {
  const error = req.query.error;
  res.render("register", { error: error });
});

routesAuth.post(
  "/register",
  passport.authenticate("register", {
    failureRedirect: "/views/error",
    successRedirect: "/views/products",
    passReqToCallback: true,
  }),
  async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      res.redirect("/auth/register?error=You must fill in all the fields");
    const user = {
      name: name,
      email: email,
      password: password,
      type: "user",
    };
    await um.save(user);
    res.redirect("/auth/login?success=User created successfully");
  }
);

routesAuth.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.send(err);
    res.render("logout");
  });
});

routesAuth.get("/private", authMiddleware, async (req, res) => {
  res.send("<h1> Contenido Privado </h1>");
});
