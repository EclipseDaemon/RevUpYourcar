const { constants } = require("../Constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  let response = {
    title: "Error",
    message: err.message,
  };

  if (process.env.NODE_ENV !== "production") {
    response.stack = err.stack;
  }

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      response.title = "Validation Error";
      break;
    case constants.NOT_FOUND:
      response.title = "Not Found";
      break;
    case constants.UNAUTHORIZED:
      response.title = "Unauthorized";
      break;
    case constants.FORBIDDEN:
      response.title = "Forbidden";
      break;
    case constants.SERVER_ERROR:
      response.title = "Server Error";
      break;
    default:
      response.title = "Unknown Error";
      break;
  }

  res.json(response);
};

module.exports = errorHandler;
