import User from "../models/User.js";
import Post from "../models/Post.js"

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save() // Indica que tenemos que guardar el usuario en db
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}

export const getPost = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'name', 'email')
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const { title, userId } = req.body;
    //Verificar si usuario existe en MongoDB
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    // Si existe, creamos Post
    const post = new Post({
        title,
        user: userId
    })

    // Se guardará el objeto post en MongoDb
    try {
        await post.save()
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
