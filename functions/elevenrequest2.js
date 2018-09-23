exports.handler = (evt, ctx, cb) => {
  //If Ext library is out of scope of handler then it doesn't work.
  //Odd how it works for uuid though.

  const axios = require("axios");

  axios
    .get("https://reddit.com/.json")
    .then(res => {
      cb(null, res);
    })
    .catch(err => {
      cb(err);
    });
};
