const { default: mongoose } = require("mongoose");

const refreshTokenSchema = new mongoose.Schema({

    token:{
        type:String,
        require:true
    }
},{timestamps:true})
refreshTokenSchema.index({createdAt: 1},{expireAfterSeconds: 70});
module.exports = mongoose.model("tokens",refreshTokenSchema);