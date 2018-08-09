exports.handler = (evt, ctx, cb) => { 
    const message = {
        data: ["apple", "orange", "lemon", "lime", "blueberry", "grape", "plum"]
    };

    cb(null, {
        statusCode: 200, 
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    });
};