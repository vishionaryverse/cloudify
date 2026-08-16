async function uploadFile(file) {
    console.log("Storage received:");
    console.log("Filename:", file.originalname);
    console.log("Size:", file.size);
    console.log("MIME type:", file.mimetype);

    return {
        message: "File passed through storage layer successfully",
        filename: file.originalname,
        size: file.size,
        mimetype: file.mimetype,
        provider: "fake-storage",
        storageKey: `temp/${file.originalname}`
    };
}

module.exports = {
    uploadFile
};