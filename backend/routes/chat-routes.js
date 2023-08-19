import express from "express";

const chatRouter = express.Router();

chatRouter.get("/", (req, res) => {
  res.status(200).send("This is the chat route");
});

chatRouter.get("/chatroom", (req, res) => {
  res.status(200).send("Chatroom");
});

export default chatRouter;
