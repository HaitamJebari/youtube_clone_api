const mongoose = require("mongoose")

const subscriptionSchema = new mongoose.Schema({
    subscriber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })


//Compound index to ensure a user can only subscribe to a channel
subscriptionSchema.index(
    { channel: 1, channel: 1 },
    { unique: true}
)

//Compile the Schema to form  model
const Subscriber = mongoose.Model("Subscriber", subscriptionSchema)

module.exports = Subscriber