import mongoose from "mongoose";

const userInfo = new mongoose.Schema({
    
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    }
    
})

const UserInfo = mongoose.models.UserInfo || mongoose.model("userdetails", userInfo);

export default UserInfo;