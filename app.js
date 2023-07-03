import  express  from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path: "./data/config.env",
});

app.use(express.json()); 
app.use(cookieParser());

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

//we have created serveer.js file and put our app.listen and coonectDb function in it

app.use(errorMiddleware);