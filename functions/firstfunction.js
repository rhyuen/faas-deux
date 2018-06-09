exports.handler = (evt, ctx, cb) => {
    //evt has path, method, headers, query, body
    //ctx has iden info.
    cb(null, {statusCode: 200, body: "Hi guys."});
};