import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://LeonSupr:JbApznwGkvrXeayN@fundbigdaddy.t5xerws.mongodb.net/?retryWrites=true&w=majority&appName=FundBigDaddy")
        console.log("MongoDB Connected")
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDB

// URI
//    mongodb+srv://LeonSupr:JbApznwGkvrXeayN@fundbigdaddy.t5xerws.mongodb.net/?retryWrites=true&w=majority&appName=FundBigDaddy