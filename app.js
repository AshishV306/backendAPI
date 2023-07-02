import  express  from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
    path: "./data/config.env",
});

app.use(express.json()); 
app.use(cookieParser());

app.use("/users", userRouter);

//we have created serveer.js file and put our app.listen and coonectDb function in it

