import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import { db } from "./db.js";
import cookieParser from "cookie-parser";

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL Database!");
  }
)

const app=express()

const corsOptions = {
    origin: true,
    credentials: true
  };

app.use(express.json())
app.use(cookieParser())

app.use(cors(corsOptions))

app.use("/api/auth",authRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/user",userRoutes)










app.listen(8800,()=>{
    console.log("Connected Mr.Hari")
})