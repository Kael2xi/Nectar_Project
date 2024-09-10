const mongoose = require("mongoose")
require("dotenv").config()
const URL = process.env.database


mongoose.connect(URL).then(()=>{
    console.log("database connection successful");
}).catch((error)=>{
    console.log("Unable to connect to database", error);
})