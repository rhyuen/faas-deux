exports.handler = (evt, ctx, cb) => {
    const list = [
        "https://engadget.com",
        "https://theverge.com",
        "https://reddit.com"
    ];
    const selection = Math.floor(Math.random()*10) % list.length;
    console.log("multiple headers.");
    const message = {value: 4, secondvalue: 5};

    cb(null, {
        statusCode: 200, 
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    });
};