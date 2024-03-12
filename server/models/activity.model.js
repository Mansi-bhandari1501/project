import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books",
    },


    time: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Issue",
        },

    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",

    },

    fine: {
        amount: Number,
        date: Date,
    },

    entryTime: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ["requested", "issued", "returned"],
        default: "requested"
    }
});

const activityModel = mongoose.model('activity', activitySchema);
export default activityModel;