const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const generateHash = () => {
  let r = (Math.random() + 1).toString(36).substring(7);
  return r;
};

const sendFailedResponse = (response, message) => {
  response.status(400).send(message);
  return;
};

const sendSuccessResponse = (response, data) => {
  response.status(201).send(data);
  return;
};

const sendRedirectResponse = (response, url) => {
  response.status(301).redirect(url);
  return;
};

const sendInternalServerErrorResponse = (response, error) => {
  response.status(500).send(error);
  return;
};

module.exports = {
  validateURL,
  generateHash,
  sendFailedResponse,
  sendRedirectResponse,
  sendSuccessResponse,
  sendInternalServerErrorResponse,
};
