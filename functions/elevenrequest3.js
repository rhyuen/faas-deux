exports.handler = async (evt, ctx, cb) => {    
    //Even when the external library is in scope, it doesn't work.

    try{
        const axios = require("axios");    
        const data = await axios.get("https://reddit.com/.json");
        cb(null, JSON.stringify(data));
    }
    catch(e){
        cb(e);
    }
}