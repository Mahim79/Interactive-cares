const mongoose = require("mongoose")
const mongooseURI = process.env.mongooseURI

mongoose.connect(mongooseURI)
.then(()=>console.log("Database connected successfully")
)
.catch((err)=> console.log("Database couldn't connect: ",err)
)

module.exports = mongoose