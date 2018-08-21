const fs = require("fs");

exports.handler = (evt, ctx, cb) => {
    const fileUrl = "./sample.txt";
    fs.readFile(fileUrl, (err, data) => {
        if (err){
            cb(err);
        }else{
            cb(null, {
                statusCode: 200, 
                body: data.toString()
            });
        }
    });
};
