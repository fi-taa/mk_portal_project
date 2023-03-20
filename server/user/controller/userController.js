const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const registerUser = async (req, res)=> {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password,salt)

    try{
        const newuser = new User({
            username: req.body.username,
            password : hashedPassword,
        })

        await newuser.save();
        return res.status(200).json(newuser);
    }
    catch(err){
        return res.status(400).json(err);
    }
}


const loginUser = async (req,res)=> {
    
    try{
       const  currentUser = await User.findOne({ username : req.body.username});
       if (!currentUser) {
            return res.status(404).json("User Not Found");
       } 

       const correctPassword = await bcrypt.compare(req.body.password , currentUser.password);

       if (!correctPassword) {
         return res.status(404).json("incorrect password please try with correct password!!!");
       } 

       else{
         return res.status(200).json("Login Successfully");
       }

    }
    catch(err){
        return res.status(500).json("server error")
    }
}

module.exports = {loginUser,registerUser}