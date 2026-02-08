const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    video: {
        type: mongoose.Types.ObjectId,
        ref: "Video"
    },
    comment: {
        type: mongoose.Types.ObjectId,
        ref: "Comment"
    },
    likedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
},
    { timestamps: true }
);

//Ensure that a 'like' must refer to either a video or a comment, but not both
likeSchema.pre('save', function() {
    if(!this.video && !this.comment) {
        const error = new Error("A like must refer to either a video or a comment")
        return error
    }
    if(this.video && this.comment){
        const error = new Error("A like must refer to either a video or a comment, but not both")
        return error
    }
    return
})

//Compound index to ensure a user can only like a video or comment once
likeSchema.index({ video: 1, likedBy: 1 }, { unique: true, sparse: true}) // sparse: include document that have both fields present

//Compile the Schema to form  model
const Like = mongoose.model("Like", likeSchema)
module.exports = Like