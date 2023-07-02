import mongoose from "mongoose";

const connectDB =()=> mongoose.connect(process.env.MONGO_URI, {
    dbName: "backendAPI",
  }).then(() => console.log("database Connected")).catch(() => console.log(e));

export default connectDB;