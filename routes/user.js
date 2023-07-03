import express from "express";
import User from "../models/user.js";
import { deleteUser, getAllUsers, getUserById, getUserDynamicId, newUsers, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", newUsers);

router.get("/userId", getUserById);

router.get("/userId/:id", getUserDynamicId);

router.put("/userId/:id", updateUser);

router.delete("/userId/:id", deleteUser);


export default router;