const uuid = require("uuid/v4");

exports.handler = (evt, ctx, cb) => {
    console.log(evt);
    const val = uuid();    
    
    cb(null, {
        statusCode: 200, 
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: val
    });
};