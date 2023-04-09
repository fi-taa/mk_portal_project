const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const JWT = require("jsonwebtoken");
const Token = require("../../Refreshtoken/tokenSchema");
var Tokens = [];



const generateAccessToken = (user)=>{
    return JWT.sign(user,process.env.JWT_SECRET ,{expiresIn:"30s"});
    
}

const generateRefreshToken = (user)=>{
    return JWT.sign(user,process.env.JWT_SECRET);

}


const loginUser = async (req,res)=> {
    console.log(req.body)
    try{
        console.log(req.body)
       const  currentUser = await User.findOne({ username : req.body.username});
       if (!currentUser) {
            return res.status(404).json("User Not Found");
       } 

       const correctPassword = await bcrypt.compare(req.body.password , currentUser.password);
       
       if (!correctPassword) {
         return res.status(404).json("incorrect password please try with correct password!!!");
       } 
       else{
       console.log("curr",currentUser)
        const user = {id: currentUser._id , isAdmin:currentUser.isAdmin};
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        console.log(accessToken,refreshToken);
        Tokens.push(refreshToken);
        return res.status(200).json({
            id: currentUser._id,
            username: currentUser.username,
            isAdmin:currentUser.isAdmin
            ,accessToken, 
            refreshToken
        });
       }
       
    }
    catch(err){
        return res.status(500).json("server error")
    }
}


const refreshTokenRequest = (req,res)=>{
    const refresh = req.body.token;
    if (!refresh){
        return res.status(404).send("You are not authorized");
    } 
    if (!Tokens.includes(refresh)){
        return res.status(401).send("Invalid refresh Token");
    }

    JWT.verify(refresh,process.env.JWT_SECRET , (err,user)=>{
        if (err){
            return res.status(401).send(err);
        }
        Tokens = Tokens.filter((token)=> token!==refresh);
        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);
        Tokens.push(newRefreshToken);
        res.status(200).send({
            accessToken : newAccessToken,
            refreshToken : newRefreshToken,
        })
    })
}
//  geting user

const getUser = async (req,res)=>{
    try{
        const user = await User.findById({_id:req.params.userId});
        const {password,...other}= user._doc;
        res.status(200).send(other);
    }
    catch(err){
        res.status(500).send(err);
    }
}

const varify = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if (authHeader){
        const accessToken = authHeader.split(" ")[1]
        JWT.verify(accessToken , process.env.JWT_SECRET , (err,user)=>{
            if (err){
                return res.status(404).send("Token is not valid");
            }
            
            req.user = user;
            next();
        })
    }
    else{
        res.status(404).send("You are not authorized");
    }
}
// const delete user
const deleteUser = async (req,res)=>{
        if (req.params.userId === req.user.id || req.user.isAdmin){  
            const user = await User.findByIdAndDelete(req.params.userId);
            res.status(200).send(user);
        }
        
        else{
            res.status(500).send("You can't delete others account");
        }
}

const logout = (req,res)=>{
    const refreshtoken = req.body.token;
    Tokens = Tokens.filter(token=> token!== refreshtoken);
    res.status(200).send("You loged out successfully");
}

module.exports = {loginUser  , getUser,deleteUser , varify , refreshTokenRequest }