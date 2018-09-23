exports.handler = (evt, ctx, cb) => {
  const request = require("request");
  request("https://reddit.com/.json", (err, res, body) => {
    if (err) {
      return cb(err);
    }
    cb(null, {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  });
};
