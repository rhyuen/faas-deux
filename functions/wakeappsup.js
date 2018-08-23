const https = require("https");

exports.handler = (evt, ctx, cb) =>{
    const deploys = [
        "https://royuroot.now.sh/quotes/",
        "https://royuroot.now.sh/words/",
        "https://ryauth-alone.now.sh/auth",    
        "https://mailgenr8r.herokuapp.com",    
    ];
    

    https.get("https://royuroot.now.sh/quotes/", (res) => {
        let data = "";
        res.on("data", chuck => {
            data += chunk;
        });
        res.on("end", () => {
            cb(null, {
                statusCode: 200, 
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,            
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
        })
    }).on("error", err => {
        cb(err);
    });  
};