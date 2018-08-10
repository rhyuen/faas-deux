exports.handler = (evt, ctx, cb) => {
    console.log(evt);
    
    cb(null, {
        statusCode: 200, 
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(evt)
    });
};