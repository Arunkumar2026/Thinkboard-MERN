import express from "express"
import notesRouters from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "../middleware/rateLimiter.js";
// const express = require("express");


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB();

//middleware
app.use(express.json()) // this middleware will parse JSON bodies: req.body
app.use(rateLimiter) 
//our simple custom middleware
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & REq URL is ${req.url}`)
//     next();
// })

app.use("/api/notes", notesRouters);


app.listen(PORT, ()=>{
    console.log("Server started on PORT:", PORT);
});

