import express from "express";

const postRouter = express.Router();
/*
postRouter.post("/upload/images", upload.single("file"), (req, res) => {
  res.status(201).send(req.file);
});

postRouter.post("/upload/posts", async (req, res) => {
  console.log(req.body);
  const dbPost = req.body;
  try {
    await mongoPosts.create(dbPost);
    res.status(201).send(req.body);
  } catch (err) {
    res.status(500).send(err);
  }
});

postRouter.get("/retrieve/posts", async (req, res) => {
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

postRouter.get("/retrieve/images/single", (req, res) => {
  gfs.files.findOne({ filename: req.query.name }, (err, file) => {
    if (err) {
      res.status(404).json({ err: "file not found" });
    } else {
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    }
  });
});
*/
export default postRouter;
