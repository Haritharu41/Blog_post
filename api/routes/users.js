import express from "express";
import { addUser } from "../Controllers/user.js";

const router= express.Router();

router.get("/test", addUser)

export default router