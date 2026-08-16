const File = require("../models/File");
const { uploadFile: storeFile } = require("./file.storage");

async function uploadFile(file) {
    const result = await storeFile(file);

    const fileRecord = await File.create({
        originalName: file.originalname,
        size: file.size,
        mimeType: file.mimetype,
        storageLocation: result.provider,
        storageKey: result.storageKey,
        status: "available",
        failoverUsed: false
    });

    return fileRecord;
}

module.exports = {
    uploadFile
};