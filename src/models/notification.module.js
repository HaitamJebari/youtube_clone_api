const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema({
    recipent: {
        type: mongoose.Types.ObjectId,
        required: [true, "The Recipent is Required"],
        ref: "User"
    },
    sender: {
        type: mongoose.Types.ObjectId,
        required: [true, "The Sender is Required"],
        ref: "User"
    },
    type: {
        type: String,
        required: [true, "The Notification type is Required"],
        enum:["SUBCRIPTION","COMMENT","REPLY","VIDEO"]
    },
    content: {
        type: String,
        required: [true, "The Content is Required"],
    },
    read: {
        type: Boolean,
        default: false,
    },

},

    { timestamps: true }

);



//Compile the Schema to form  model
const Notification = mongoose.model("Notification", notificationSchema)
module.exports = Notification