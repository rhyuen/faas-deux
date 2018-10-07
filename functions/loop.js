exports.handler = async (evt, ctx, cb) => {
    let list = [];
    for (let i = 0; i < 1000; i++) {
        list.push(i);
    }

    cb(null, {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(list)
    });
};