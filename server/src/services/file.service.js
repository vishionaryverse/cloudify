const { uploadFile: storeFile } = require("./file.storage");

async function uploadFile(file) {
    const result = await storeFile(file);

    return result;
}

module.exports = {
    uploadFile
};