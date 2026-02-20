import express from "express"
import notesRouters from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
// const express = require("express");


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB();

app.use("/api/notes", notesRouters);


app.listen(PORT, ()=>{
    console.log("Server started on PORT:", PORT);
});

