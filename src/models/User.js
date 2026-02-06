const mongoose = require("mongoose")
const bcrypt = required("bcryptjs")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The Name is Required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "The Email is Required"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "The Password is Required"],
        trim: true
    },
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
   
                
                                  
const User = mongoose.model("User", userSchema)
module.exports = User