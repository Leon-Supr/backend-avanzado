import mongoose from "mongoose"; // Porque va a interpretar a partir de un objeto MongoDB
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        require: true
    }
})

// Método para hashear password antes de guardar el usuario
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12)
    next()
}) //pre es para hacer antes de una acción

const User = mongoose.model('User', UserSchema)
export default User