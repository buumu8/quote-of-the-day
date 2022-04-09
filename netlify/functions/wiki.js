const axios = require("axios");

exports.handler = async function (event, context) {
  const { author } = JSON.parse(event.body);
  const API_ENDPOINT = `http://en.wikipedia.org/w/api.php?action=query&titles=${author}&prop=pageimages|info&inprop=url&format=json&pithumbsize=100`;
  let response;

  try {
    const result = await axios.get(API_ENDPOINT);
    response = result.data;
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ message: "error: " + err }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response,
    }),
  };
};
