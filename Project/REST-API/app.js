const express = require("express");
const productsRouter = require("./Routers/productsRouter");
const app = express()
require('dotenv').config();
const PORT = 4000
const mongoose = require("./database")

app.use(express.json())
app.use("/api/products",productsRouter)


app.listen(PORT,()=> console.log(`server is running at http://localhost:${PORT}`)
)