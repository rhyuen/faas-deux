const axios = require("axios");

exports.handler = (evt, ctx, cb) => {
    
    axios.get("https://reddit.com/.json")
        .then(res => {
            cb(null, res)
        })
        .catch(err => {
            cb(err);
        });
}