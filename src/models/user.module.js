const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "The Username is Required"],
        trim: true,
        unique: true,
        lowercase: true,
        index: true
    },
    fullname: {
        type: String,
        required: [true, "The Fullname is Required"],
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: [true, "The Email is Required"],
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "The Password is Required"],
        trim: true,
        minlength: [8, 'Password must be atleast 8 characters']
    },
    avatar: {
        public_id: String,
        url: String
    },
    coverImage: {
        public_id: String,
        url: String
    },
    refreshToken: {
        type: String,
    },
    watchHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }],
    isVerified: {
        type: Boolean,
        default: false
    },
    //Channel specific fields
    channelDescription: {
        type: String,
        default: ""
    },
    channelTags: {
        type: [String],
        default: []
    },
    socialLinks: {
        x: String,
        instagram: String,
        website: String
    },
    notificationSettings: {
        emailNotification: {
            type: Boolean,
            default: true
        },
        commentActivity: {
            type: Boolean,
            default: true
        },
    },
    //Password reset fields
    refreshPasswordToken: String,
    resetPasswordExpiry: String,

    //Admin role
    isAdmin: {
        type: Boolean,
        default: false
    },
},

{ timestamps: true}

);

//model to compare password with hashed password
userSchema.methods.matchPassword = async function (enteredPass){
    return await bcrypt.compare(enteredPass, this.password)
}

//Post middlware after create document
userSchema.pre("save", async function(){
    //hash it if modified
    if(!this.isModified("password")){ //pre middlware before saved
        return 
    }
    //hash password
    const salt = await bcrypt.gensalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
   
                
//Compile the Schema to form  model
const User = mongoose.model("User", userSchema)
module.exports = User