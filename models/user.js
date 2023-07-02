import express from "express";
import mongoose from "mongoose";

  //Defining Schema
  const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
  //Creating colecction named userdetail
 const User = mongoose.model("userdetail", UserSchema);

 export default User;