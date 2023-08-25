import express from "express";
import userModel from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get("/users", async (req, res) => {
  try {
    const users = await userModel.find({});
    if (!users) {
      return res.status(404).send("No Users found");
    }
    if (users) {
      res.status(200).send(users);
    }
  } catch (err) {
    res.status(500).send(err, " there is an error");
  }
});

export default userRouter;
