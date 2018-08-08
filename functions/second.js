exports.handler = (evt, ctx, cb) => {
    //evt has path, method, headers, query, body
    //ctx has iden info.

    const requestPath = evt.path;
    const requestMethod = evt.httpMethod;


    cb(null, {
        statusCode: 200, 
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: `The path is as follows: ${requestPath}. \n The method type is ${requestMethod}.`
    });
};