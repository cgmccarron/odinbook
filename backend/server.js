import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import MulterGridfsStorage, { GridFsStorage } from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import path from "path";
import Pusher from "pusher";

import authRouter from "./routes/auth-routes.js";
import postRouter from "./routes/feed-routes.js";
import chatRouter from "./routes/chat-routes.js";
import userRouter from "./routes/user-routes.js";

import mongoPosts from "./models/postModel.js";

import setupAuth from "./services/passport-setup.js";

Grid.mongo = mongoose.mongo;

//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

//db config
const mongoURI =
  "mongodb+srv://cgmccarr:nwivkotrvMGYYfvf@cluster0.asa3mdm.mongodb.net/?retryWrites=true&w=majority";
const conn = mongoose.createConnection(mongoURI);
let gfs;

conn.once("open", () => {
  console.log("DB Connected");

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("images");
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `image-${Date.now()}${path.extname(file.orginalname)}`;

      const fileInfo = {
        filename: filename,
        bucketName: "images",
      };

      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

mongoose.connect(mongoURI);

// apes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.use("/auth", authRouter);
app.use("/chat", chatRouter);
app.use("/user", userRouter);

app.post("./upload/images", upload.single("file"), (req, res) => {
  res.status(201).send(req.file);
});

app.post("/upload/posts", async (req, res) => {
  console.log(req.body);
  const dbPost = req.body;
  try {
    await mongoPosts.create(dbPost);
    res.status(201).send(req.body);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/retrieve/posts", async (req, res) => {
  try {
    const posts = await mongoPosts.find({});
    if (!posts) {
      return res.status(404).send("No Posts found");
    }
    if (posts) {
      res.status(200).send(posts);
    }
  } catch (err) {
    res.status(500).send(err, " there is an error");
  }
});

app.get("/retrieve/images/single", (req, res) => {
  gfs.files.findOne({ filename: req.query.name }, (err, file) => {
    if (err) {
      res.status(404).json({ err: "file not found" });
    } else {
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
  });
});
//listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
