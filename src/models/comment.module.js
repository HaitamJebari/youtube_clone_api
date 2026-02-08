const mongoose = require("mongoose")
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2")

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "The Comment Content is Required"],
        trim: true,
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "The Owner is Required"],
        ref: "User"
    },
    parentComment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },
},

{ timestamps: true}

);

//Add the mongoose-aggregate-paginate plugin
videoSchema.plugin(mongooseAggregatePaginate)

                
//Compile the Schema to form  model
const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment