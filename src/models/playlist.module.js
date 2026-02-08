const mongoose = require("mongoose")

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The Playlist is Required"],
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    videos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }],

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    
},

    { timestamps: true }

);



//Compile the Schema to form  model
const Playlist = mongoose.model("Playlist", playlistSchema)
module.exports = Playlist