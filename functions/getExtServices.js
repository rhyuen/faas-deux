exports.handler = (evt, ctx, cb) => {
  const list = {
    heroku: {
      auth: "https://ry-auth-api.herokuapps.com/",
      quotes: "https://ry-quotes-api.herokuapps.com/",
      words: "https://ry-words-api.herokuapps.com/"
    },
    now: {
      auth: "https://ryauth-alone.now.sh/",
      quotes: "https://ryquotes.now.sh/",
      words: "https://rywords.now.sh/"
    }
  };

  cb(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(list)
  });
};
