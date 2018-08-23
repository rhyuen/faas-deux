const fs = require("fs");

exports.handler = (evt, ctx, cb) => {
    const fileUrl = "./sample.txt";
    //Doesn't Work.  File not found. when the function starts.
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
