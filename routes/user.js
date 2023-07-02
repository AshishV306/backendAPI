import express from "express";
import User from "../models/user.js";
import { getAllUsers, getUserById, getUserDynamicId, newUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", newUsers);

router.get("/userId", getUserById);

router.get("/userId/:id", getUserDynamicId);


export default router;