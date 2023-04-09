const Post =  require('../model/postModel')
const createPost =  async (req,res)=>{
    const newPost = new Post(req.body)
    try {
        await newPost.save();
        res.status(201).send(newPost);
    }catch(err){
        res.status(500).send(err);
    }
}

module.exports = {createPost}