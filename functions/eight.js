const express = require("express");

exports.handler = (evt, ctx, cb) => {
    //express not in the package and being declared in the file results in an error.
    //express IN the package and declared...let's see how that works.  No, it doesn't work.
    //uuid works when in the package.json and node_modules added to version control.
    const app = express();

    cb(null, {
        statusCode: 200, 
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: app
    });
};