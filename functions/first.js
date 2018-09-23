exports.handler = (evt, ctx, cb) => {
  //evt has path, method, headers, query, body
  //ctx has iden info.
  cb(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: "Hi guys. Awesome.  There was an attempt."
  });
};
