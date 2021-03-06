exports.handler = (evt, ctx, cb) => {
  //evt has path, method, headers, query, body
  //ctx has iden info.

  const requestPath = evt.path;
  const requestMethod = evt.httpMethod;
  const message = {
    message: `The path is as follows: ${requestPath}. \n The method type is ${requestMethod}.`,
    another: "Oh look, this may or may not work."
  };

  cb(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(message)
  });
};
