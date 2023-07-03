import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {login, logout, getAllUsers, getMyProfile, register } from "../controllers/user.js";
//import {login, deleteUser, getAllUsers, getUserById, getMyProfile, register, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me",isAuthenticated, getMyProfile);

// router.get("/userId", getUserById);

//router.get("/userId/:id", getMyProfile);

// router.put("/userId/:id", updateUser);

// router.delete("/userId/:id", deleteUser);

//if the routes are same for requests you can write thiese three as
//router.route("/userId/:id").get(getUserDynamicId).put(updateUser).delete(deleteUser);


export default router;