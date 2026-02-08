const mongoose = require("mongoose")
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2")

const videoSchema = new mongoose.Schema({
    videoFile: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    thumbnail: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    title: {
        type: String,
        required: [true, "The Video Title is Required"],
        trim: true,
        index: true
    },
    description: {
        type: String,
        required: [true, "The Description is Required"],
        trim: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    views: {
        type: Number,
        required: 0,
    },
    shares: {
        type: Number,
        required: 0,
    },
    isPublished: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    tags: [{
        type: String,
        trim: true,
    }],
}, { timestamps: true })

//Add the mongoose-aggregate-paginate plugin
videoSchema.plugin(mongooseAggregatePaginate)

//add index for text search
videoSchema.index({ title: 'text', description: 'text', tags: 'text' })

//Compile the Schema to form  model
const Video = mongoose.Model("Video", videoSchema)

module.exports = Video