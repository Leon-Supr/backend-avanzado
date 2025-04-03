import mongoose from "mongoose";
import {mongoDomain, mongoPWD, mongoUser, mongoDb, mongoUri} from "../config/constants.js"


const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log("MongoDB Connected")
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDB

