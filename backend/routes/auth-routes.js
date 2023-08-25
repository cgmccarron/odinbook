import express from "express";
import User from "../models/userModel.js";

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

authRouter.post("/firebaselogin", (req, res, next) => {
  console.log(req.body.user.displayName);

  let username = req.body.user.displayName;
  let email = req.body.user.email;
  let avatar = req.body.user.photoURL;

  User.findOne({ email: email }).then((currentUser) => {
    if (currentUser) {
      console.log("user is: " + currentUser);
      // already have user
      res.send(currentUser);
    } else {
      //if no user create user
      new User({
        username: username,
        email: email,
        avatar: avatar,
      })
        .save()
        .then((newUser) => {
          console.log("new user created " + newUser);
          res.send(newUser);
        });
    }
  });
});

export default authRouter;
