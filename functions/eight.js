const express = require("express");

exports.handler = (evt, ctx, cb) => {
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