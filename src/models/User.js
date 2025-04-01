import mongoose from "mongoose"; // Porque va a interpretar a partir de un objeto MongoDB

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true,
        maxlength: 50
    },
    email:{
        type: String,
        require: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
})

const User = mongoose.model('User', UserSchema)
export default User