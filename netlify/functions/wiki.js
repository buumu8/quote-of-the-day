exports.handler = async function (event, context) {
  const { author } = JSON.parse(event.body);
  fetch
    .get(
      `http://en.wikipedia.org/w/api.php?action=query&titles=${author}&prop=pageimages|info&inprop=url&format=json&pithumbsize=100`
    )
    .then((response) => response.json())
    .then((result) => {
      const data = result.data;
      return {
        statusCode: 200,
        body: JSON.stringify({ message: data }),
      };
    })
    .catch((e) => {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "error: " + e }),
      };
    });
};
