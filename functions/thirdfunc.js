exports.handler = (evt, ctx, cb) => {
    const requestPath = evt.path;
    const requestMethod = evt.httpMethod;

    cb(null, {
        statusCode: 200, 
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: {
            message: `The path is as follows: ${requestPath}. \n The method type is ${requestMethod}.`            
        }
    });
};