const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./user/route/auth")
const postRoute = require("./user/route/post")
const PORT = 5000;
const app = express();
dotenv.config();

// middleware
app.use(cors())
app.use(express.json())
app.use("/auth" , userRoute)
app.use("/post" , postRoute)

mongoose.set('strictQuery', false);
mongoose.connect(process.env.Mongo_URI , { useNewUrlParser: true })
    .then(console.log("connected successfully!"))

app.listen(PORT , ()=>{
    console.log(`Server is listening on  ${PORT}`);
})