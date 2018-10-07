const util = require("util");
const setTimeoutPromise = util.promisify(setTimeout);

exports.handler = async (evt, ctx, cb) => {

    const value = await setTimeoutPromise(4000, "batman")

    cb(null, {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    });
};