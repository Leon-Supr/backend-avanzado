import mongoose from "mongoose"; // Porque va a interpretar a partir de un objeto MongoDB

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, // hace la relación entre un post y un usuario
        ref: 'User'
    },
})

const Post = mongoose.model('Post', PostSchema)
export default Post