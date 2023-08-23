import express from "express";
import passport from "passport";

const authRouter = express.Router();

//auth login
authRouter.get("/login", (req, res) => {
  res.status(200).send("login");
});

//auth logout
authRouter.get("/logout", (req, res) => {
  //handle with passport
  res.send("logging out");
});

//auth with google
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//callback route for google to redirect
authRouter.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => res.send(req.user)
);

export default authRouter;
