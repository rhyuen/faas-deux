const fs = require("fs");

exports.handler = (evt, ctx, cb) => {
    const fileUrl = "./sample.txt";
    fs.readFile(fileUrl, (err, data) => {
        if (err){
            cb(err);
        }
        cb(null, data.toString());
    });
};
