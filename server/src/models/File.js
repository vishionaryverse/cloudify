const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
    {
        originalName: {
            type: String,
            required: true
        },

        size: {
            type: Number,
            required: true
        },

        mimeType: {
            type: String,
            required: true
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        storageLocation: {
            type: String,
            required: true
        },

        storageKey: {
            type: String,
            required: true
        },

        status: {
            type: String,
            default: "uploading"
        },

        failoverUsed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("File", fileSchema);