import express from "express";
import mongoose from "mongoose";

  //Defining Schema
  const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userdetails",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
  });
  
  //Creating colecction named userdetail
  export const Task = mongoose.model("Task", TaskSchema);

  