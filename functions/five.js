exports.handler = (evt, ctx, cb) => {    
    const list = [
        "https://engadget.com",
        "https://theverge.com",
        "https://reddit.com"
    ];
    const selection = Math.floor(Math.random()*10) % list.length;
    cb(null, {
        statusCode: 200, 
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: `RNG perhaps. ${list[selection]}`
    });
};