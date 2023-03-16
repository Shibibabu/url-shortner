const express = require("express");
const client = require("../db");
const router = express.Router();
const {
  validateURL,
  generateHash,
  sendFailedResponse,
  sendRedirectResponse,
  sendSuccessResponse,
  sendInternalServerErrorResponse,
} = require("../utils");

router.post("/", async (req, res) => {
  try {
    if (req.body === null || req.body === undefined) {
      return sendFailedResponse("invalid body");
    }
    const { url } = req.body;
    if (url === null || url === undefined) {
      return sendFailedResponse(res,"invalid body");
    }
    let valid=validateURL(url)
    if (!valid) {
      return sendFailedResponse(res,"invalid url");
    }
    // generate hash 
    const hash = generateHash();
    // save in redis (key,value) 
    await client.set(hash, url);
    sendSuccessResponse(res, {
      message: "url hash generated",
      urlhash: hash,
    });
  } catch (error) {
    sendInternalServerErrorResponse(res, error);
  }
});

router.get("/:hash", async (req, res) => {
  try {
    if (req.params === null || req.params === undefined) {
      sendFailedResponse(res,"invalid body");
    }
    const { hash } = req.params;
    if (hash === null || hash === undefined) {
      sendFailedResponse(res,"invalid body");
    }

    // fetch value from redis using key
    const redirectUrl = await client.get(hash);

    if (redirectUrl === null) {
      sendFailedResponse(res,"invalid url hash");
    } else {
      sendRedirectResponse(res, redirectUrl);
    }
  } catch (error) {
    sendInternalServerErrorResponse(res, error);
  }
});

module.exports = router;
