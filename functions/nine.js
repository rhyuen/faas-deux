exports.handler = (evt, ctx, cb) => {
  const list = [
    "https://royuone.netlify.com/images/one.jpg",
    "https://royuone.netlify.com/images/two.jpg",
    "https://royuone.netlify.com/images/three.jpg",
    "https://royuone.netlify.com/images/four.jpg",
    "https://royuone.netlify.com/images/five.jpg",
    "https://royuone.netlify.com/images/six.jpg",
    "https://royuone.netlify.com/images/seven.jpg",
    "https://royuone.netlify.com/images/eight.jpg"
  ];

  const response = { addresses: list };

  cb(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(response)
  });
};
