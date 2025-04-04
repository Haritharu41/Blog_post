import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import { db } from "./db.js";
import cookieParser from "cookie-parser";
import multer from "multer";

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database!");
});

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());

app.use(cors(corsOptions));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  console.log("uploade file");

  const file = req.file;
  return res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

app.listen(8800, () => {
  console.log("Connected Mr.Hari");
});
