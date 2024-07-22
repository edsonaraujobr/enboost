import express from "express";
import { createUser, getAllUsers } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/createUser", createUser);;
router.get("/getAllUsers", getAllUsers);

export default router;