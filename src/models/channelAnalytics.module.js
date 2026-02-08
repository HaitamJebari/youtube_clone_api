const mongoose = require("mongoose")

const channelAnalyticsSchema = new mongoose.Schema({
    channel: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    totalView: {
        type: Number,
        default: 0
    },
    totalSubscribers: {
        type: Number,
        default: 0
    },
    totalVideos: {
        type: Number,
        default: 0
    },
    totalLikes: {
        type: Number,
        default: 0
    },
    totalComments: {
        type: Number,
        default: 0
    },
    dailyStats: [
        {
            date: { type: Date , required: true},
            views: { type: Number , default: 0},
            subscribersGained: { type: Number , default: 0},
            subscribersLost: { type: Number , default: 0},
            likes: { type: Number , default: 0},
            comments: { type: Number , default: 0},
        }
    ],
},
    { timestamps: true }
);

//Index for faster lookups
//allows to combine documents from multiple collections ex. getting videos with user data
channelAnalyticsSchema.index({ channel: 1 })

//Compile the Schema to form  model
const channelAnalytics = mongoose.model("channelAnalytics", channelAnalyticsSchema)
module.exports = channelAnalytics