import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from 'mongoose'
import router from "./controllers/product.controller.js";

dotenv.config()
const app = express();

app.use(express.json())
app.use(cors())

app.use('/api',router)
mongoose.connect(process.env.MONGOOSE_URI)
const port = process.env.PORT
app.listen(port, (req,res)=>{
    console.log(`server is running on port ${port}`);
})
export const viteNodeApp = app;