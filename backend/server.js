import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import MulterGridfsStorage, { GridFsStorage } from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import bodyParser from "body-parser";
import path from "path";
import Pusher from "pusher";

import mongoPosts from "./postModel.js";

Grid.mongo = mongoose.mongo;

//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(bodyParser.json());
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

// api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("./upload/images", upload.single("file"), (req, res) => {
  res.status(201).send(req.file);
});

app.post("/upload/posts", (req, res) => {
  const dbPost = req.body;

  mongoPosts.create(dbPost, (err, posts) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      res.status(201).send(posts);
    }
  });
});

app.get("/retrieve/posts", (req, res) => {
  mongoPosts.find((err, posts) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      posts.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

      res.status(200).send(posts);
    }
  });
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
