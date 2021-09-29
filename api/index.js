import express from 'express'
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import {taskRoute} from "./routes/task.js";
import cors from 'cors';



dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false,useCreateIndex:true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(cors({origin: 'http://localhost:3000'}));
app.use("/api/task", taskRoute);

app.listen(8001,()=>{
    console.log("server is started ");
})