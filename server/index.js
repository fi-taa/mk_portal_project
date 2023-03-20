const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./user/route/auth")
const PORT = 5000;
const app = express();
dotenv.config();

// middleware
app.use(cors())
app.use(express.json())
app.use("/auth" , userRoute)

mongoose.set('strictQuery', false);
mongoose.connect(process.env.Mongo_URI , { useNewUrlParser: true })
    .then(console.log("connected successfully!"))

app.listen(PORT , ()=>{
    console.log(`Server is listening on  ${PORT}`);
})