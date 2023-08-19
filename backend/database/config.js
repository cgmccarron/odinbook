import mongoose from "mongoose";
import cors from "cors";
import MulterGridfsStorage, { GridFsStorage } from "multer-gridfs-storage";
import Grid from "gridfs-stream";

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
