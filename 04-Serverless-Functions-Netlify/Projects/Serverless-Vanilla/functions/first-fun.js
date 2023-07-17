//domain/.netlify/functions/first-fun
exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: "Hello World",
  };
};
